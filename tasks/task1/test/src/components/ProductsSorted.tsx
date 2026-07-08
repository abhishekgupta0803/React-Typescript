export interface SortProps {
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsSorted = ({ sortOrder, setSortOrder }: SortProps) => {
  return (
    <div className="w-full flex justify-center sm:justify-end px-4 py-2">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="
          w-full
          sm:w-56
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-gray-700
          shadow-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300
        "
      >
        <option value="">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductsSorted;