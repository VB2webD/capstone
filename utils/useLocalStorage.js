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

/* import { useEffect, useRef, useState } from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      !!window.localStorage
    ) {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setValue(JSON.parse(item));
        } else {
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
          window.localStorage.setItem(key, JSON.stringify(value));
        } else {
          isInitialRender.current = false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [value, key]);

  return [value, setValue];
};
*/
