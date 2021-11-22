
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* getitemlist(action) {
  try {
    const response = yield axios.get(`/api/item/getitems`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* updateItems(action) {
  try {
    yield put({
      type: "SET_UPDATING",
    });
    const response = yield axios.get(`/api/item/items`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
    yield put({
      type: "SET_DONE",
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* markStocked(action) {
  const id = action.payload.items;
  try {
    const response = yield axios.delete(`/api/item/items/${id}`);
    yield put({
      type: "CLEAR_CHECKED",
    });
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* markDead(action) {
  const id = action.payload.items;
  try {
    const response = yield axios.put(`/api/item/items/${id}`);
    yield put({
      type: "CLEAR_CHECKED",
    });
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* unmarkDead(action) {
  const id = action.payload.id;
  try {
    const response = yield axios.put(`/api/item/deadItems/${id}`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* changeReason(action) {
  const payload = action.payload;
  try {
    const response = yield axios.put(`/api/item/updateReason`, {payload: payload});
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

//this takes all of the Saga functions and dispatches them
function* itemSaga() {
    yield takeLatest('GET_ITEM_LIST', getitemlist);
    yield takeLatest('UPDATE_ITEMS', updateItems);
    yield takeLatest('MARK_STOCKED', markStocked);
    yield takeLatest('MARK_DEAD', markDead);
    yield takeLatest('UNMARK_DEAD', unmarkDead);
    yield takeLatest('CHANGE_REASON', changeReason);
}

export default itemSaga;