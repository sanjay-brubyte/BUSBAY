// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   FormControl,
//   Select,
//   MenuItem,
//   TextField,
//   IconButton
// } from "@mui/material";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import QRCode from "react-qr-code";

// export default function ReceiveFunds() {
//   const [network, setNetwork] = useState("BTC");
//   const walletAddress = "A334835B70E6979B9B88A6AB0E";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(walletAddress);
//     alert("Address copied!");
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h6" fontWeight="bold" mb={1}>
//         Receive Funds
//       </Typography>
//       <Box height={2} bgcolor="#1976d2" mb={3} />

//       <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 3 }}>
//         <QRCode value={walletAddress} size={80} />

//         <Box flex={1}>
//           <FormControl fullWidth size="small" sx={{ mb: 2, maxWidth: 200 }}>
//             <Select
//               value={network}
//               onChange={(e) => setNetwork(e.target.value)}
//             >
//               <MenuItem value="BTC">BTC</MenuItem>
//               <MenuItem value="ETH">ETH</MenuItem>
//               <MenuItem value="USDT">USDT</MenuItem>
//             </Select>
//           </FormControl>

//           <Box display="flex">
//             <TextField
//               fullWidth
//               size="small"
//               value={walletAddress}
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//             <IconButton
//               onClick={handleCopy}
//               sx={{ border: "1px solid #ccc", borderLeft: "none" }}
//             >
//               <ContentCopyIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }







import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  IconButton,
  InputLabel,
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
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography
        sx={{
          fontFamily: "Bai Jamjuree",
          fontWeight: 600,
          fontSize: "20px",
        }}
        mb={1}
      >
        Receive Funds
      </Typography>
      <Box height={2} bgcolor="#1976d2" mb={3} />

      <Paper
        sx={{
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 3,
        }}
      >
        <QRCode value={walletAddress} size={100} />

        <Box flex={1} width="100%">
          <FormControl
            fullWidth
            size="small"
            sx={{ mb: 2, maxWidth: 250 }}
          >
            <InputLabel
              sx={{
                fontFamily: "Bai Jamjuree",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Select Network
            </InputLabel>
            <Select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              label="Select Network"
              sx={{
                fontFamily: "Bai Jamjuree",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <MenuItem
                value="BTC"
                sx={{ fontFamily: "Bai Jamjuree", fontWeight: 500, fontSize: "14px" }}
              >
                BTC
              </MenuItem>
              <MenuItem
                value="ETH"
                sx={{ fontFamily: "Bai Jamjuree", fontWeight: 500, fontSize: "14px" }}
              >
                ETH
              </MenuItem>
              <MenuItem
                value="USDT"
                sx={{ fontFamily: "Bai Jamjuree", fontWeight: 500, fontSize: "14px" }}
              >
                USDT
              </MenuItem>
            </Select>
          </FormControl>

          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              value={walletAddress}
              InputProps={{
                readOnly: true,
                style: {
                  fontFamily: "Bai Jamjuree",
                  fontWeight: 400,
                  fontSize: "20px",
                },
              }}
              sx={{
                width: "60%", 
                minWidth: 150,
                maxWidth: "100%",
              }}
            />
            <IconButton
              onClick={handleCopy}
              sx={{
                border: "1px solid #ccc",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}