import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Products } from "../Types/product.type";
import { getSingleProduct } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";
type params = {
  id: string;
};

const ProductDetails = () => {
  const [products, setProducts] = useState<Products | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { id } = useParams<params>();
  const navigate = useNavigate();

  useEffect(() => {
    const productsDetails = async () => {
      try {
        setLoading(true);
        if (!id) return;
        const data = await getSingleProduct(id);
        setProducts(data);
      } catch (err) {
        console.log(err);
        setError("error occur");
      } finally {
        setLoading(false);
      }
    };
    productsDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={products?.image}
            alt={products?.title}
            className="h-72 w-full max-w-sm object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {products?.title}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-green-600">
            ${products?.price}
          </p>

          <p className="mt-2 inline-block w-fit rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
            {products?.category}
          </p>

          <p className="mt-6 text-gray-600 leading-7">
            {products?.description}
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 w-fit rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
          >
            ← Back to Products
          </button>
        </div>

      </div>
    </div>
  </div>
);
};

export default ProductDetails;
