// SYNC ONLY

/*
export const addNumber = (state, number) => {
  state.numbers.push(number);
};
*/

export const addRandomNumber = (state, { min, max }) => {
  state.numbers.push(Math.floor(Math.random() * (max - min) + 1));
};

export const addRandomNumberUsingApi = (state, number) => {
  state.numbers.push(number);
};
