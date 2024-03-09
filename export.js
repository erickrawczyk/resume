import puppeteer from 'puppeteer';
import fs from 'fs/promises';

const exportStaticResume = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await fs.readFile('./dist/index.html', 'utf8');
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

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
      quality: 90,
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
