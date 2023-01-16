import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import './App.css';
import Header from './components/Header';
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:product_id" element={<ProductDetail />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
