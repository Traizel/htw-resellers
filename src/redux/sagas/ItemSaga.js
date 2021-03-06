
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

function* addItem(action) {
  try {
    yield axios.post(`/api/item/items`, action.payload);
    const response = yield axios.get(`/api/item/getitems`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with adding to the list of items:", error);
  }
}

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/item/items:${action.payload.id}`);
    const response = yield axios.get(`/api/item/getitems`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with deleting from the list of items:", error);
  }
}

//this takes all of the Saga functions and dispatches them
function* itemSaga() {
    yield takeLatest('GET_ITEM_LIST', getitemlist);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default itemSaga;