

// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Button,
// //   MenuItem,
// //   IconButton,
// //   Select,
// //   FormControl,
// //   useMediaQuery,
// //   Stack,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// // import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// // import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// // import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// // import EuroIcon from '@mui/icons-material/Euro';
// // import { useTheme } from '@mui/material/styles';
// // import { Link } from 'react-router-dom'; 

// // const fontStyle = {
// //   fontFamily: 'Bai Jamjuree',
// //   fontSize: '18px',
// //   fontWeight: '500',
// // };

// // const NavBar = () => {
// //   const menuItems = [
// //     { label: 'Home', path: '/' },
// //     { label: 'Deals Of The Day', path: '/deals' },
// //     { label: 'Best Seller', path: '/best-seller' },
// //     { label: 'Gift Cards', path: '/gift-cards' },
// //     { label: 'Sell On Platform', path: '/sell' },
// //     { label: 'Shop', path: '/shop' }, 
// //   ];

// //   const countryOptions = [
// //     { code: 'us', label: 'United States', flag: 'https://flagcdn.com/us.svg' },
// //     { code: 'in', label: 'India', flag: 'https://flagcdn.com/in.svg' },
// //     { code: 'uk', label: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' }
// //   ];

// //   const currencyOptions = [
// //     { code: 'usd', label: 'USD', symbol: '$' },
// //     { code: 'inr', label: 'INR', symbol: '₹' },
// //     { code: 'eur', label: 'EUR', symbol: '€' }
// //   ];

// //   const currencyIcons = {
// //     usd: <AttachMoneyIcon />,
// //     inr: <CurrencyRupeeIcon />,
// //     eur: <EuroIcon />,
// //   };

// //   const [hoveredItem, setHoveredItem] = useState(null);
// //   const [selectedCountry, setSelectedCountry] = useState('us');
// //   const [selectedCurrency, setSelectedCurrency] = useState('usd');
// //   const [drawerOpen, setDrawerOpen] = useState(false);

// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// //   return (
// //     <Box
// //       sx={{
// //         px: 2,
// //         py: 1,
// //         borderBottom: '1px solid rgb(175, 172, 172)',
// //         backgroundColor: '#fff',
// //         ...fontStyle,
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           justifyContent: 'space-between',
// //           alignItems: 'center',
// //           flexWrap: 'wrap',
// //           ...fontStyle,
// //         }}
// //       >
// //         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ...fontStyle }}>
// //           {isMobile ? (
// //             <>
// //               <IconButton onClick={() => setDrawerOpen(true)}>
// //                 <MenuIcon sx={{ color: 'red' }} />
// //               </IconButton>
// //               <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// //                 <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)}>
// //                   <List>
// //                     {menuItems.map((item, index) => (
// //                       <ListItem key={index} disablePadding>
// //                         <ListItemButton component={Link} to={item.path}>
// //                           <ListItemText primary={item.label} />
// //                         </ListItemButton>
// //                       </ListItem>
// //                     ))}
// //                   </List>
// //                 </Box>
// //               </Drawer>
// //             </>
// //           ) : (
// //             <>
// //               <IconButton>
// //                 <MenuIcon sx={{ color: 'red' }} />
// //               </IconButton>
// //               {menuItems.map((item, index) => {
// //                 const isHovered = hoveredItem === item.label;
// //                 const showUnderline = isHovered || item.label === 'Home';

