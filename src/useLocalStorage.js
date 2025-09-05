import { useState } from 'react';
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}
export default useLocalStorage;