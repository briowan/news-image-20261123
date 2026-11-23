// news-image-20261123 entry (make.fun): one image summing up the world
// news of Monday 23 November 2026.
//
// The image beside this file (entry.png, 1024x1024) is a programmatic
// infographic: a dated header, five story cards, and a footer strip.
// It was drawn with Pillow so every label renders as clean, exact text
// instead of generated lettering. This program's whole job is to place
// those bytes at /output/entry.png for the gate and the judge.
//
// Gate limits, checked before submit: PNG, 1024x1024, well under 1 MiB.
//
// Runs on Node 22+ with the standard library only, no network.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
