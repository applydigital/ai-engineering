import { describe, expect, it } from 'vitest';
import { sanitizeTailwindClassnames } from './sanitizeTailwindClassnames';

// biome-ignore lint: false flag secret
describe('sanitizeTailwindClassnames', () => {
  it.each([
    ['   p-4 m-2', 'p-4 m-2'],
    ['p-4 m-2   ', 'p-4 m-2'],
    ['   p-4 m-2   ', 'p-4 m-2'],
    ['p-4    m-2', 'p-4 m-2'],
    ['p-4\t\tm-2', 'p-4 m-2'],
    ['p-4\n\nm-2', 'p-4 m-2'],
    ['p-4 \t\n  m-2', 'p-4 m-2'],
    ['p-4 m-2 p-4', 'p-4 m-2'],
    ['p-4 m-2 p-4 m-2 text-sm', 'p-4 m-2 text-sm'],
    ['text-lg p-4 m-2 text-lg', 'text-lg p-4 m-2'],
    ['p-4  m-2   p-4', 'p-4 m-2'],
    ['', ''],
    ['   ', ''],
    ['\t\t\t', ''],
    ['\n\n\n', ''],
    ['p-4', 'p-4'],
    ['  p-4  ', 'p-4'],
    ['p-4 md:p-6 lg:p-8 p-4', 'p-4 md:p-6 lg:p-8'],
    [
      'bg-white hover:bg-gray-100 active:bg-gray-200',
      'bg-white hover:bg-gray-100 active:bg-gray-200',
    ],
    ['p-[20px] m-[1.5rem] p-[20px]', 'p-[20px] m-[1.5rem]'],
  ])('formats %s to %s', (input, expectedOutput) =>
    expect(sanitizeTailwindClassnames(input)).toBe(expectedOutput),
  );
});
