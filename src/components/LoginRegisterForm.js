// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Checkbox,
//   Divider,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
//   Tab,
//   Tabs,
//   TextField,
//   Typography,
//   Link,
//   Paper,
// } from '@mui/material';
// import {
//   Visibility,
//   VisibilityOff,
//   PersonOutline,
//   Email,
//   Google as GoogleIcon,
//   Apple as AppleIcon,
//   AccountBalanceWallet as CoinbaseIcon,
//   Person as PersonIcon,
// } from '@mui/icons-material';

// import TopBar from '../components/TopBar';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';

// const LoginRegisterForm = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [agree, setAgree] = useState(false);
//   const [showResetPassword, setShowResetPassword] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');

//   const handleTabChange = (_, newValue) => setTabValue(newValue);

//   const handleReset = () => {
//     console.log('Reset link sent to:', resetEmail);
//   };

//   return (
//     <>
//       <TopBar />
//       <NavBar />

//       <Box sx={{ minHeight: '60vh', p: 8 }}>
//         <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
//           {showResetPassword ? (
//             <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 RESET PASSWORD
//               </Typography>
//               <Typography variant="body2" color="text.secondary" mb={3}>
//                 Lost your password? Please enter your email address. You will receive a link to create a new password via email.
//               </Typography>

//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 value={resetEmail}
//                 onChange={(e) => setResetEmail(e.target.value)}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <PersonIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{ mb: 6 }}
//               />

//               <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//                 <Link
//                   component="button"
//                   variant="body2"
//                   onClick={() => setShowResetPassword(false)}
//                   sx={{ color: 'primary.main' }}
//                 >
//                   Click Here to Login
//                 </Link>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleReset}
//                   sx={{ px: 6 }}
//                 >
//                   Reset Password
//                 </Button>
//               </Box>
//             </Paper>
//           ) : (
//             <>
//               <Tabs
//                 value={tabValue}
//                 onChange={handleTabChange}
//                 centered
//                 textColor="primary"
//                 indicatorColor="primary"
//                 sx={{ mb: 3 }}
//               >
//                 <Tab label="LOGIN" sx={{ fontSize: '24px', fontWeight: 'bold' }} />
//                 <Tab label="REGISTER" sx={{ fontSize: '24px', fontWeight: 'bold' }} />
//               </Tabs>

//               {tabValue === 0 && (
//                 <>
//                   <TextField
//                     fullWidth
//                     label="Email Address"
//                     margin="normal"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <PersonOutline />
//                         </InputAdornment>
//                       ),
//                     }}
//                     inputProps={{ style: { fontSize: '18px', fontWeight: 500 } }}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Password"
//                     margin="normal"
//                     type={showPassword ? 'text' : 'password'}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword((s) => !s)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                     inputProps={{ style: { fontSize: '18px', fontWeight: 500 } }}
//                   />

//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
//                     <FormControlLabel control={<Checkbox size="small" />} label="Remember Me" />
//                     <Link
//                       component="button"
//                       onClick={() => setShowResetPassword(true)}
//                       sx={{ fontSize: 14, color: '#1565c0', textDecoration: 'none' }}
//                     >
//                       Forgot Your Password?
//                     </Link>
//                   </Box>

//                   <Button
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2, borderRadius: 2, fontSize: '20px', fontWeight: 600 }}
//                   >
//                     Log In
//                   </Button>

//                   <Divider sx={{ my: 3 }}>Or</Divider>

//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<GoogleIcon />}
//                     sx={{ mb: 1, textTransform: 'none', fontSize: '14px', fontWeight: 500 }}
//                   >
//                     Login With Google
//                   </Button>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<AppleIcon />}
//                     sx={{ mb: 1, textTransform: 'none', fontSize: '14px', fontWeight: 500 }}
//                   >
//                     Login With Apple
//                   </Button>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<CoinbaseIcon />}
//                     sx={{ textTransform: 'none', fontSize: '14px', fontWeight: 500 }}
//                   >
//                     Login With Coinbase
//                   </Button>
//                 </>
//               )}

//               {tabValue === 1 && (
//                 <>
//                   <TextField
//                     fullWidth
//                     label="First Name"
//                     margin="normal"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <PersonOutline />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Last Name"
//                     margin="normal"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <PersonOutline />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Email Address"
//                     margin="normal"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <Email />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Password"
//                     margin="normal"
//                     type={showPassword ? 'text' : 'password'}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowPassword((s) => !s)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Confirm Password"
//                     margin="normal"
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={() => setShowConfirmPassword((s) => !s)}>
//                             {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />

