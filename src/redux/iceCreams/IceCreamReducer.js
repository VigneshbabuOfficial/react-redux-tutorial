import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = { numOfIceCream: 20 };

const iceCreamReducer = (state = initialState, action) => {
  console.log("iceCreamReducer is called");
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
