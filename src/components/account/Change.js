

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Change Password
      </Typography>

      <Paper
        sx={{
          backgroundColor: "#e6f4ea",
          p: 2,
          mb: 3,
          borderRadius: 1,
        }}
        elevation={0}
      >
        <Typography sx={{ color: "green", fontSize: 14, fontWeight: 500 }}>
          Update Your Password To Keep Your Account Secure.
        </Typography>
        <Typography sx={{ color: "green", fontSize: 14 }}>
          Change Your Password Regularly To Enhance The Security Of Your
          Account. You'll Need Your Current Password To Confirm This Change.
        </Typography>
      </Paper>

      <TextField
        label="Current Password"
        type={showCurrent ? "text" : "password"}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlined />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowCurrent(!showCurrent)}>
                {showCurrent ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="New Password"
        type={showNew ? "text" : "password"}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlined />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowNew(!showNew)}>
                {showNew ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Confirm Password"
        type={showConfirm ? "text" : "password"}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlined />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        sx={{
          width: 50,     
          height: 35,    
          backgroundColor: "#0066ff",
          "&:hover": { backgroundColor: "#0052cc" },
          mt: 2,
        }}
      >
        UPDATE
      </Button>
    </Box>
  );
};

export default ChangePassword;