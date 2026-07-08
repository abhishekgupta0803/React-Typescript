type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="w-full flex justify-center px-4 py-4">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          max-w-xl
          rounded-lg
          border
          border-gray-300
          px-4
          py-3
          text-base
          outline-none
          transition
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300
          placeholder:text-gray-400
        "
      />
    </div>
  );
};

export default SearchBar;