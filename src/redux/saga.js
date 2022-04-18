import { takeLatest, all, put, fork, call } from 'redux-saga/effects'
import * as types from "./actionTypes";
import { getQuery } from "./api";

export function* onLoadPhotosAsync({ query }) {
  try {
    console.log(query);
    const response = yield call(getQuery, query);
    yield put({ type: types.FETCH_PHOTO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_PHOTO_FAIL, payload: error });
  }
}

export function* onLoadPhotos() {
  yield takeLatest(types.FETCH_PHOTO_START, onLoadPhotosAsync);
}

const photoSaga = [fork(onLoadPhotos)];

export default function* rootSaga() {
  yield all([...photoSaga]);
}
