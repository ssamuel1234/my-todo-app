import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // test for step 4
  it('S4 : initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage('todos', []));
    expect(result.current[0]).toEqual([]);
  });

  // test for step 5
  it('S5 : loads existing data from localStorage', () => {
    localStorage.setItem('todos', JSON.stringify([{ name: 'Test' }]));
    const { result } = renderHook(() => useLocalStorage('todos', []));
    expect(result.current[0]).toEqual([{ name: 'Test' }]);
  });

  // test for step 6
  it('S6 : saves updated data to localStorage', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
    const { result } = renderHook(() => useLocalStorage('todos', []));
    const newTodos = [{ name: 'Test' }];
    act(() => {
      result.current[1](newTodos);
    });
    expect(localStorage.setItem).toHaveBeenCalledWith('todos', JSON.stringify(newTodos));
    expect(result.current[0]).toEqual(newTodos);
    jest.restoreAllMocks();
  });
});