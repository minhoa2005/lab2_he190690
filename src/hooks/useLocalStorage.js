import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue === null ? initialValue : JSON.parse(storedValue);
    } catch (error) {
      return initialValue;
    }
  });

  const updateValue = (nextValue) => {
    setValue((currentValue) => {
      const resolvedValue =
        typeof nextValue === "function" ? nextValue(currentValue) : nextValue;

      try {
        window.localStorage.setItem(key, JSON.stringify(resolvedValue));
      } catch (error) {
        // The task manager remains usable when browser storage is unavailable.
      }

      return resolvedValue;
    });
  };

  return [value, updateValue];
}
