/**
 * Return a random sudokue grid index in the 0 = 8 range
 */
export const getRandomIndex = () => {
  return Math.floor(Math.random() * Math.floor(9));
};
