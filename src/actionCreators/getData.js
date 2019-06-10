import axios from "axios";

function start() {
  return {
    type: "GET_DATA_START"
  };
}

function success(data) {
  return {
    type: "GET_DATA_SUCCESS",
    data: data
  };
}

function failure(error) {
  return {
    type: "GET_DATA_FAILURE",
    error: error
  };
}

function getDataUrl() {
  return axios.get(`https://www.anapioficeandfire.com/api/characters`);
}

export function getData() {
  return dispatch => {
    dispatch(start());
    return getDataUrl()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
