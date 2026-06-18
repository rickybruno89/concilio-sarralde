import { chromium } from "playwright";

const url = process.env.BROCHURE_URL ?? "http://localhost:5173/brochure?pdf=1";
const output = process.env.BROCHURE_OUTPUT ?? "./brochure.pdf";

// A4 a 96 dpi = 794 × 1123 px
const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: A4_WIDTH, height: A4_HEIGHT } });

await page.goto(url, { waitUntil: "networkidle" });

// Esperar a que las fuentes (Google Fonts) estén completamente cargadas
await page.waitForFunction(() => document.fonts.ready.then(() => true), null, {
  timeout: 10_000,
});

// Pequeña pausa para que el navegador termine de repintar con las fuentes cargadas
await page.waitForTimeout(500);

await page.pdf({
  path: output,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`PDF generado en ${output}`);
