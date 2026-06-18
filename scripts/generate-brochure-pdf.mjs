import { chromium } from "playwright";

const url = process.env.BROCHURE_URL ?? "http://localhost:5173/brochure?pdf=1";
const output = process.env.BROCHURE_OUTPUT ?? "./brochure.pdf";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1800 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.pdf({
  path: output,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log(`PDF generado en ${output}`);