// //                 return (
// //                   <Box
// //                     key={index}
// //                     onMouseEnter={() => setHoveredItem(item.label)}
// //                     onMouseLeave={() => setHoveredItem(null)}
// //                     sx={{
// //                       position: 'relative',
// //                       display: 'inline-block',
// //                       '&:hover button': {
// //                         color: '#0072ff',
// //                       },
// //                       '&:after': {
// //                         content: '""',
// //                         position: 'absolute',
// //                         bottom: 0,
// //                         left: 0,
// //                         height: '2px',
// //                         width: showUnderline ? '100%' : '0',
// //                         backgroundColor: '#0072ff',
// //                         transition: 'width 0.3s ease',
// //                       },
// //                     }}
// //                   >
// //                     <Button
// //                       component={Link} 
// //                       to={item.path} 
// //                       endIcon={
// //                         item.label === 'Home'
// //                           ? null
// //                           : isHovered
// //                           ? <ArrowDropUpIcon />
// //                           : <ArrowDropDownIcon />
// //                       }
// //                       sx={{
// //                         ...fontStyle,
// //                         color: item.label === 'Home' ? '#0072ff' : '#000',
// //                         fontWeight: 'normal',
// //                         textTransform: 'none',
// //                         borderRadius: 0,
// //                       }}
// //                     >
// //                       {item.label}
// //                     </Button>
// //                   </Box>
// //                 );
// //               })}
// //             </>
// //           )}
// //         </Box>

// //         <Stack
// //           direction="row"
// //           spacing={2}
// //           mt={{ xs: 2, sm: 0 }}
// //           sx={{ fontFamily: 'Bai Jamjuree', ...fontStyle }}
// //         >
// //           <FormControl size="small" sx={{ minWidth: 140 }}>
// //             <Select
// //               value={selectedCountry}
// //               onChange={(e) => setSelectedCountry(e.target.value)}
// //               displayEmpty
// //               renderValue={(value) => {
// //                 const country = countryOptions.find(c => c.code === value);
// //                 return (
// //                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //                     <img
// //                       src={country.flag}
// //                       alt={country.label}
// //                       style={{ width: 20, height: 15, marginRight: 8 }}
// //                     />
// //                     {country.label}
// //                   </Box>
// //                 );
// //               }}
// //             >
// //               {countryOptions.map((country) => (
// //                 <MenuItem key={country.code} value={country.code}>
// //                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //                     <img
// //                       src={country.flag}
// //                       alt={country.label}
// //                       style={{ width: 20, height: 15, marginRight: 8 }}
// //                     />
// //                     {country.label}
// //                   </Box>
// //                 </MenuItem>
// //               ))}
// //             </Select>
// //           </FormControl>

// //           <FormControl size="small" sx={{ minWidth: 120 }}>
// //             <Select
// //               value={selectedCurrency}
// //               onChange={(e) => setSelectedCurrency(e.target.value)}
// //               displayEmpty
// //               renderValue={(value) => {
// //                 const currency = currencyOptions.find(c => c.code === value);
// //                 return (
// //                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //                     {currencyIcons[value]}
// //                     <Box sx={{ ml: 1 }}>{currency.label}</Box>
// //                   </Box>
// //                 );
// //               }}
// //             >
// //               {currencyOptions.map((currency) => (
// //                 <MenuItem key={currency.code} value={currency.code}>
// //                   {currency.symbol} {currency.label}
// //                 </MenuItem>
// //               ))}
// //             </Select>
// //           </FormControl>
// //         </Stack>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default NavBar;




import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  MenuItem,
  IconButton,
  Select,
  FormControl,
  useMediaQuery,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EuroIcon from '@mui/icons-material/Euro';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const fontStyle = {
  fontFamily: 'Bai Jamjuree',
  fontSize: '18px',
  fontWeight: '500',
};

