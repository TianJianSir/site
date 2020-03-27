import { put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
    yield console.log('hellosage')
  }

function* incrementAsync() {
    const res = yield 1;
    yield put({ type: 'INCREMENT' })
  }
  
  
  function* watchIncrementAsync() {
      
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
    console.log('----->>>')
  }
  
  
  // notice how we now only export the rootSaga
  // single entry point to start all Sagas at once
  export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }