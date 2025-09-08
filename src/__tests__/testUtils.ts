import { renderHook } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

/**
 * Renders the useLocalStorage hook in a test environment.
 * Simplifies testing by providing the hook's result (value and setter).
 * 
 * @param key - The localStorage key to use (defaults to 'todos').
 * @param initialValue - The default value for the hook (defaults to empty array).
 * @returns The result object from renderHook, containing current value and setter.
 * @example
 * const { result } = renderUseLocalStorage('todos', []);
 * expect(result.current[0]).toEqual([]);
 */
export function renderUseLocalStorage<T>(
  key: string = 'todos',
  initialValue: T = [] as unknown as T
) {
  return renderHook(() => useLocalStorage<T>(key, initialValue));
}

/**
 * Mocks localStorage.setItem to track calls without modifying localStorage.
 * Returns a spy to check if setItem was called with the correct arguments.
 * 
 * @returns The Jest spy on localStorage.setItem.
 * @example
 * const setItemSpy = mockLocalStorageSetItem();
 * expect(setItemSpy).toHaveBeenCalledWith('todos', JSON.stringify([{ name: 'Test' }]));
 */
export function mockLocalStorageSetItem() {
  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
  setItemSpy.mockImplementation(() => {});
  return setItemSpy;
}

it('has a dummy test setup', () => {
  expect(true).toBe(true);
});