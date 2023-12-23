import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// check if vault directory parameter is provided
const vaultDir = process.argv[2];
if (!vaultDir) {
  console.log('No vault directory provided');
  process.exit(1);
}

// extract directory name from manifest.json
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf-8'));
const dirName = manifest.id;

// full path to the new directory
const newDir = path.join(vaultDir, '.obsidian', 'plugins', dirName);

// remove directory if it exists, then create a new one
execSync(`rm -rf ${newDir}`);
fs.mkdirSync(newDir, { recursive: true });

// copy files to the new directory
fs.copyFileSync(path.join(__dirname, 'build', 'main.js'), path.join(newDir, 'main.js'));
fs.copyFileSync(path.join(__dirname, 'manifest.json'), path.join(newDir, 'manifest.json'));
fs.copyFileSync(path.join(__dirname, 'styles.css'), path.join(newDir, 'styles.css'));
