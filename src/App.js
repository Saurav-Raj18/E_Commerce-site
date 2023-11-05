import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact';
import Login from './Login/Login';
import Register from './Login/Register';
import SingleProduct from './Pages/SingleProduct';
import OurStore from './OurStore/OurStore';
import AddCart from './AddCart/AddCart';
import Payment from './Pages/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='ourstore' element={<OurStore />} />
          <Route path='addcart' element={<AddCart />} />
          <Route path="singleproduct/:id" element={<SingleProduct />} />
        </Route>
        <Route path='payment' element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
