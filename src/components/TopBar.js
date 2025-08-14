


// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   InputBase,
//   Select,
//   MenuItem,
//   IconButton,
//   Badge,
//   Link,
//   Dialog,
//   Slide,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useNavigate } from 'react-router-dom';

// import logoImg from '../components/logo-video.gif';
// import LoginRegisterForm from './LoginRegisterForm';

// const SearchBox = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   backgroundColor: '#f1f1f1',
//   borderRadius: 4,
//   overflow: 'hidden',
//   width: '100%',
//   maxWidth: 500,
//   border: '1px solid #ccc',
//   height: 40,
// }));

// const SearchInput = styled(InputBase)(({ theme }) => ({
//   flex: 1,
//   padding: theme.spacing(0.5, 1),
//   fontSize: '16px',
//   fontWeight: 500,
//   fontFamily: 'Bai Jamjuree',
// }));

// const Logo = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   padding: '6px 10px',
//   overflow: 'visible',
// });

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// const TopBar = () => {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const navigate = useNavigate();

//   const [cartCount, setCartCount] = useState(() => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     return cart.reduce((sum, item) => sum + item.quantity, 0);
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const count = cart.reduce((sum, item) => sum + item.quantity, 0);
//       setCartCount(count);
//     }, 1000); 

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="static"
//         color="transparent"
//         elevation={0}
//         sx={{
//           borderBottom: '2px solid #e0e0e0',
//           fontFamily: 'Bai Jamjuree',
//         }}
//       >
//         <Toolbar
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexWrap: { xs: 'wrap', md: 'nowrap' },
//             minHeight: 60,
//             px: { xs: 1, sm: 2 },
//             gap: { xs: 1, sm: 2 },
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               minWidth: { xs: '100%', md: 300 },
//               justifyContent: { xs: 'center', md: 'flex-start' },
//             }}
//           >
//             <Logo>
//               <img
//                 src={logoImg}
//                 alt="Logo"
//                 style={{
//                   height: '125px',
//                   width: '250px',
//                   marginTop: '-20px',
//                 }}
//                 loading="lazy"
//               />
//             </Logo>
//             <Box
//               sx={{
//                 display: { xs: 'none', sm: 'flex' },
//                 flexDirection: 'column',
//                 ml: 2,
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <LocationOnIcon sx={{ color: 'blue', fontSize: 'large' }} />
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     ml: 0.5,
//                     fontSize: '12px',
//                     fontWeight: 400,
//                     fontFamily: 'Bai Jamjuree',
//                   }}
//                 >
//                   Delivering To Jaipur 302002
//                 </Typography>
//               </Box>
//               <Box sx={{ mt: 0.5 }}>
//                 <Link
//                   href="#"
//                   underline="none"
//                   sx={{
//                     fontSize: '14px',
//                     fontWeight: 500,
//                     color: '#000',
//                     fontFamily: 'Bai Jamjuree',
//                   }}
//                 >
//                   Update Location
//                 </Link>
//               </Box>
//             </Box>
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexGrow: 1,
//               width: { xs: '100%', sm: 'auto' },
//               order: { xs: 3, md: 2 },
//             }}
//           >
//             <SearchBox>
//               <Select
//                 defaultValue="all"
//                 sx={{
//                   bgcolor: '#e0e0e0',
//                   height: '100%',
//                   fontSize: '16px',
//                   minWidth: 90,
//                   fontFamily: 'Bai Jamjuree',
//                 }}
//               >
//                 <MenuItem value="all">All</MenuItem>
//                 <MenuItem value="electronics">Electronics</MenuItem>
//                 <MenuItem value="fashion">Fashion</MenuItem>
//               </Select>
//               <SearchInput placeholder="Search For Basebuy" />
//               <IconButton
//                 sx={{
//                   bgcolor: '#0050e0',
//                   color: 'white',
//                   borderRadius: 0,
//                   ml: 1,
//                   height: 40,
//                   width: 40,
//                   '&:hover': { bgcolor: '#0046b8' },
//                 }}
//               >
//                 <SearchIcon sx={{ fontSize: '20px' }} />
//               </IconButton>
//             </SearchBox>
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 3,
//               minWidth: { xs: '100%', sm: 150 },
//               order: { xs: 2, md: 3 },
//               mt: { xs: 1, md: 0 },
//               justifyContent: { xs: 'center', md: 'flex-end' },
//             }}
//           >
//             <IconButton onClick={() => setLoginOpen(true)} sx={{ height: 40, width: 40 }}>
//               <AccountCircleIcon sx={{ color: 'black', fontSize: '28px' }} />
//             </IconButton>
//             <IconButton sx={{ height: 40, width: 40 }}>
//               <AccountBalanceWalletIcon sx={{ color: 'black', fontSize: '28px' }} />
//             </IconButton>
//             <IconButton
//               sx={{ height: 40, width: 40 }}
//               onClick={() => navigate('/cart')}
//             >
//               <Badge badgeContent={cartCount} color="primary">
//                 <ShoppingCartIcon sx={{ color: 'black', fontSize: '28px' }} />
//               </Badge>
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Dialog
//         open={loginOpen}
//         onClose={() => setLoginOpen(false)}
//         fullScreen
//         TransitionComponent={Transition}
//       >
//         <LoginRegisterForm />
//       </Dialog>
//     </>
//   );
// };

