import { useEffect, useState } from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      !!window.localStorage
    ) {
      try {
        const item = window.localStorage.getItem(key);
        setValue(item ? JSON.parse(item) : defaultValue);
      } catch (error) {
        console.log(error);
      }
    } else {
      return defaultValue;
    }
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      window.localStorage
    ) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  }, [value, key]);

  return [value, setValue];
};
