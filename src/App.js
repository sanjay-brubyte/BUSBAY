

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // import Layout from './components/Layout';
// // import HomePage from './HomePage';
// // import Shop from './pages/Shop';
// // import ProductDetail from './pages/ProductDetail';
// // import CartPage from './pages/CartPage';
// // import CheckoutPage from './pages/ CheckoutPage';
// // import Account from './components/Account';
// // import  Order from './components/ Order';


// // const Deals = () => <h1>Deals Of The Day</h1>;
// // const BestSeller = () => <h1>Best Seller</h1>;
// // const GiftCards = () => <h1>Gift Cards</h1>;
// // const Sell = () => <h1>Sell On Platform</h1>;

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Layout />}>
// //           <Route index element={<HomePage />} />
// //           <Route path="deals" element={<Deals />} />
// //           <Route path="best-seller" element={<BestSeller />} />
// //           <Route path="gift-cards" element={<GiftCards />} />
// //           <Route path="sell" element={<Sell />} />
// //           <Route path="shop" element={<Shop />} />
// //           <Route path="product/:id" element={<ProductDetail />} />
// //           <Route path="cart" element={<CartPage />} />
// //           <Route path="checkout" element={<CheckoutPage />} />
// //           <Route path="Account" element={<Account />} />
// //           <Route path="Order" element={< Order />} />

// //         </Route>
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './HomePage';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/ CheckoutPage';

import MyAccountLayout from './components/account/MyAccountLayout';
import Profile from './components/account/Profile';
import Order from './components/account/ Order';
import Address from './components/account/Address';
import Wishlist from './components/account/Wishlist';
import Change from './components/account/Change';
import Navigation from './components/account/Navigation';

const Deals = () => <h1>Deals Of The Day</h1>;
const BestSeller = () => <h1>Best Seller</h1>;
const GiftCards = () => <h1>Gift Cards</h1>;
const Sell = () => <h1>Sell On Platform</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="deals" element={<Deals />} />
          <Route path="best-seller" element={<BestSeller />} />
          <Route path="gift-cards" element={<GiftCards />} />
          <Route path="sell" element={<Sell />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          {/* My Account Nested Routes */}
          <Route path="account" element={<Navigate to="profile" replace />} />
          <Route path="account" element={<MyAccountLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="address" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="password" element={<Change />} />
            <Route path="navigation" element={<Navigation />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;