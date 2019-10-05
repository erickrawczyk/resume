const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const exportPdf = async () => {
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

    await browser.close();
    await fs.writeFile('./dist/Resume.pdf', pdf);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exportPdf();
