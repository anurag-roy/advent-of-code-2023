import { readFile } from 'node:fs/promises';

// const inputPath = new URL('sampleInput.txt', import.meta.url);
const inputPath = new URL('input.txt', import.meta.url);
const input = await readFile(inputPath, 'utf8');
const lines = input.split('\n');

for (const line of lines) {
  console.log(line);
}
