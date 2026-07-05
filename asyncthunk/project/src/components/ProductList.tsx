import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/products";
import { useEffect } from "react";
import Loading from "./Loading";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: any) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <><Loading /></>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      {products.map((items: any) => (
        <div key={items.id}>
          <div>
           {/* { console.log(items)} */}
            <p>Products Title</p>
             <img src={items.image} alt={items.title} />
             <h2>{items.title}</h2>
            <span>${items.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
