import { useCallback, useEffect, useState } from 'react';

type Setter<T> = (value: T | ((prev: T) => T)) => void;

export function useLocalStorage<T>(key: string, defaultValue: T): [T, Setter<T>] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        setValue(JSON.parse(raw) as T);
      }
    } catch (error) {
      console.warn(`[useLocalStorage] failed to read ${key}`, error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update: Setter<T> = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved =
          typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        if (typeof window !== 'undefined') {
          try {
            window.localStorage.setItem(key, JSON.stringify(resolved));
          } catch (error) {
            console.warn(`[useLocalStorage] failed to write ${key}`, error);
          }
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}

export function useSessionStorage<T>(key: string, defaultValue: T): [T, Setter<T>] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.sessionStorage.getItem(key);
      if (raw !== null) {
        setValue(JSON.parse(raw) as T);
      }
    } catch (error) {
      console.warn(`[useSessionStorage] failed to read ${key}`, error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update: Setter<T> = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved =
          typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        if (typeof window !== 'undefined') {
          try {
            window.sessionStorage.setItem(key, JSON.stringify(resolved));
          } catch (error) {
            console.warn(`[useSessionStorage] failed to write ${key}`, error);
          }
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}

const VISITED_KEY = 'portal_visited_courses';

export function useVisitedCourses(): [string[], (id: string) => void] {
  const [visited, setVisited] = useLocalStorage<string[]>(VISITED_KEY, []);

  const markVisited = useCallback(
    (id: string) => {
      setVisited((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    [setVisited],
  );

  return [visited, markVisited];
}
