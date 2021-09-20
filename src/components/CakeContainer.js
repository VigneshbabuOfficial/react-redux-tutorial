import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer({ numOfCakes, buyCakes }) {
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={buyCakes}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
