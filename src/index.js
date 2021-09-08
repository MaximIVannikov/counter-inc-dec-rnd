import React from 'react';
import  ReactDOM  from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

//const {inc, dec, rnd, zero} = bindActionCreators(actions, dispatch);


  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root'));



// store.dispatch({type:'INC'});

// store.dispatch({type:'INC'});

// store.dispatch({type:'INC'});




// let state = reducer(undefined, {type:'INC'});

// state = reducer(state, {type:'INC'});
// console.log(state);
// state = reducer(state, {type:'INC'});
// console.log(state);