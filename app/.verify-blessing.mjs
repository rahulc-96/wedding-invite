import { chromium } from 'playwright';

const OUT = process.env.SCREENSHOT_DIR || '.';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });

await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.getByRole('button', { name: /open invitation/i }).click();
await page.waitForTimeout(1200);

await page.evaluate(() => {
  const p = Array.from(document.querySelectorAll('p')).find((el) => el.textContent?.includes('Awaiting your presence'));
  p?.closest('section')?.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/blessing-note-new.png` });

await browser.close();
