import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    console.log('Reset link sent to:', email);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f5f5f7' }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          RESET PASSWORD
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <PersonIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Link href="/login" underline="hover" variant="body2" color="primary">
            Click Here To Login
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            sx={{ px: 3, backgroundColor: '#0066ff' }}
          >
            Reset Password
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResetPassword;