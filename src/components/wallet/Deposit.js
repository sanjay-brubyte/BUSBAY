import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  IconButton
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QRCode from "react-qr-code";

export default function ReceiveFunds() {
  const [network, setNetwork] = useState("BTC");
  const walletAddress = "A334835B70E6979B9B88A6AB0E";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Address copied!");
  };

  return (
    <Box p={3}>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Receive Funds
      </Typography>
      <Box height={2} bgcolor="#1976d2" mb={3} />

      <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 3 }}>
        <QRCode value={walletAddress} size={80} />

        <Box flex={1}>
          <FormControl fullWidth size="small" sx={{ mb: 2, maxWidth: 200 }}>
            <Select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <MenuItem value="BTC">BTC</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
              <MenuItem value="USDT">USDT</MenuItem>
            </Select>
          </FormControl>

          <Box display="flex">
            <TextField
              fullWidth
              size="small"
              value={walletAddress}
              InputProps={{
                readOnly: true,
              }}
            />
            <IconButton
              onClick={handleCopy}
              sx={{ border: "1px solid #ccc", borderLeft: "none" }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}