import { readFile } from 'node:fs/promises';

// const inputPath = new URL('sampleInput.txt', import.meta.url);
const inputPath = new URL('input.txt', import.meta.url);
const input = await readFile(inputPath, 'utf8');
const lines = input.split('\n');

const colorCounts: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

let sum = 0;

for (const line of lines) {
  const [gameTitle, gamesString] = line.split(': ');
  const [_, gameId] = gameTitle.split(' ');
  const games = gamesString.split('; ');

  const colorMinCounts: Record<string, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const game of games) {
    const cubes = game.split(', ');

    for (const cube of cubes) {
      const [count, color] = cube.split(' ');
      colorMinCounts[color] = Math.max(colorMinCounts[color], parseInt(count));
    }
  }

  sum = sum + Object.values(colorMinCounts).reduce((a, b) => a * b, 1);
}

console.log(sum);
