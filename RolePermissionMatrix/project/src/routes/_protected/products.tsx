import { createFileRoute, useNavigate } from "@tanstack/react-router";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import { PERMISSIONS } from "../../utils/roles";
import { deleteProducts, getProducts, type Product } from "../../api";
import { useAuth } from "../../context/AuthContext";

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
  const { hasPermission } = useAuth();
  const navigate = useNavigate();

  const handelDelete = async (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (!hasPermission(PERMISSIONS.DELETE_PRODUCT)) {
      navigate({ to: "/unauthorize" });
      return;
    }

    if (window.confirm("Are you sure you want to delete this product?")) {
      // Call API to delete product
      await deleteProducts(id);
       products?.filter((product: any) => product.id !== id);
      
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-2">Products</h2>
      <p className="text-gray-800">Here is the product Lists</p>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id} className="text-gray-600 border border-gray-300">
            {product.name} -${product.price}
            {hasPermission(PERMISSIONS.EDIT_PRODUCT) && (
              <button
                type="button"
                onClick={() => alert(product.name)}
                className="bg-blue-500 rounded-full px-5 py-1 text-white hover:bg-blue-600 transition"
              >
                Edit
              </button>
            )}
            <button
              type="button"
              onClick={(e) => handelDelete(product.id, e)}
              className="bg-blue-500 rounded-full px-5 py-1 text-white hover:bg-blue-600 transition"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
