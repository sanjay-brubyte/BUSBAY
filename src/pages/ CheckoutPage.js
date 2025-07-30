

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   Button,
//   FormControlLabel,
//   Checkbox,
//   Paper,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   List,
//   ListItem,
//   ListItemText,
//   RadioGroup,
//   Radio,
// } from '@mui/material';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// const CheckoutPage = () => {
//   const [sameAsBilling, setSameAsBilling] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('BTC');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setProducts(storedCart);
//   }, []);

//   const subtotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <Box p={4} maxWidth="1200px" mx="auto">
//       <Typography variant="body2" color="textSecondary" gutterBottom>HOME / CHECKOUT</Typography>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>CHECKOUT</Typography>

//       <Grid container spacing={4}>
//         <Grid item xs={12} md={7}>
//           <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} mb={3}>
//             <Button variant="contained" fullWidth startIcon={<LoginIcon />} sx={{ bgcolor: '#e3ecff', color: '#1a1a1a' }}>
//               Returning Customer? Click Here To Login
//             </Button>
//             <Button variant="contained" fullWidth startIcon={<PersonAddAltIcon />} sx={{ bgcolor: '#e3ecff', color: '#1a1a1a' }}>
//               Checkout As Guest? Click Here To Checkout
//             </Button>
//           </Box>

//           <Typography variant="h6" fontWeight="bold" gutterBottom>Billing Details</Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}><TextField fullWidth label="First Name *" /></Grid>
//             <Grid item xs={12} sm={6}><TextField fullWidth label="Last Name *" /></Grid>
//             <Grid item xs={12} sm={6}><TextField fullWidth label="Phone *" /></Grid>
//             <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address *" /></Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth><InputLabel>Country / Region *</InputLabel>
//                 <Select defaultValue=""><MenuItem value="India">India</MenuItem></Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth><InputLabel>State *</InputLabel>
//                 <Select defaultValue=""><MenuItem value="UP">UP</MenuItem></Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth><InputLabel>Town / City *</InputLabel>
//                 <Select defaultValue=""><MenuItem value="Lucknow">Lucknow</MenuItem></Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}><TextField fullWidth label="ZIP Code *" /></Grid>
//           </Grid>

//           <Box mt={4}>
//             <FormControlLabel
//               control={<Checkbox checked={sameAsBilling} onChange={() => setSameAsBilling(!sameAsBilling)} />}
//               label="Same As Billing"
//               sx={{ background: '#e3ecff', px: 2, borderRadius: 1 }}
//             />

//             {!sameAsBilling && (
//               <>
//                 <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>Shipping Details</Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}><TextField fullWidth label="First Name *" /></Grid>
//                   <Grid item xs={12} sm={6}><TextField fullWidth label="Last Name *" /></Grid>
//                   <Grid item xs={12} sm={6}><TextField fullWidth label="Phone *" /></Grid>
//                   <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address *" /></Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth><InputLabel>Country / Region *</InputLabel>
//                       <Select defaultValue=""><MenuItem value="India">India</MenuItem></Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth><InputLabel>State *</InputLabel>
//                       <Select defaultValue=""><MenuItem value="UP">UP</MenuItem></Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth><InputLabel>Town / City *</InputLabel>
//                       <Select defaultValue=""><MenuItem value="Lucknow">Lucknow</MenuItem></Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={6}><TextField fullWidth label="ZIP Code *" /></Grid>
//                 </Grid>
//               </>
//             )}
//           </Box>
//         </Grid>

//         <Grid item xs={12} md={5}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>Your Order</Typography>

//             {products.length === 0 ? (
//               <Typography textAlign="center" sx={{ my: 4 }}>No products in your cart.</Typography>
//             ) : (
//               <List>
//                 {products.map((item, index) => (
//                   <ListItem key={index} divider>
//                     <ListItemText
//                       primary={`${item.name} × ${item.quantity}`}
//                       secondary={`$${item.price.toFixed(2)}`}
//                     />
//                   </ListItem>
//                 ))}
//                 <ListItem>
//                   <ListItemText primary="Subtotal" />
//                   <Typography>${subtotal.toFixed(2)}</Typography>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Total" />
//                   <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
//                 </ListItem>
//               </List>
//             )}

//             {products.length > 0 && (
//               <>
//                 <Box mt={2}>
//                   <Typography fontWeight="bold" gutterBottom>Pay With Wallet</Typography>
//                   <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//                     <FormControlLabel value="BTC" control={<Radio />} label="BTC: 0.00012" />
//                     <FormControlLabel value="ETH" control={<Radio />} label="ETH: 0.000692" />
//                   </RadioGroup>
//                 </Box>

//                 <Typography variant="body2" mt={2} mb={1}>
//                   Your Personal Data Will Be Used To Process Your Order, Support Your Experience Throughout This Website, And For Other Purposes Described In Our <strong>Privacy Policy</strong>.
//                 </Typography>

//                 <FormControlLabel control={<Checkbox />} label="Would you like to be invited to review your order?" />
//                 <FormControlLabel required control={<Checkbox />} label="I have read and agree to the website Terms and Conditions" />

//                 <Button variant="contained" fullWidth sx={{ mt: 2, fontWeight: 'bold' }}>
//                   ORDER PLACE
//                 </Button>
//               </>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default CheckoutPage;





import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Divider,
  List,
  ListItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(cartData);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    navigate('/');
  };

  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        Checkout
      </Typography>
      <Grid container spacing={4}>
        {/* Billing Form */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Billing Details
            </Typography>
            <Grid container spacing={2}>
              {[
                { label: 'Full Name', name: 'name' },
                { label: 'Email Address', name: 'email' },
                { label: 'Address', name: 'address' },
                { label: 'City', name: 'city' },
                { label: 'ZIP Code', name: 'zip' },
                { label: 'Country', name: 'country' },
              ].map(({ label, name }) => (
                <Grid item xs={12} sm={name === 'zip' || name === 'city' ? 6 : 12} key={name}>
                  <TextField
                    fullWidth
                    label={label}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {products.map((item, index) => (
                <ListItem key={index} divider>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: 'cover',
                        borderRadius: 8,
                      }}
                    />
                    <Box>
                      <Typography fontWeight="bold">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal:</Typography>
              <Typography color="primary">${totalPrice.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography fontWeight="bold">Total:</Typography>
              <Typography fontWeight="bold" color="primary">
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;