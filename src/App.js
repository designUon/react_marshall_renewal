import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Product from "./pages/Product";
import About from "./pages/About";
import LoginJoin from "./pages/LoginJoin";
import Cart from "./pages/Cart";
import MyPage from "./pages/MyPage";
import { ProductContextProvider } from "./context/ProductContext";
import ReverseBtn from "./components/ReverseBtn";

function App() {
  return (
    <ProductContextProvider>
      <div className="App">
        <ReverseBtn/>
        {/* <Header /> */}
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<LoginJoin />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </ProductContextProvider>
  );
}

export default App;
