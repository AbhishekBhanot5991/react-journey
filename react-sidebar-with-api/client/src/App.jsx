import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comments from "./pages/Comments";
import Notifications from "./pages/Notifications";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
         
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productlist" element={<ProductList />} />
            </Routes>
          </Sidebar>
      
      </BrowserRouter>
      {/* <Sidebar/> */}
    </>
  );
}
export default App
