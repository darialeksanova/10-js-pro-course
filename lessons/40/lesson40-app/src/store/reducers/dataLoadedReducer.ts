import { Reducer, Action } from 'redux';

enum DataLoadedAction {
  SET_IS_DATA_LOADED = 'set-data-loaded',
}

export type DataLoadedState = {
  isDataLoaded: boolean;
};

const InitialState: DataLoadedState = {
  isDataLoaded: false,
};

export const setIsDataLoaded = (): setDataLoadedAction => {
  return {
    type: DataLoadedAction.SET_IS_DATA_LOADED,
  }
};

type setDataLoadedAction = Action<DataLoadedAction>;

type dataLoadedReducerAction = setDataLoadedAction;

export const dataLoadedReducer: Reducer<DataLoadedState, dataLoadedReducerAction> = (state: DataLoadedState = InitialState, action: dataLoadedReducerAction) => {
  switch (action.type) {
    case DataLoadedAction.SET_IS_DATA_LOADED: {
      return {
        ...state,
        isDataLoaded: true,
      }
    }

    default: {
      return state;
    }
  }
};