const puppeteer = require("puppeteer-core");

exports.handler = async (req, res) => {
  // FIXME: Support other OS
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  await page.goto("https://gishohaku.dev/");
  await page.setViewport({ width: 1200, height: 630 });
  const file = await page.screenshot();

  await browser.close();

  res.statusCode = 200;
  res.setHeader("Content-Type", `image/png`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  );
  res.end(file);
};
