
import { useEffect, useState } from "react";

export const useDebounce = (search: string, delay: number) => {
  const [debouncedValue, SetdebouncedValue] = useState(search);

  useEffect(() => {
    const Timeout = setTimeout(() => {
      SetdebouncedValue(search);
    }, delay);
      return () => clearTimeout(Timeout);
  }, [search, delay]);

  return debouncedValue;
};
