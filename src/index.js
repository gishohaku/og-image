const express = require('express')
const chromium = require("chrome-aws-lambda");
const { getHtml } = require("./template");
const { getData } = require("./data");

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
app.use('/books/:id', async (req, res) => {
  const bookId = req.params.id
  const data = await getData(bookId);
  const {
    circle: { name: circleName },
    title,
    images,
  } = data;
  console.log(images[0]);
  const props = {
    circle: circleName,
    name: title,
    image: !!images[0] ? replaceImageUrl(images[0]) : null,
  };
  const html = getHtml(props);
  const file = await capture(html);

  res.statusCode = 200;
  res.setHeader("Content-Type", `image/png`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  );
  res.end(file);
});
app.use((req, res) => {
  res.end('hello world')
});

exports.handler = app

exports.html = async (req, res) => {
  const props = {
    circle: "モウフカブール",
    name: "明後日から使えるKubernetes入門（新刊）",
  };
  const html = getHtml(props);

  res.statusCode = 200;
  res.end(html);
};