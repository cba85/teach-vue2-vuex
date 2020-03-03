// ASYNC
import axios from "axios";

export const fetchRandomNumber = ({ commit }, { max, min }) => {
  axios
    .get(
      `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
    )
    .then(response => {
      commit("addRandomNumberUsingApi", response.data);
    });
};
