import { createFileRoute } from "@tanstack/react-router";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import { PERMISSIONS } from "../../utils/roles";
import { getProducts, type Product } from "../../api";

export const Route = createFileRoute("/_protected/products")({
  component: () => (
    <ProtectedRoutes permissions={[PERMISSIONS.VIEW_PRODUCTS]}>
      <RouteComponent />
    </ProtectedRoutes>
  ),
  loader: async () => {
    return await getProducts();
  },
});

function RouteComponent() {
  const products = Route.useLoaderData();
  const handelDelete = async (id:string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!hasPermission(PERMISSIONS.DELETE_PRODUCTS)){
  }

  // console.log("Products data:", products[0].name);
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-2">Products</h2>
      <p className="text-gray-800">Here is the product Lists</p>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id} className="text-gray-600 border border-gray-300">
            {product.name} -${product.price}
            <button type="button" onClick={() => alert(product.name)} className="bg-blue-500 rounded-full px-5 py-1 text-white hover:bg-blue-600 transition">
              Edit
            </button>
             <button type="button" onClick={(e) => handelDelete(product.id, e)} className="bg-blue-500 rounded-full px-5 py-1 text-white hover:bg-blue-600 transition">
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
