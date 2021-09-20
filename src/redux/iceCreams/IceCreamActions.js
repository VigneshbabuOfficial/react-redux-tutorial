import { BUY_ICECREAM } from "./IceCreamTypes";

export const buyIceCream = () => {
  console.log("buyIceCream is called");
  return {
    type: BUY_ICECREAM,
  };
};
