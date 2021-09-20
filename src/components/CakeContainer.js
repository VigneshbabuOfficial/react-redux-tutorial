import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer({ numOfCakes, buyCakes }) {
  console.log("CakeContainer is called");
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={buyCakes}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("CakeContainer - mapStateToProps is called");
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("CakeContainer - mapDispatchToProps is called");
  return {
    buyCakes: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
