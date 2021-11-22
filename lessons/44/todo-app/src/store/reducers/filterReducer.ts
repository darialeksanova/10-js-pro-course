import { Action, Reducer } from 'redux';
import { FilterValue } from 'types/filterValue';
import { FilterAction } from 'types/filterAction';

export type FilterState = {
  currentFilter: FilterValue;
};

const inititalState: FilterState = {
  currentFilter: FilterValue.ALL,
};

export const filterReducer: Reducer<FilterState, Action<FilterAction>> = (state = inititalState, action) => {
  switch(action.type) {
    case FilterAction.SHOW_ALL: {
      return {
        ...state,
        currentFilter: FilterValue.ALL,
      };
    }

    case FilterAction.SHOW_DONE: {
      return {
        ...state,
        currentFilter: FilterValue.DONE,
      };
    }

    case FilterAction.SHOW_TODO: {
      return {
        ...state,
        currentFilter: FilterValue.TODO,
      };
    }

    default: {
      return state;
    }
  }
}