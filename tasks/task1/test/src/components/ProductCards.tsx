import type { Products } from "../Types/product.type";
import { Link } from "react-router-dom";

type Product = {
  product: Products;
};

export const ProductCards = ({ product }: Product) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/products/${product.id}`}
        className="flex justify-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-44 object-contain"
        />
      </Link>

      <div className="mt-4 space-y-2">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="text-xl font-bold text-green-600">
          ${product.price}
        </p>

        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {product.category}
        </span>

        <p className="line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>
      </div>
    </div>
  );
};