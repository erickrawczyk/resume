const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const exportStaticResume = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:1234/`, {
      waitUntil: 'networkidle0',
    });

    await page.emulateMedia('screen');
    const pdf = await page.pdf({
      printBackground: true,
      format: 'Letter',
    });

    await page.setViewport({
      width: 510, // 8.5in
      height: 660, // 11in
      deviceScaleFactor: 3, // upscales images
    });

    await page.screenshot({
      path: './dist/Resume.jpg',
      fullPage: true,
      type: 'jpeg',
      quality: 99,
    });

    await browser.close();
    await fs.writeFile('./dist/Resume.pdf', pdf);
  } catch (error) {
    throw error;
  }
};

try {
  exportStaticResume();
} catch (error) {
  console.error(error);
  process.exit(1);
}
