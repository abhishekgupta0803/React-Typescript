import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const Contact = React.lazy(() => import("./components/Contact"));
import About from "./components/About";
import React, { Suspense } from "react";
import MainLayout from "./Header/MainLayout";

const App = () => {
  return (
    <Suspense fallback={<h2>Loading Layout...</h2>}>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
