import { GET_LIST, GET_PHONE, IS_LOADING } from "./action-types";
import axios from "axios";

export function getList() {
  return function(dispatch) {
    dispatch({ type: IS_LOADING });
    axios
      .get("http://localhost:5000/phones")
      .then(response => response.data)
      .then(data => {
        dispatch({ type: GET_LIST, payload: data });
      });
  };
}

export function getPhone(id) {
  return function(dispatch) {
    dispatch({ type: IS_LOADING });
    axios
      .get("http://localhost:5000/phones")
      .then(response => {
        let data = response.data.filter(phone => phone.id === +id);
        return data[0];
      })
      .then(data => {
        dispatch({ type: GET_PHONE, payload: data });
      });
  };
}
