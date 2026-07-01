#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const serverEntry = path.join(rootDir, "src/server/index.js");
const serverOutfile = path.join(rootDir, "dist/server/index.js");

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

async function buildServer() {
  await esbuild.build({
    entryPoints: [serverEntry],
    outfile: serverOutfile,
    bundle: true,
    format: "cjs",
    platform: "node",
    target: "node20",
    packages: "bundle",
    logLevel: "silent"
  });
}

async function buildAll() {
  copyStaticFiles();
  await buildServer();
  console.log(`Prepared Reddit Devvit web assets in ${path.relative(rootDir, publicDir)}/`);
  console.log(`Prepared Reddit Devvit server in ${path.relative(rootDir, serverOutfile)}`);
}

buildAll().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

if (process.argv.includes("--watch")) {
  console.log("Watching static assets for Devvit playtest...");
  for (const file of staticFiles) {
    fs.watchFile(path.join(rootDir, file), { interval: 500 }, () => {
      buildAll().catch((error) => console.error(error));
    });
  }
  fs.watchFile(serverEntry, { interval: 500 }, () => {
    buildAll().catch((error) => console.error(error));
  });
}
