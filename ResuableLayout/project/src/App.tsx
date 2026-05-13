
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
           <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
