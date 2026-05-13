

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              MyApp
            </h2>

            <p className="mt-3 text-sm leading-6 max-w-sm">
              Building modern web applications using React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-yellow-400">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-yellow-400">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400">
                Facebook
              </a>

              <a href="#" className="hover:text-yellow-400">
                Instagram
              </a>

              <a href="#" className="hover:text-yellow-400">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © 2026 MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;