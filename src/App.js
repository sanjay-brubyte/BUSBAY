


// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Layout from './components/Layout';
// // // import HomePage from './HomePage';
// // // import Shop from './pages/Shop';
// // // import ProductDetail from './pages/ProductDetail';
// // // import CartPage from './pages/CartPage'; 
// // // import CheckoutPage from './pages/ CheckoutPage';

// // // const Deals = () => <h1>Deals Of The Day</h1>;
// // // const BestSeller = () => <h1>Best Seller</h1>;
// // // const GiftCards = () => <h1>Gift Cards</h1>;
// // // const Sell = () => <h1>Sell On Platform</h1>;

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<Layout />}>
// // //           <Route index element={<HomePage />} />
// // //           <Route path="deals" element={<Deals />} />
// // //           <Route path="best-seller" element={<BestSeller />} />
// // //           <Route path="gift-cards" element={<GiftCards />} />
// // //           <Route path="sell" element={<Sell />} />
// // //           <Route path="shop" element={<Shop />} />
// // //           <Route path="product/:id" element={<ProductDetail />} />
// // //           <Route path="cart" element={<CartPage />} /> 
// // //           <Route path="checkout" element={<CheckoutPage />} />
// // //         </Route>
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;



// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Layout from './components/Layout';
// // import HomePage from './HomePage';
// // import Shop from './pages/Shop';
// // import ProductDetail from './pages/ProductDetail';
// // import CartPage from './pages/CartPage';
// // import CheckoutPage from './pages/ CheckoutPage';
// // import MyAccount from './pages/MyAccount'; 

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
// //            <Route path="myaccount" element={<MyAccount />} /> 
// //         </Route>
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import HomePage from './HomePage';
// import Shop from './pages/Shop';
// import ProductDetail from './pages/ProductDetail';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/ CheckoutPage'; 
// import OrderSuccess from './pages/OrderSuccess';

// const Deals = () => <h1>Deals Of The Day</h1>;
// const BestSeller = () => <h1>Best Seller</h1>;
// const GiftCards = () => <h1>Gift Cards</h1>;
// const Sell = () => <h1>Sell On Platform</h1>;

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="deals" element={<Deals />} />
//           <Route path="best-seller" element={<BestSeller />} />
//           <Route path="gift-cards" element={<GiftCards />} />
//           <Route path="sell" element={<Sell />} />
//           <Route path="shop" element={<Shop />} />
//           <Route path="product/:id" element={<ProductDetail />} />
//           <Route path="cart" element={<CartPage />} />
//           <Route path="checkout" element={<CheckoutPage />} />
//           <Route path="OrderSuccess" element={<OrderSuccess />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './HomePage';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/ CheckoutPage';
import OrderSuccess from './pages/OrderSuccess';

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
          <Route path="OrderSuccess" element={<OrderSuccess />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;