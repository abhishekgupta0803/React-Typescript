import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";
import ThemeBtn from "./components/ThemeBtn";
import { useTheme } from "./components/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <div className="w-full flex justify-end p-4 bg-white dark:bg-gray-900">
       <ThemeBtn theme={theme} toggleTheme={toggleTheme} />
    </div>
     

      <Router>
        <div className="flex min-h-screen w-full bg-white text-black dark:bg-gray-900 dark:text-white">
          
          <SideBar />

          <div className="rounded w-full flex justify-center flex-wrap">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>

            <div>
              <TopSellers />
              <PopularBlogs />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;