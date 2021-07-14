const express = require('express')
const chromium = require("chrome-aws-lambda");
const { tokenize } = require("kuromojin");
const { getHtml } = require("./template");
const { getData } = require("./data");

const splitSentence = (tokens) => {
  const result = [];
  const last = tokens.reduce((values, current) => {
    const lastValue = values[values.length - 1];
    if (lastValue) {
      if (
        current.pos === "記号" &&
        ["読点", "句点", "一般"].includes(current.pos_detail_1)
      ) {
        result.push(lastValue.surface_form + current.surface_form);
        return [];
      } else if (lastValue.pos_detail_1 === "括弧開") {
        result.push(lastValue.surface_form + current.surface_form);
        return [];
      } else if (
        ["名詞", "動詞"].includes(lastValue.pos) &&
        current.pos === "助詞"
      ) {
        result.push(lastValue.surface_form + current.surface_form);
        return [];
      } else if (lastValue.pos === "動詞" && current.pos === "助動詞") {
        result.push(lastValue.surface_form + current.surface_form);
        return [];
      }
      result.push(lastValue.surface_form);
      return [current];
    }

    if (["読点", "句点"].includes(current.pos_detail_1)) {
      result[result.length - 1] =
        result[result.length - 1] + current.surface_form;
      return [];
    }

    return [current];
  }, []);
  if (last[0]) result.push(last[0].surface_form);
  return result;
};

const getTextNodes = async (text) => {
  const tokens = await tokenize(text);
  const results = [];
  let words = "";
  return splitSentence(tokens);
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
  await chromium.font(
    "https://rawcdn.githack.com/googlefonts/noto-cjk/cee7438f5f8e66397090d483c15275d1af3d87c7/Sans/OTF/Japanese/NotoSansCJKjp-Bold.otf"
  );
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
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath:
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          headless: true,
          ignoreHTTPSErrors: true,
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