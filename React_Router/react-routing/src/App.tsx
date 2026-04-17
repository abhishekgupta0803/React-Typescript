import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import User from "./components/User";

function App() {
  return (
    <>
    {/* //routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
