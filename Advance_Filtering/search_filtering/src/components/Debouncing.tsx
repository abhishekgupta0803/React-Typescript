import { useEffect, useState } from "react";

//custom hook

export const useDebounce = (value:string, delay:number) => {
   console.log("old->",value)
  const [debouncedValue, setDebouncedValue] = useState(value);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};