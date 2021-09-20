import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect, useSelector, useDispatch } from "react-redux";

function CakeContainer() {
  console.log("CakeContainer is called");

  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log("CakeContainer - mapStateToProps is called");
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   console.log("CakeContainer - mapDispatchToProps is called");
//   return {
//     buyCakes: () => dispatch(buyCake()),
//   };
// };

export default CakeContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
