import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Promotions from './pages/Promotions';
import ContactUs from './pages/ContactUs';
import WikipediaPage from './pages/WikipediaArticle';


function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product" element={<Product />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/wikipedia" element={<WikipediaPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
