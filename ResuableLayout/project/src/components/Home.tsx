

const Home = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Build Modern Websites with React & Tailwind CSS
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Create fast, responsive, and beautiful web applications
            using reusable components and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
              Get Started
            </button>

            <button className="border border-gray-400 hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Developer"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;