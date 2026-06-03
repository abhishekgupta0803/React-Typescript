import { Link, useMatchRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const matchRoute = useMatchRoute();
  const isLogin = matchRoute({ to: "/login" });

  const handelLogout = () => {
    logout();

    navigate({ to: "/dashboard" });
  };
  return (
    <nav className="hidden md:flex space-x-6 mx-4 py-3">
      {user ? (
        <>
          <Link to={"/products"}>Products</Link>
          <button onClick={handelLogout}>Logout</button>
        </>
      ) : isLogin ? (
        <Link to={"/dashboard"}>Dashboard</Link>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
