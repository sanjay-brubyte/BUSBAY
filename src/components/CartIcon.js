import React from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <IconButton onClick={() => navigate('/cart')}>
      <Badge badgeContent={count} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;