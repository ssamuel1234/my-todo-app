import { act } from '@testing-library/react';
import { renderUseLocalStorage, mockLocalStorageSetItem } from './testUtils';

// Tests for the useLocalStorage hook, ensuring it initializes, loads, and saves data correctly.
describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // test for step 4
  it('S4 : initializes with default value', () => {
    const { result } = renderUseLocalStorage();
    expect(result.current[0]).toEqual([]);
  });

  // test for step 5
  it('S5 : loads existing data from localStorage', () => {
    const todos = [{ name: 'Test' }];
    localStorage.setItem('todos', JSON.stringify(todos));
    const { result } = renderUseLocalStorage();
    expect(result.current[0]).toEqual(todos);
  });

  // test for step 6
  it('S6 : saves updated data to localStorage', () => {
    const setItemSpy = mockLocalStorageSetItem();
    const { result } = renderUseLocalStorage();
    const newTodos = [{ name: 'Test' }];
    act(() => {
      result.current[1](newTodos);
    });
    expect(setItemSpy).toHaveBeenCalledWith('todos', JSON.stringify(newTodos));
    expect(result.current[0]).toEqual(newTodos);
    jest.restoreAllMocks();
  });
});