import * as types from "./actionTypes";

const initialState = {
  photos: [],
  error: null,
  loading: false,
};

const photoReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case types.FETCH_PHOTO_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload,
      };
    case types.FETCH_PHOTO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
