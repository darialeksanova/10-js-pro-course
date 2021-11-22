import { FilterAction } from 'types/filterAction';
import { FilterValue } from 'types/filterValue';
import { filterReducer, FilterState } from './filterReducer';

describe('Filter reducer', () => {
  it('Show all todos when current filter value is done', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.DONE,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_ALL });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.ALL });
  });

  it('Show all todos when current filter value is todo', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.TODO,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_ALL });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.ALL });
  });

  it('Show all todos when current filter value is all', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.ALL,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_ALL });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.ALL });

  });

  it('Show done todos when current filter value is all', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.ALL,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_DONE });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.DONE });
  });

  it('Show done todos when current filter value is todo', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.TODO,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_DONE });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.DONE });
  });

  it('Show done todos when current filter value is done', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.DONE,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_DONE });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.DONE });
  });

  it('Show todo todos when current filter value is done', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.DONE,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_TODO });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.TODO });
  });

  it('Show todo todos when current filter value is all', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.ALL,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_TODO });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.TODO });
  });

  it('Show todo todos when current filter value is todo', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.TODO,
    };
    const newState = filterReducer(initialState, { type: FilterAction.SHOW_TODO });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.TODO });
  });

  it('No state', () => {
    const newState = filterReducer(undefined, { type: FilterAction.SHOW_ALL });
    expect(newState).toEqual<FilterState>({ currentFilter: FilterValue.ALL });
  });

  it('No action', () => {
    const initialState: FilterState = {
      currentFilter: FilterValue.ALL,
    };
    const newState = filterReducer(initialState, { type: 'test' } as any);
    expect(newState).toEqual<FilterState>(initialState);
  });
});