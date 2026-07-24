import ContextHook from "../hooks/ContextHook";

const Categories = () => {
  const { products, categories, setCategories } = ContextHook();

  const uniqueCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div>
      <select
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      >
        {uniqueCategories.map((cat, index) => (
          <option value={cat} key={index}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
