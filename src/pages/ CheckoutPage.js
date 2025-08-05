import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Link,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Radio,
  RadioGroup,
  Snackbar,
  Alert,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Checkout() {
  const [sameAsBilling, setSameAsBilling] = useState(false);
  const [billingData, setBillingData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zip: ''
  });
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zip: ''
  });

  const [cartItems, setCartItems] = useState([]);
  const [invite, setInvite] = useState(false);
  const [terms, setTerms] = useState(false);
  const [cryptoType, setCryptoType] = useState('BTC');
  const [orderSuccess, setOrderSuccess] = useState(false); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleBillingChange = (e) => {
    setBillingData({ ...billingData, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const toggleSameAsBilling = () => {
    setSameAsBilling(!sameAsBilling);
  };

  const handleCryptoChange = (e) => {
    setCryptoType(e.target.value);
  };

  const handleOrderPlace = () => {
    setOrderSuccess(true); 
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, fontFamily: 'Arial, sans-serif' }}>
      <Box display="wrap" justifyContent="space-between" flexWrap="wrap" mb={3}>
        <Link
          href="#"
          underline="none"
          sx={{
            px: 2,
            py: 1,
            borderRadius: 1,
            color: '#004085',
            display: 'flex',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <PersonIcon fontSize="small" sx={{ mr: 1 }} />
          Returning Customer?
          <Box component="span" sx={{ borderBottom: '1px solid', ml: 0.5 }}>
            Click Here To Login
          </Box>
        </Link>
      </Box>

      <Box sx={{ p: 1, mb: 4, marginInlineEnd: 80 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Billing Details</Typography>
            <TextField label="First Name*" fullWidth margin="normal" name="firstName" value={billingData.firstName} onChange={handleBillingChange} />
            <TextField label="Last Name*" fullWidth margin="normal" name="lastName" value={billingData.lastName} onChange={handleBillingChange} />
            <TextField label="Phone*" fullWidth margin="normal" name="phone" value={billingData.phone} onChange={handleBillingChange} />
            <TextField label="Email Address *" fullWidth margin="normal" name="email" value={billingData.email} onChange={handleBillingChange} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Country / Region *</InputLabel>
              <Select value={billingData.country} onChange={(e) => handleBillingChange({ target: { name: 'country', value: e.target.value } })}>
                <MenuItem value="">Select a Country / Region</MenuItem>
                <MenuItem value="India">India</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>State *</InputLabel>
              <Select value={billingData.state} onChange={(e) => handleBillingChange({ target: { name: 'state', value: e.target.value } })}>
                <MenuItem value="">Select an Option</MenuItem>
                <MenuItem value="UP">UP</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Town / City *</InputLabel>
              <Select value={billingData.city} onChange={(e) => handleBillingChange({ target: { name: 'city', value: e.target.value } })}>
                <MenuItem value="">Select an Option</MenuItem>
                <MenuItem value="Lucknow">Lucknow</MenuItem>
              </Select>
            </FormControl>
            <TextField label="ZIP Code*" fullWidth margin="normal" name="zip" value={billingData.zip} onChange={handleBillingChange} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Shipping Details</Typography>
            <FormControlLabel control={<Checkbox checked={sameAsBilling} onChange={toggleSameAsBilling} />} label="Same As Billing" />
            <TextField label="First Name*" fullWidth margin="normal" name="firstName" value={sameAsBilling ? billingData.firstName : shippingData.firstName} onChange={handleShippingChange} disabled={sameAsBilling} />
            <TextField label="Last Name*" fullWidth margin="normal" name="lastName" value={sameAsBilling ? billingData.lastName : shippingData.lastName} onChange={handleShippingChange} disabled={sameAsBilling} />
            <TextField label="Phone*" fullWidth margin="normal" name="phone" value={sameAsBilling ? billingData.phone : shippingData.phone} onChange={handleShippingChange} disabled={sameAsBilling} />
            <TextField label="Email Address *" fullWidth margin="normal" name="email" value={sameAsBilling ? billingData.email : shippingData.email} onChange={handleShippingChange} disabled={sameAsBilling} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Country / Region *</InputLabel>
              <Select value={sameAsBilling ? billingData.country : shippingData.country} onChange={(e) => handleShippingChange({ target: { name: 'country', value: e.target.value } })} disabled={sameAsBilling}>
                <MenuItem value="">Select a Country / Region</MenuItem>
                <MenuItem value="India">India</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>State *</InputLabel>
              <Select value={sameAsBilling ? billingData.state : shippingData.state} onChange={(e) => handleShippingChange({ target: { name: 'state', value: e.target.value } })} disabled={sameAsBilling}>
                <MenuItem value="">Select an Option</MenuItem>
                <MenuItem value="UP">UP</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Town / City *</InputLabel>
              <Select value={sameAsBilling ? billingData.city : shippingData.city} onChange={(e) => handleShippingChange({ target: { name: 'city', value: e.target.value } })} disabled={sameAsBilling}>
                <MenuItem value="">Select an Option</MenuItem>
                <MenuItem value="Lucknow">Lucknow</MenuItem>
              </Select>
            </FormControl>
            <TextField label="ZIP Code*" fullWidth margin="normal" name="zip" value={sameAsBilling ? billingData.zip : shippingData.zip} onChange={handleShippingChange} disabled={sameAsBilling} />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          border: '1px solid black',
          borderRadius: 2,
          p: 3,
          maxWidth: '600px',
          marginLeft: '545px',
          marginTop: '-1525px',
          mb: 45,
        }}
      >
        <Typography variant="h6" gutterBottom>Your Order</Typography>
        <Stack spacing={2} mb={2}>
          {cartItems.map((item, index) => (
            <Card key={index} sx={{ display: 'flex' }}>
              <CardMedia component="img" sx={{ width: 100 }} image={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{item.name} × {item.quantity}</Typography>
                <Typography variant="body2" color="text.secondary">${item.price.toFixed(2)}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Divider />
        <Box mt={2} display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">Subtotal:</Typography>
          <Typography>${subtotal}</Typography>
        </Box>
        <Box mt={1} display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">Total:</Typography>
          <Typography>${subtotal}</Typography>
        </Box>

        <Typography variant="h6" gutterBottom mt={2}>Pay With Wallet</Typography>
        <Box mt={2} boxShadow={1} p={2}>
          <Typography variant="subtitle1" gutterBottom>Select Cryptocurrency</Typography>
          <RadioGroup value={cryptoType} onChange={handleCryptoChange}>
            <FormControlLabel value="BTC" control={<Radio />} label="BTC" />
            <FormControlLabel value="ETH" control={<Radio />} label="ETH" />
          </RadioGroup>
        </Box>

        <Box mt={2} mb={2} p={2} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="body2" color="textSecondary" align="center">
            Your Personal Data Will Be Used To Process Your Order, Support Your Experience Website, And For Other Purposes Described In Our Privacy Policy.
          </Typography>
        </Box>

        <Box mt={2}>
          <FormControlLabel control={<Checkbox checked={invite} onChange={(e) => setInvite(e.target.checked)} />} label="Would you like to be invited to review your order?" />
          <FormControlLabel control={<Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} />} label={<Typography>I have read and agree to the website <Link href="#">Terms and Conditions</Link></Typography>} />
        </Box>

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5, borderRadius: 2, fontSize: '1.2rem' }} onClick={handleOrderPlace}>
          Order Place
        </Button>
      </Box>

      <Snackbar open={orderSuccess} autoHideDuration={3000} onClose={() => setOrderSuccess(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setOrderSuccess(false)} severity="success" sx={{ width: '100%' }}>
          🎉 Your order was placed successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Checkout;