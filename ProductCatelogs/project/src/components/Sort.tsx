import ContextHook from "../hooks/ContextHook";

export const Sort = () => {
  const { sort, setSort } = ContextHook();
  return (
    <div className="sort">
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value={""}>SortPrices</option>
        <option value={"asc"}>LowToHigh</option>
        <option value={"desc"}>HighToLow</option>
      </select>
    </div>
  );
};
