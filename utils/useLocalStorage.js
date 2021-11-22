import { useEffect, useRef, useState } from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(
    () => (console.log("[useLocalStorage] init"), defaultValue)
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      !!window.localStorage
    ) {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          console.log("[useLocalStorage] getItem Effect / found", item);
          setValue(JSON.parse(item));
        } else {
          console.log("[useLocalStorage] getItem Effect / just init ls");
          window.localStorage.setItem(key, JSON.stringify(defaultValue));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return defaultValue;
    }
  }, []);

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      window.localStorage
    ) {
      try {
        if (!isInitialRender.current) {
          console.log("[useLocalStorage] setItem Effect / new value is", value);
          window.localStorage.setItem(key, JSON.stringify(value));
        } else {
          console.log(
            "[useLocalStorage] setItem Effect / SKIPPED / value would have been",
            value
          );
          isInitialRender.current = false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [value, key]);

  return [value, setValue];
};
