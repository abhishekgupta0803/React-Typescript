import { useContext } from "react";
import { context } from "../context/contextType";

const ContextHook = () => {
  const usecontext = useContext(context);

  if (!usecontext) {
    throw new Error("Context Error");
  }

  return usecontext;
};

export default ContextHook;
