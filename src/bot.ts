import type { Message } from "discord.js";
import { LawsonClient } from "./lib/LawsonClient";
import { container } from "@sapphire/framework";
import { Client } from "discord-hybrid-sharding";

export const snipes = new Map<string, Message>();
export const editsnipes = new Map<string, Message[]>();

const client = new LawsonClient();

export const disallowedResponses = [
  "Bro, no.",
  "You actually thought I'd let yo ratchet ass run this fuckin' command?",
  "Listen, I don't know what you expected to happen, but honestly, it ain't gonna work here. Not with you running this command.",
  "Absolutely fucking not.",
  "Literally no.",
  "Have you considered putting yourself up for adoption? Maybe your parents will let you run this command, but I fucking won't.",
  "NO.",
  "Did you think this would do something? Did you think I'd let you run this? No. Go back to the little hole you came from.",
  "Oh my fucking god- you thought that'd do something? Nah, not when you're running this command. Fuck off.",
  "You can't run that, but you can get this:\n    ❤️ ✨ 😄Has anyone ever told you that your face makes me fucking puke?😄✨❤️",
  "You can't run that, but you can RUN YO FUCKIN' POCKETS.",
];

// 11

async function main() {
  try {
    client.logger.info("Attempting to login...");
    await client.login(process.env.token ?? "0");
      client.logger.info("Successfully Logged In ✅");
      
      
  } catch (error) {
    client.logger.fatal(
      "I had an issue trying to initialize! The issue should be somewhere below this line."
    );
    console.log(error);
  }
}

main();
