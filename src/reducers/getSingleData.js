const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default function getSingleData(state = initialState, action) {
  switch (action.type) {
    case "GET_SINGLE_DATA_START":
      return { ...state, isLoading: true };
    case "GET_SINGLE_DATA_SUCCESS":
      return { ...state, isLoading: false, data: action.data };
    case "GET_SINGLE_DATA_FAILURE":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
