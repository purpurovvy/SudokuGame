export type TBlockCoords = [TIndex, TIndex];

export type TIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type TGrid = [TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow];

export type TDigitsZeroIncluded = 0 | TDigits;

export type TDigits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TRow = [
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
  TDigitsZeroIncluded,
];

export type TSquare = [TSquareRow, TSquareRow, TSquareRow];

export type TSquareRow = [TDigitsZeroIncluded, TDigitsZeroIncluded, TDigitsZeroIncluded];
