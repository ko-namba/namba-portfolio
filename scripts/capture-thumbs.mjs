import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const outDir = path.resolve('public/works')
await mkdir(outDir, { recursive: true })

const targets = [
  { file: 'heiwavoice.jpg', url: 'https://kumikatsu.kobe.coop/heiwavoice/' },
  { file: '100months.jpg', url: 'https://www.kobe.coop.or.jp/special/100months/' },
  {
    file: 'mealkit.jpg',
    url: 'https://maikuru.coop-kobe.net/mealkit/',
    // 遅延読み込み対策：一度下へスクロールしてから最上端で撮影
    scrollDownThenTop: true,
  },
  { file: 'noukotsu.jpg', url: 'https://www.cleri-net.or.jp/cleri-life/noukotsu/' },
  { file: 'family-funeral.jpg', url: 'https://www.cleri-net.or.jp/cleri-life/family-funeral/' },
  { file: 'moneymind.jpg', url: 'https://moneymind-ai-zeta.vercel.app' },
]

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
})

const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  locale: 'ja-JP',
})

for (const target of targets) {
  const page = await context.newPage()
  console.log('capturing', target.url)
  try {
    await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 60000 })
    await page.waitForTimeout(2500)
    await page.evaluate(() => {
      const candidates = [...document.querySelectorAll('button, a')]
      for (const el of candidates) {
        const t = (el.textContent || '').trim()
        if (/同意|同意する|OK|閉じる|Accept|同意して/.test(t)) {
          el.click()
          break
        }
      }
    }).catch(() => {})
    await page.waitForTimeout(800)

    if (target.scrollDownThenTop) {
      await page.evaluate(async () => {
        const distance = 400
        const max = Math.max(document.body.scrollHeight, 2000)
        for (let y = 0; y < max; y += distance) {
          window.scrollTo(0, y)
          await new Promise((r) => setTimeout(r, 150))
        }
      })
      await page.waitForTimeout(800)
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.waitForTimeout(1200)
    } else if (target.scrollToText) {
      const y = await page.evaluate((needle) => {
        const nodes = [...document.querySelectorAll('h1, h2, h3, p, li, div, span')]
        for (const el of nodes) {
          const text = (el.textContent || '').replace(/\s+/g, ' ').trim()
          if (text.includes(needle) && text.length < 200) {
            const top = el.getBoundingClientRect().top + window.scrollY
            return Math.max(0, Math.floor(top - 120))
          }
        }
        return 700
      }, target.scrollToText)
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
      await page.waitForTimeout(1000)
    }

    await page.screenshot({
      path: path.join(outDir, target.file),
      type: 'jpeg',
      quality: 82,
    })
    console.log('saved', target.file)
  } catch (err) {
    console.error('failed', target.file, err.message)
  } finally {
    await page.close()
  }
}

await browser.close()
console.log('done')
