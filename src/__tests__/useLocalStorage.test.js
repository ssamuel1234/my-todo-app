import { renderHook } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';
describe('useLocalStorage', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage('todos', []));
    expect(result.current[0]).toEqual([]);
  });
});

it('loads existing data from localStorage', () => {
  localStorage.setItem('todos', JSON.stringify([{ name: 'Test' }]));
  const { result } = renderHook(() => useLocalStorage('todos', []));
  expect(result.current[0]).toEqual([{ name: 'Test' }]);
});