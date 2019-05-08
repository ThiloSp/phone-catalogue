import { GET_LIST, GET_PHONE, IS_LOADING } from "../actions/action-types";

const initialState = {
  phones: [],
  singlePhone: {},
  loading: true
};

function reducer(state = initialState, action) {
  if (action.type === IS_LOADING) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if (action.type === GET_LIST) {
    return Object.assign({}, state, {
      phones: action.payload,
      loading: false
    });
  }
  if (action.type === GET_PHONE) {
    return Object.assign({}, state, {
      singlePhone: action.payload,
      loading: false
    });
  }

  return state;
}

export default reducer;
