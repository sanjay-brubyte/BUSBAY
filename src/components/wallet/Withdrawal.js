import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button
} from "@mui/material";

export default function WithdrawForm() {
  const [network, setNetwork] = useState("BTC");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(20);

  const handleRequest = () => {
    alert(`Withdrawal Requested: ${amount} ${network} to ${address}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Withdraw
      </Typography>
      <Box height={2} bgcolor="#1976d2" mb={3} />

      <Paper sx={{ p: 3, maxWidth: 500 }}>
        <FormControl fullWidth size="small" sx={{ mb: 2 }}>
          <Typography variant="body2" mb={0.5}>
            Select Network
          </Typography>
          <Select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <MenuItem value="BTC">BTC</MenuItem>
            <MenuItem value="ETH">ETH</MenuItem>
            <MenuItem value="USDT">USDT</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small" sx={{ mb: 2 }}>
          <Typography variant="body2" mb={0.5}>
            Select Address
          </Typography>
          <Select
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">
              <em>Select Address</em>
            </MenuItem>
            <MenuItem value="Address1">Address 1</MenuItem>
            <MenuItem value="Address2">Address 2</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" mb={0.5}>
            Amount
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Box
            mt={0.5}
            display="flex"
            justifyContent="space-between"
            fontSize="0.8rem"
            color="text.secondary"
          >
            <span>Network Fee : 0.01 BTC</span>
            <span>Available: 0.01 BTC</span>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            textTransform: "none",
            px: 4
          }}
          onClick={handleRequest}
        >
          Request
        </Button>
      </Paper>
    </Box>
  );
}