const Tesseract = require("tesseract.js");
const puppeteer = require("puppeteer");
const chalk = require("chalk");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let page;
let promise = false;
const [x, y, width, height] = [200, 340, 380, 35];
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  page.on("close", () => {
    process.exit(0);
  });
  await page.goto("https://sushida.net/play.html");
  start();
  async function start() {
    await new Promise(async (re) => {
      console.log(
        chalk.red("\n注意") +
          chalk.yellow(
            "お手軽コース（3000円）ではなぜか期待通り動作しないためその他のコースで実行してください\n"
          ) +
          chalk.cyan("製作者:@kozaku05\nhttps://github.com/kozaku05\n") +
          chalk.blue("\n実行中に再度エンターを押すと停止します")
      );
      await rl.question(
        chalk.green("準備ができたらエンターで開始-exitで終了: "),
        async (text) => {
          if (text == "exit") {
            await browser.close();
            process.exit(0);
          }
          re();
        }
      );
    });
    const loop = setInterval(shot, 300);
    rl.question("", () => {
      clearInterval(loop);
      setTimeout(() => {
        start();
      }, 1000);
    });
  }
})();
async function shot() {
  if (promise) return;
  promise = true;
  const screenshot = await page.screenshot({
    clip: {
      x: x,
      y: y,
      width: width,
      height: height,
    },
  });
  const {
    data: { text },
  } = await Tesseract.recognize(screenshot, "eng");
  if (!text) return (promise = false);
  let result = text.match(/[a-zA-Z-/?!]+/g);
  if (result.length > 1) {
    result = result.filter((t) => t.length > 3);
  }
  console.log("[" + chalk.blue(result) + "]");
  if (result) {
    await page.keyboard.type(result.join(""));
  }
  promise = false;
}
