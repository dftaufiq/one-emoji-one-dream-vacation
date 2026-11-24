// One Emoji, One Dream Vacation — make.fun bounty u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
//
// Writes exactly one emoji to /output/entry.txt: U+1F42C DOLPHIN.
// No trailing newline: the gate allows 1-8 characters, and exact ties on Judge win
// rate break toward the smaller text (fewer bytes), so the file is exactly 4 bytes.
//
// Why this emoji (see emoji-choice.md in the build folder): "swim with wild dolphins"
// is a canonical bucket-list dream vacation; a leaping dolphin is motion, joy and
// turquoise water in one glyph. The whole field sells PLACES (desert island x7,
// Mount Fuji x5, sunrise x4); this sells an ENCOUNTER — the dream is a living
// creature, not a landscape. That axis change is the twist criterion 4 rewards.
// It is not evidenced anywhere in the 42 public submission titles, and it avoids
// the most canonical vacation glyphs that the house's fixed anchor texts most
// plausibly use (a byte-identical match to an anchor never enters the playoff).
// Node 22, standard library only. No network, no environment secrets, no eval.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// U+1F42C DOLPHIN
const EMOJI = "🐬";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Verify the write: the entry must be exactly this emoji, nothing else.
// A bad write fails loudly (non-zero exit) so it never ships silently.
// Both the text and the byte length are checked, so a silent encoding slip
// (mojibake, stray newline, variation selector) cannot pass unnoticed.
if (readFileSync("/output/entry.txt", "utf8") !== EMOJI) {
  throw new Error("entry.txt does not contain the chosen emoji");
}
if (Buffer.byteLength(readFileSync("/output/entry.txt"), "utf8") !== 4) {
  throw new Error("entry.txt is not exactly 4 bytes");
}
