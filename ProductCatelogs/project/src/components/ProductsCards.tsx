import type { Products } from "../types/products";
import "../css/style.css";

const ProductsCards = ({ products }: { products: Products }) => {
  return (
    <div className="product-cards">
      <img src={products.image} alt={products.title} />
      <p>${products.price}</p>
      <p>{products.title}</p>
      <p>{products.description}</p>
    </div>
  );
};

export default ProductsCards;