// export default TopBar;




import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Select,
  MenuItem,
  IconButton,
  Badge,
  Link,
  Dialog,
  Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import logoImg from '../components/logo-video.gif';
import LoginRegisterForm from './LoginRegisterForm';

const SearchBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f1f1f1',
  borderRadius: 4,
  overflow: 'hidden',
  width: '100%',
  maxWidth: 500,
  border: '1px solid #ccc',
  height: 40,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0.5, 1),
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Bai Jamjuree',
}));

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 10px',
  overflow: 'visible',
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const TopBar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '2px solid #e0e0e0',
          fontFamily: 'Bai Jamjuree',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            minHeight: 60,
            px: { xs: 1, sm: 2 },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              minWidth: { xs: '100%', md: 300 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Logo>
              <img
                src={logoImg}
                alt="Logo"
                style={{
                  height: '125px',
                  width: '250px',
                  marginTop: '-20px',
                }}
                loading="lazy"
              />
            </Logo>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                ml: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ color: 'blue', fontSize: 'large' }} />
                <Typography
                  variant="body2"
                  sx={{
                    ml: 0.5,
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'Bai Jamjuree',
                  }}
                >
                  Delivering To Jaipur 302002
                </Typography>
              </Box>
              <Box sx={{ mt: 0.5 }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#000',
                    fontFamily: 'Bai Jamjuree',
                  }}
                >
                  Update Location
                </Link>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              width: { xs: '100%', sm: 'auto' },
              order: { xs: 3, md: 2 },
            }}
          >
            <SearchBox>
              <Select
                defaultValue="all"
                sx={{
                  bgcolor: '#e0e0e0',
                  height: '100%',
                  fontSize: '16px',
                  minWidth: 90,
                  fontFamily: 'Bai Jamjuree',
                }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion">Fashion</MenuItem>
              </Select>
              <SearchInput placeholder="Search For Basebuy" />
              <IconButton
                sx={{
                  bgcolor: '#0050e0',
                  color: 'white',
                  borderRadius: 0,
                  ml: 1,
                  height: 40,
                  width: 40,
                  '&:hover': { bgcolor: '#0046b8' },
                }}
              >
                <SearchIcon sx={{ fontSize: '20px' }} />
              </IconButton>
            </SearchBox>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              minWidth: { xs: '100%', sm: 150 },
              order: { xs: 2, md: 3 },
              mt: { xs: 1, md: 0 },
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <IconButton onClick={() => setLoginOpen(true)} sx={{ height: 40, width: 40 }}>
              <AccountCircleIcon sx={{ color: 'black', fontSize: '28px' }} />
            </IconButton>

            <IconButton
              sx={{ height: 40, width: 40 }}
              onClick={() => navigate('/wallet')}
            >
              <AccountBalanceWalletIcon sx={{ color: 'black', fontSize: '28px' }} />
            </IconButton>

            <IconButton
              sx={{ height: 40, width: 40 }}
              onClick={() => navigate('/cart')}
            >
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartIcon sx={{ color: 'black', fontSize: '28px' }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        fullScreen
        TransitionComponent={Transition}
      >
        <LoginRegisterForm />
      </Dialog>
    </>
  );
};

export default TopBar;