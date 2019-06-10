import { createSelector } from "reselect";

function getData(state) {
  return state.getData.data;
}

function isDataLoaded(data) {
  return data.length !== 0;
}

export const isDataLoadedSelector = createSelector(
  getData,
  isDataLoaded
);

function getSingleData(state) {
  return state.getSingleData.data;
}

export const isSingleDataLoaded = createSelector(
  getSingleData,
  isDataLoaded
);
