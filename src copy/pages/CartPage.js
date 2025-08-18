import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, IconButton, Paper, Divider, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);
  const handleRemove = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cartItems];
    const item = newCart[index];
    const newQty = item.quantity + delta;
    if (newQty < 1) return;
    newCart[index] = { ...item, quantity: newQty };
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const handleApplyCoupon = () => {
    alert(`Coupon "${couponCode}" applied!`);
    setCouponCode('');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: 'center' }}>CART</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            {cartItems.length === 0 ? (
              <Typography align="center">Your cart is empty.</Typography>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }} />
                      <Box>
                        <Typography fontWeight="bold">{item.name}</Typography>
                        <Typography sx={{ color: '#999' }}>${item.price.toFixed(2)} x {item.quantity}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
                        <Button size="small" onClick={() => handleQuantityChange(index, -1)} disabled={item.quantity <= 1} sx={{ minWidth: 32 }}>–</Button>
                        <Box sx={{ width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc' }}>{item.quantity}</Box>
                        <Button size="small" onClick={() => handleQuantityChange(index, 1)} sx={{ minWidth: 32 }}>+</Button>
                      </Box>
                      <Typography color="primary" fontWeight="bold">${item.price.toFixed(2)}</Typography>
                      <IconButton color="error" onClick={() => handleRemove(index)}><DeleteIcon /></IconButton>
                    </Box>
                  </Box>
                ))}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
                  <TextField placeholder="Coupon Code" variant="outlined" size="small" sx={{ flex: 1 }} value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                  <Button variant="contained" onClick={handleApplyCoupon} size="large">Apply Coupon</Button>
                </Box>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, textAlign: 'center' }}>Cart Totals</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal:</Typography>
              <Typography color="primary">${totalPrice.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography>Total:</Typography>
              <Typography color="primary" fontWeight="bold">${totalPrice.toFixed(2)}</Typography>
            </Box>
            <Button variant="contained" fullWidth onClick={() => navigate('/checkout')}>Proceed To Checkout</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartPage;