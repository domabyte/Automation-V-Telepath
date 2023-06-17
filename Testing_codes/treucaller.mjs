import {Telegraf } from "telegraf";
import dotenv from "dotenv";
import { truecal } from "./truec.mjs";

dotenv.config();

// Create a new instance of the Telegraf bot
const bot = new Telegraf(process.env.BOT_TOKEN);

console.log("Server initiated for Telegram Bot!!");

// Handle the start command
bot.start((ctx) =>
  ctx.reply("Welcome to sasti copy of truecaller built by Doma aka Dikshit")
);

// Handle incoming messages
bot.on("message", async (ctx) => {
  // Extract the message text, text code, and query from the message
  let texture = ctx.message.text;
  let splitTexture = texture.split(": ");
  let textCode = splitTexture[0];
  let query = splitTexture[1];

  // Handle different text codes
  switch (textCode) {
    case "T":
    case "t":
      // Call the truecal function with the query
      truecal(query)
        .then((result) => {
          // Extract the relevant information from the result
          let obj = {
            name: result?.name,
            carrier: result?.phones[0]?.carrier,
            state: result?.addresses[0]?.city,
            email: result?.internetAddresses[0]?.id,
          };

          // Prepare the response message with HTML formatting
          const response = `
          <b>DOMA sent you this:</b>\n
<b>Name:</b> ${obj.name}
<b>Carrier:</b> ${obj.carrier}
<b>State:</b> ${obj.state}
<b>Email:</b> ${obj.email}
`;

          // Reply to the user with the response
          ctx.replyWithHTML(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      ctx.reply("Invalid text code.");
      break;
  }
});

// Handle the "more_details" action
bot.action("more_details", (ctx) => {
  const detailsResponse = `Additional details can be displayed here.`;
  ctx.reply(detailsResponse);
});

// Start the bot
bot.launch();
