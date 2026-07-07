import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-6 bg-gray-900 p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive ? "text-yellow-400" : "text-white"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/paste"
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive ? "text-yellow-400" : "text-white"
          }`
        }
      >
        Paste
      </NavLink>
    </nav>
  );
};

export default Navbar;