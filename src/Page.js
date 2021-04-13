import React, { PureComponent, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { incrementAction, decreaseAction } from "./actions";

function Page() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const incrementAction1 = () => dispatch(incrementAction());
  const decreaseAction1 = () => dispatch(decreaseAction());

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incrementAction1}>increment</button>
      <button onClick={decreaseAction1}>decrease</button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   value: state.value,
// });

// const mapDispatchToProps = (dispatch) => ({
//   incrementAction: () => dispatch(incrementAction()),
//   decreaseAction: () => dispatch(decreaseAction()),
// });

// export default connect(null, mapDispatchToProps)(Page);

export default Page;
