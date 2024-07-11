import NavbarComponent from "./components/NavbarComponent";
import './App.css'
import ProductsList from "./components/ProductsList";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";



function App() {
  return (
    <div className="App">
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={
                    <>
                        <Home/>
                        <ProductsList/>
                    </>
                    } />
                <Route path="/about" element={<About/>} />
                <Route path="/product/:productId" element={<ProductDetails/>} />
            </Routes>
    </div>
  );
}

export default App;
