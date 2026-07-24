import { useEffect, useState } from "react";

export const useDebounce = (search: string, delay: number) => {
  const [debounce, setDebounce] = useState<string>(search);
  
  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setDebounce(search);
    }, delay);
    
    return () => {
      clearTimeout(TimeOut);
    };
  }, [search, delay]);
  return debounce;
};
