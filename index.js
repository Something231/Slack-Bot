require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/harmonic-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/uwuify", async ({ command, ack, respond }) => {
  const input = command.text
  await ack();
  const a = input
    .replaceAll(/r/g, 'w')
    .replaceAll(/th/g, 'd')
    .replaceAll(/l/g, 'w')
    .replaceAll('you', 'y-you')
    .replaceAll('ove', 'uv')
    .replaceAll(/n/g, 'ny')
    .replaceAll(" w", ' w-w')
    .replaceAll(' h', ' h-h')
  await respond({ text: a});
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();