import {
  useState,
  useCallback,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';

export default function useInput<T>(
  initialValue: T,
): [T, (e: ChangeEvent) => void, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);
  const changeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, changeValue, setValue];
}
