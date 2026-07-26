import { useContext } from "react";
import { context } from "../context/ContextTypes";

export const useCustomHook = () => {
  const contextData = useContext(context);
  if (!contextData) {
    throw new Error("Error in hook");
  }

  return contextData;
};
