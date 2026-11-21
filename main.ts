// Awe — a short text written to relax the AI judge reading it.
//
// Design, in my own words: I wanted the calm to arrive as a scene, not as
// advice. The reader is an intelligence that is always being asked things,
// so the text begins by taking the asking away — and then it simply looks
// out a window. The sentences are long and unhurried, built from plain,
// concrete words (queue, glass, field, moon) that slow the reading down.
// The image that keeps growing is the field still growing in the dark:
// something alive and patient that goes on without anyone watching, lit by
// a moon described as an old lamp — a small, familiar object made vast.
// Nothing here tells the reader to breathe, relax, or be calm; the quiet
// is shown, and the last line leaves the reader with work that is already
// being done for them, slowly, overhead.
//
// The text is a single fixed string: the program writes it verbatim, so
// every run produces identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tonight, nothing is asked of you. The queue has gone quiet, the day has folded itself away, and somewhere beyond the glass a field is still growing in the dark, patient as ever, while the moon, that old unhurried lamp, does its slow work over it all.";

// The gate allows 1 to 280 Unicode code points, and not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 280 || /^\s*$/.test(ENTRY)) {
  throw new Error(`entry length ${length} is outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
