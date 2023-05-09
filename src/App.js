import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Product from "./pages/Product";
import About from "./pages/About";
import LoginJoin from "./pages/LoginJoin";
import Cart from "./pages/Cart";
import MyPage from "./pages/MyPage";
import { ProductContextProvider } from "./context/ProductContext";
import ReverseBtn from "./components/ReverseBtn";
import NaverLogin from "./components/NaverLogin";
import { StoryContextProvider } from "./context/StoryContext";

function App() {
  return (
    <ProductContextProvider>
      <StoryContextProvider>
        <div className="App">
          <ReverseBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<LoginJoin />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/naver-login" element={<NaverLogin />} />
          </Routes>
          <Footer />
        </div>
      </StoryContextProvider>
    </ProductContextProvider>
  );
}

export default App;
