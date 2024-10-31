import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./components/Cart";
import FavoritesPage from "./components/FavoritesPage";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { FavoritesProvider } from "./components/FavoritesContext";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollTop";
import TermsOfService from "./components/TermsOfService";

const App = () => {
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    setUsername("");
  };

  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <ScrollToTop /> {}
          <NavBar onLogout={handleLogout} username={username} />
          <Routes>
            <Route path="/" element={<ItemListContainer username={username} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer username={username} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login setUsername={setUsername} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
