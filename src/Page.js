import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  incrementAction,
  decreaseAction,
} from './actions';

function  Page({ value, incrementAction, decreaseAction }){
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={incrementAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
      </div>
    );
}


const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
