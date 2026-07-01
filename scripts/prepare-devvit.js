#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const staticFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "poker-engine.js",
  "player-avatar.svg",
  "clair-de-lune.ogg"
];

function copyStaticFiles() {
  fs.rmSync(publicDir, { recursive: true, force: true });
  fs.mkdirSync(publicDir, { recursive: true });

  for (const file of staticFiles) {
    const source = path.join(rootDir, file);
    const target = path.join(publicDir, file);

    if (!fs.existsSync(source)) {
      throw new Error(`Missing static asset for Devvit package: ${file}`);
    }

    fs.copyFileSync(source, target);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: "GRITH Hold'em Agent Console",
    files: staticFiles
  };

  fs.writeFileSync(
    path.join(publicDir, "devvit-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
}

copyStaticFiles();
console.log(`Prepared Reddit Devvit web assets in ${path.relative(rootDir, publicDir)}/`);

if (process.argv.includes("--watch")) {
  console.log("Watching static assets for Devvit playtest...");
  for (const file of staticFiles) {
    fs.watchFile(path.join(rootDir, file), { interval: 500 }, copyStaticFiles);
  }
}
