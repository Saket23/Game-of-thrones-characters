import axios from "axios";

function start() {
  return {
    type: "GET_SINGLE_DATA_START"
  };
}

function success(data) {
  return {
    type: "GET_SINGLE_DATA_SUCCESS",
    data: data
  };
}

function failure(error) {
  return {
    type: "GET_SINGLE_DATA_FAILURE",
    error: error
  };
}

function getDataUrl(index) {
  return axios.get(`https://www.anapioficeandfire.com/api/characters/${index}`);
}

export function getSingleData(index) {
  return dispatch => {
    dispatch(start());
    return getDataUrl(index)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
