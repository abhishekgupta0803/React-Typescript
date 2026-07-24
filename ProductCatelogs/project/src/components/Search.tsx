import usecontext from "../hooks/ContextHook";

const Search = () => {
  const { search, setSearch } = usecontext();
  return (
    <div className="serch-bar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
