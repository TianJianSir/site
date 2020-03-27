import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'


import Counter from './Counter'
import reducer from './reducer'
import rootSaga from './saga'
console.log(createSagaMiddleware)
console.dir(createSagaMiddleware)
const SagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(SagaMiddleware)
)

const action = type => store.dispatch({type})

SagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Counter
    store={store}
      value={store.getState()}
      onIncrementAsync={() => {debugger;return action('INCREMENT_ASYNC')}}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
