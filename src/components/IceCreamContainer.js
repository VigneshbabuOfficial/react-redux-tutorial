import React from "react";
import { buyIceCream } from "../redux/iceCreams/IceCreamActions";
import { connect, useSelector, useDispatch } from "react-redux";

function IceCreamContainer({ numOfIceCreams, buyIceCreams }) {
  console.log("IceCreamContainer is called");

  // const numOfCakes = useSelector((state) => state.numOfCakes);
  //const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of IceCream - {numOfIceCreams}</h2>
      <button onClick={buyIceCreams}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("IceCreamContainer - mapStateToProps is called");
  return {
    numOfIceCreams: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("IceCreamContainer - mapDispatchToProps is called");
  return {
    buyIceCreams: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