//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={agree}
//                         onChange={(e) => setAgree(e.target.checked)}
//                       />
//                     }
//                     label={
//                       <Typography variant="body2">
//                         Yes, I Agree To The{' '}
//                         <Link href="#" underline="hover" color="primary">
//                           Terms And Conditions
//                         </Link>{' '}
//                         And The{' '}
//                         <Link href="#" underline="hover" color="primary">
//                           Privacy Policy
//                         </Link>
//                       </Typography>
//                     }
//                   />
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     disabled={!agree}
//                     sx={{ mt: 2, borderRadius: 2, fontSize: '20px', fontWeight: 600 }}
//                   >
//                     Register
//                   </Button>
//                 </>
//               )}
//             </>
//           )}
//         </Box>
//       </Box>

//       <Box sx={{ mt: 25 }}>
//         <Footer />
//       </Box>
//     </>
//   );
// };

// export default LoginRegisterForm;




import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  Link,
  Paper,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  PersonOutline,
  Email,
  Google as GoogleIcon,
  Apple as AppleIcon,
  AccountBalanceWallet as CoinbaseIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const LoginRegisterForm = () => {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleTabChange = (_, newValue) => setTabValue(newValue);

  const handleReset = () => {
    console.log('Reset link sent to:', resetEmail);
  };

  return (
    <>
      <TopBar />
      <NavBar />

      <Box sx={{ minHeight: '60vh', p: 8 }}>
        <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
          {showResetPassword ? (
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                RESET PASSWORD
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Lost your password? Please enter your email address. You will receive a link to create a new password via email.
              </Typography>

              <TextField
                fullWidth
                label="Email Address"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 6 }}
              />

              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setShowResetPassword(false)}
                  sx={{ color: 'primary.main' }}
                >
                  Click Here to Login
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                  sx={{ px: 6 }}
                >
                  Reset Password
                </Button>
              </Box>
            </Paper>
          ) : (
            <>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                textColor="primary"
                indicatorColor="primary"
                sx={{ mb: 3 }}
              >
                <Tab label="LOGIN" sx={{ fontSize: '24px', fontWeight: 'bold' }} />
                <Tab label="REGISTER" sx={{ fontSize: '24px', fontWeight: 'bold' }} />
              </Tabs>

              {tabValue === 0 && (
                <>
                  <TextField
                    fullWidth
                    label="Email Address"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutline />
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{ style: { fontSize: '18px', fontWeight: 500 } }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword((s) => !s)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{ style: { fontSize: '18px', fontWeight: 500 } }}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <FormControlLabel control={<Checkbox size="small" />} label="Remember Me" />
                    <Link
                      component="button"
                      onClick={() => setShowResetPassword(true)}
                      sx={{ fontSize: 14, color: '#1565c0', textDecoration: 'none' }}
                    >
                      Forgot Your Password?
                    </Link>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/Account')}
                    sx={{ mt: 2, borderRadius: 2, fontSize: '20px', fontWeight: 600 }}
                  >
                    Log In
                  </Button>

                  <Divider sx={{ my: 3 }}>Or</Divider>

                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ mb: 1, textTransform: 'none', fontSize: '14px', fontWeight: 500 }}
                  >
                    Login With Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<AppleIcon />}
                    sx={{ mb: 1, textTransform: 'none', fontSize: '14px', fontWeight: 500 }}
                  >
                    Login With Apple
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<CoinbaseIcon />}
                    sx={{ textTransform: 'none', fontSize: '14px', fontWeight: 500 }}
                  >
                    Login With Coinbase
                  </Button>
                </>
              )}

              {tabValue === 1 && (
                <>
                  <TextField
                    fullWidth
                    label="First Name"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutline />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutline />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword((s) => !s)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    margin="normal"
                    type={showConfirmPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowConfirmPassword((s) => !s)}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Yes, I Agree To The{' '}
                        <Link href="#" underline="hover" color="primary">
                          Terms And Conditions
                        </Link>{' '}
                        And The{' '}
                        <Link href="#" underline="hover" color="primary">
                          Privacy Policy
                        </Link>
                      </Typography>
                    }
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={!agree}
                    sx={{ mt: 2, borderRadius: 2, fontSize: '20px', fontWeight: 600 }}
                  >
                    Register
                  </Button>
                </>
              )}
            </>
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 25 }}>
        <Footer />
      </Box>
    </>
  );
};

export default LoginRegisterForm;