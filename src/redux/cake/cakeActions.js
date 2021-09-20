import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  console.log("buyCake is called");
  return {
    type: BUY_CAKE,
  };
};
