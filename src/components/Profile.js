

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'My Profile', path: '/profile' },
  { label: 'My Order', path: '/order' },
  { label: 'My Address', path: '/address' },
  { label: 'My Wishlist', path: '/wishlist' },
  { label: 'Change Password', path: '/change-password' },
];

const initialUserDetails = {
  'First Name': 'John',
  'Last Name': 'Sear',
  'Phone': '0000000000',
  'Zip Code': '02100',
  'Country': 'Uk',
  'State': 'Uk',
  'Town/City': 'Baroda',
  'Email Address': 'Hellow@Gmail.Com',
};

const countries = ['Uk', 'India', 'USA'];
const states = ['Uk', 'California', 'Delhi'];

const MyAccountPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState(initialUserDetails);

  const location = useLocation();
  const currentPath = location.pathname;
  const selectedMenuIndex = menuItems.findIndex(item => item.path === currentPath);

  const handleEditClick = () => setIsEditMode(true);
  const handleUpdate = () => setIsEditMode(false);
  const handleChange = (label) => (event) => {
    setUserDetails({ ...userDetails, [label]: event.target.value });
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'black',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '8px',
    padding: '8px 16px',
    '&:hover': {
      backgroundColor: '#0069d9',
    },
  };

  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: '#f8f9fb', minHeight: '100vh' }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        MY ACCOUNT
      </Typography>

      <Grid container sx={{ justifyContent: 'flex-start' }} spacing={4} maxWidth="lg">
        <Grid item sx={{ width: '20%' }}>
          <Paper elevation={2}>
            <List disablePadding>
              {menuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  component={Link}
                  to={item.path}
                  selected={index === selectedMenuIndex}
                  sx={{
                    bgcolor: index === selectedMenuIndex ? '#0415a5' : '#f6f6f6',
                    color: index === selectedMenuIndex ? '#fff' : '#000',
                    fontWeight: index === selectedMenuIndex ? 'bold' : 'normal',
                    justifyContent: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      bgcolor: index === selectedMenuIndex ? 'black' : '#1032d5',
                    },
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: '18px', fontWeight: 500 }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item sx={{ width: '50%' }}>
          <Box>
            {currentPath === '/profile' ? (
              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  My Profile Details
                </Typography>
                {Object.entries(userDetails).map(([label, value]) => (
                  <Grid container spacing={2} key={label} sx={{ mb: 2, alignItems: 'center' }}>
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
            ) : (
              <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h5" fontWeight="bold">
                    Account Details
                  </Typography>
                  {!isEditMode && (
                    <Button
                      size="medium"
                      sx={{ ...buttonStyle, textTransform: 'none', fontSize: '16px' }}
                      onClick={handleEditClick}
                    >
                      Edit
                    </Button>
                  )}
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
                    <Grid container spacing={2} key={idx} sx={{ mb: 2, alignItems: 'center' }}>
                      <Grid item xs={12} sm={4}>
                        <Typography fontSize="18px" fontWeight={600}>
                          {label} :
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        {isEditMode ? (
                          label === 'Country' ? (
                            <Select
                              value={userDetails[label]}
                              onChange={handleChange(label)}
                              fullWidth
                              size="small"
                            >
                              {countries.map((country) => (
                                <MenuItem key={country} value={country}>
                                  {country}
                                </MenuItem>
                              ))}
                            </Select>
                          ) : label === 'State' ? (
                            <Select
                              value={userDetails[label]}
                              onChange={handleChange(label)}
                              fullWidth
                              size="small"
                            >
                              {states.map((state) => (
                                <MenuItem key={state} value={state}>
                                  {state}
                                </MenuItem>
                              ))}
                            </Select>
                          ) : (
                            <TextField
                              value={userDetails[label]}
                              onChange={handleChange(label)}
                              fullWidth
                              size="small"
                            />
                          )
                        ) : (
                          <Typography fontSize="18px">{value}</Typography>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                </Box>

                {isEditMode && (
                  <Box mt={2} display="flex" justifyContent="flex-start">
                    <Button
                      variant="contained"
                      sx={{ ...buttonStyle }}
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccountPage;