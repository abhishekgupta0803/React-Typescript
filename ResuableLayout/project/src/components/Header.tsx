

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          MyApp
        </h1>

        {/* Navigation */}
        <nav className="flex gap-6">
          <a
            href="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </a>

          <a
            href="/services"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="/contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;