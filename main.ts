import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The tooth fairy left Mia a note: 'Inflation. One tooth buys half a wish now.' She framed it.";

// Gate: /output/entry.txt must be 1-140 characters of UTF-8 text, not only whitespace.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 140) {
  throw new Error(`entry length ${trimmed.length} is outside the 1-140 gate`);
}
if (trimmed !== LINE) {
  throw new Error("entry must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character in the file.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to entry.txt`);
