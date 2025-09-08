import { useState } from 'react';

/**
 * A custom React hook that manages state synced with localStorage.
 * Loads initial value from localStorage if available, otherwise uses the provided default.
 * 
 * @param key - The key to use for storing/retrieving data in localStorage.
 * @param initialValue - The default value to use if no data exists in localStorage.
 * @returns An array containing the current value and a function to update it.
 * @example
 * const [todos, setTodos] = useLocalStorage('todos', []);
 * setTodos([{ name: 'Buy milk' }]);
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });
  return [value, setValue];
}

export default useLocalStorage;