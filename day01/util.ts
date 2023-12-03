const textToNumberMap: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const getTextIndex = (line: string, position: 'first' | 'last') => {
  const result: Record<number, string> = {};
  for (const text of Object.keys(textToNumberMap)) {
    const index =
      position === 'first' ? line.indexOf(text) : line.lastIndexOf(text);
    if (index !== -1) {
      result[index] = text;
    }
  }
  if (Object.keys(result).length === 0) {
    return { index: -1, text: '' };
  }

  const comparator = position === 'first' ? Math.min : Math.max;
  const winningIndex = comparator(
    ...Object.keys(result).map((x) => parseInt(x))
  );
  return { index: winningIndex, text: result[winningIndex] };
};

const isDigit = (char: string): boolean => {
  return char >= '0' && char <= '9';
};

const getDigitIndex = (line: string, position: 'first' | 'last'): number => {
  if (position === 'first') {
    for (let i = 0; i < line.length; i++) {
      if (isDigit(line[i])) {
        return i;
      }
    }
  } else {
    for (let i = line.length - 1; i >= 0; i--) {
      if (isDigit(line[i])) {
        return i;
      }
    }
  }
  return -1;
};

export const getWinningDigit = (
  line: string,
  position: 'first' | 'last'
): string => {
  const digitIndex = getDigitIndex(line, position);
  const { index: textIndex, text } = getTextIndex(line, position);

  if (textIndex === -1) {
    return line[digitIndex];
  }

  if (digitIndex === -1) {
    return textToNumberMap[text];
  }

  const comparator = position === 'first' ? Math.min : Math.max;
  const winningIndex = comparator(textIndex, digitIndex);
  return winningIndex === textIndex ? textToNumberMap[text] : line[digitIndex];
};
