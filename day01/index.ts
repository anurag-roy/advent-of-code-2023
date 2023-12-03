import { readFile } from 'node:fs/promises';
import { getWinningDigit } from './util';

// const inputPath = new URL('sampleInput.txt', import.meta.url);
const inputPath = new URL('input.txt', import.meta.url);
const input = await readFile(inputPath, 'utf8');
const lines = input.split('\n');

let sum = 0;

for (const line of lines) {
  // Find first and last digits
  const firstDigit = getWinningDigit(line, 'first');
  const lastDigit = getWinningDigit(line, 'last');
  const number = parseInt(firstDigit + lastDigit);

  sum = sum + number;
}

console.log(sum);
