
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const menuItems = [
  'My Profile',
  'My Order',
  'My Address',
  'My Wishlist',
  'Change Password',
];

const userDetails = {
  'First Name': 'John',
  'Last Name': 'Sear',
  'Phone': '0000000000',
  'Zip Code': '02100',
  'Country': 'Uk',
  'State': 'Uk',
  'Town/City': 'Baroda',
  'Email Address': 'Hellow@Gmail.Com',
};

const MyAccountPage = () => {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: '#f8f9fb', minHeight: '100vh' }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        MY ACCOUNT
      </Typography>

      <Grid container sx={{ justifyContent: 'flex-start' }} spacing={4} maxWidth="lg" >
        <Grid item sx={{ width: '20%' }}>
          <Paper elevation={2}>
            <List disablePadding>
              {menuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  selected={index === 0}
                  sx={{
                    bgcolor: index === 0 ? '#0415a5' : '#f6f6f6',
                    color: index === 0 ? '#140f0f' : '#000',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    justifyContent: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      bgcolor: index === 0 ? 'black' : '#1032d5',
                    },
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ fontSize: '18px', fontWeight: 500 }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item sx={{ width: '50%' }}>
          <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5" fontWeight="bold" >
                Account Details
              </Typography>
              <Button
                size="medium"
                sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '16px' }}
              >
                Edit
              </Button>
            </Box>

            <Box
              component={Paper}
              variant="outlined"
              sx={{
                p: 4,
                borderStyle: 'dotted',
                borderColor: '#ff4500',
              }}
            >
              {Object.entries(userDetails).map(([label, value], idx) => (
                <Grid container spacing={2} key={idx} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <Typography fontSize="18px" fontWeight={600}>
                      {label} :
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography fontSize="18px">{value}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccountPage;