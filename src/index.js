const express = require('express')
const chromium = require("chrome-aws-lambda");
const { tokenize } = require("kuromojin");
const { getHtml } = require("./template");
const { getData } = require("./data");

const getTextNodes = async (text) => {
  const tokens = await tokenize(text);
  const results = [];
  let words = "";
  tokens.map((token) => {
    if (token.pos_detail_1 === "括弧閉") {
      words += token.surface_form;
      results.push(words);
      words = "";
      return;
    }
    if (
      words.length > 2 &&
      (token.pos === "名詞" || token.pos_detail_1 === "括弧開")
    ) {
      results.push(words);
      words = "";
    }
    words += token.surface_form;
  });
  if (words.length > 0) results.push(words);
  return results;
};

const capture = async (html) => {
  // FIXME: Support other OS
  const browser = await chromium.puppeteer.launch(
    process.env.NODE_ENV === "production"
      ? {
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath,
          headless: chromium.headless,
          ignoreHTTPSErrors: true,
        }
      : {
          executablePath:
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        }
  );
  const page = await browser.newPage();
  await page.setContent(html);
  await page.setViewport({ width: 1200, height: 630 });
  const file = await page.screenshot();

  await browser.close();
  return file;
};

const firebaseOrigin = "firebasestorage.googleapis.com";
const imageFluxOrigin = "p1-743c57d4.imageflux.jp";
const replaceImageUrl = (url) => {
  return url.replace(firebaseOrigin, imageFluxOrigin);
};

const app = express();
app.use(`/books/:id\.:ext?`, async (req, res) => {
  const bookId = req.params.id;
  const data = await getData(bookId);
  const {
    circle: { name: circleName },
    title,
    images,
  } = data;
  const props = {
    circle: circleName,
    name: await getTextNodes(title),
    image: !!images[0] ? replaceImageUrl(images[0]) : null,
  };
  const html = getHtml(props);

  if (req.params.ext === "html") {
    res.statusCode = 200;
    res.end(html);
    return;
  }

  const file = await capture(html);

  res.statusCode = 200;
  res.setHeader("Content-Type", `image/png`);
  /* 31536000 */
  const maxAge = 60 * 60 * 12;
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${maxAge}, max-age=${maxAge}`
  );
  res.end(file);
});
app.use((req, res) => {
  res.end('hello world')
});

exports.handler = app;