const NavBar = () => {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Deals Of The Day', path: '/deals' },
    { label: 'Best Seller', path: '/best-seller' },
    { label: 'Gift Cards', path: '/gift-cards' },
    { label: 'Sell On Platform', path: '/sell' },
    { label: 'Shop', path: '/shop' },
  ];

  const categoryItems = [
    'Computer & Desktop',
    'Smart Phones & Tablets',
    'Home & Kitchen',
    'TV & Audios',
    'Top Deals',
    'Top Selling Products',
    'Top Featured Products',
    'Gaming Accessories',
    'Top Deals new',
    'Top  Products',
    'Top Lounch Products',
    'Gaming Accessories',
  ];

  const countryOptions = [
    { code: 'us', label: 'United States', flag: 'https://flagcdn.com/us.svg' },
    { code: 'in', label: 'India', flag: 'https://flagcdn.com/in.svg' },
    { code: 'uk', label: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
  ];

  const currencyOptions = [
    { code: 'usd', label: 'USD', symbol: '$' },
    { code: 'inr', label: 'INR', symbol: '₹' },
    { code: 'eur', label: 'EUR', symbol: '€' },
  ];

  const currencyIcons = {
    usd: <AttachMoneyIcon />,
    inr: <CurrencyRupeeIcon />,
    eur: <EuroIcon />,
  };

  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
  const [categoryListHeight, setCategoryListHeight] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const categoryListRef = useRef(null);

  useEffect(() => {
    if (categoryDrawerOpen && categoryListRef.current) {
      const height = categoryListRef.current.offsetHeight;
      setCategoryListHeight(height);
    }
  }, [categoryDrawerOpen]);

  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        borderBottom: '1px solid rgb(175, 172, 172)',
        backgroundColor: '#fff',
        ...fontStyle,
        height: categoryDrawerOpen ? categoryListHeight : 'auto',
        transition: 'height 0.3s ease',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          ...fontStyle,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ...fontStyle }}>
          {isMobile ? (
            <>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{ color: 'red' }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box width={250} role="presentation">
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <IconButton onClick={() => setCategoryDrawerOpen(true)}>
                <MenuIcon sx={{ color: 'red' }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={categoryDrawerOpen}
                onClose={() => setCategoryDrawerOpen(false)}
              >
                <Box
                  ref={categoryListRef}
                  sx={{
                    width: 280,
                    height: 'auto',
                    display: 'inline-block',
                    boxShadow: 3,
                    borderRight: '1px solid #ddd',
                    p: 1,
                  }}
                  role="presentation"
                >
                  <List>
                    {categoryItems.map((category, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: 'skyblue', 
                            },
                            '&:hover .categoryText': {
                              transform: 'translateX(-10px)', 
                              color: 'skyblue',
                            },
                            '&:hover .categoryIcon': {
                              transform: 'translateX(10px)', 
                              color: 'skyblue',
                            },
                          }}
                        >
                          <ListItemText
                            primary={category}
                            className="categoryText"
                            sx={{
                              transition: 'all 0.3s ease',
                            }}
                          />
                          <ListItemIcon
                            className="categoryIcon"
                            sx={{
                              minWidth: 30,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <ChevronRightIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>

              {menuItems.map((item, index) => {
                const isHovered = hoveredItem === item.label;
                const showUnderline = isHovered || item.label === 'Home';

                return (
                  <Box
                    key={index}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      '&:hover button': {
                        color: '#0072ff',
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '2px',
                        width: showUnderline ? '100%' : '0',
                        backgroundColor: '#0072ff',
                        transition: 'width 0.3s ease',
                      },
                    }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      endIcon={
                        item.label === 'Home' ? null : isHovered ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                      }
                      sx={{
                        ...fontStyle,
                        color: item.label === 'Home' ? '#0072ff' : '#000',
                        fontWeight: 'normal',
                        textTransform: 'none',
                        borderRadius: 0,
                      }}
                    >
                      {item.label}
                    </Button>
                  </Box>
                );
              })}
            </>
          )}
        </Box>

        <Stack
          direction="row"
          spacing={2}
          mt={{ xs: 2, sm: 0 }}
          sx={{ fontFamily: 'Bai Jamjuree', ...fontStyle }}
        >
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                const country = countryOptions.find((c) => c.code === value);
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={country.flag}
                      alt={country.label}
                      style={{ width: 20, height: 15, marginRight: 8 }}
                    />
                    {country.label}
                  </Box>
                );
              }}
            >
              {countryOptions.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={country.flag}
                      alt={country.label}
                      style={{ width: 20, height: 15, marginRight: 8 }}
                    />
                    {country.label}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                const currency = currencyOptions.find((c) => c.code === value);
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {currencyIcons[value]}
                    <Box sx={{ ml: 1 }}>{currency.label}</Box>
                  </Box>
                );
              }}
            >
              {currencyOptions.map((currency) => (
                <MenuItem key={currency.code} value={currency.code}>
                  {currency.symbol} {currency.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;