interface CategoryProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  // setCategory: (value:string) => void;
}

const Category = ({ category, setCategory }: CategoryProps) => {
  return (
    <div className="w-full flex justify-center sm:justify-start px-4 py-2">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
          w-full
          sm:w-60
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
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-300
        "
      >
        <option value="All">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default Category;