// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   Paper,
// } from "@mui/material";

// const AddWallet = () => {
//   const [walletType, setWalletType] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ walletType, name, address });
//     alert("Wallet Added Successfully!");
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h6" mb={2}>
//         Add Wallet
//       </Typography>

//       <Paper sx={{ p: 3, maxWidth: 500 }}>
//         <form onSubmit={handleSubmit}>
//           <Box display="flex" flexDirection="column" gap={2}>
//             <Select
//               value={walletType}
//               onChange={(e) => setWalletType(e.target.value)}
//               displayEmpty
//             >
//               <MenuItem value="">Select Wallet Type</MenuItem>
//               <MenuItem value="Wallet">Wallet</MenuItem>
//               <MenuItem value="Exchange">Exchange</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>

//             <TextField
//               label="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               fullWidth
//             />

//             <TextField
//               label="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               fullWidth
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ backgroundColor: "#0066FF", alignSelf: "flex-start" }}
//             >
//               Submit
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default AddWallet;


import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";

const AddWallet = () => {
  const [walletType, setWalletType] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ walletType, name, address });
    alert("Wallet Added Successfully!");
  };

  return (
    <Box p={3}>
      <Typography
        variant="h6"
        mb={2}
        sx={{
          fontFamily: "Bai Jamjuree",
          fontWeight: 600,
          fontSize: "20px",
        }}
      >
        Add Wallet
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 500, width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Select
              value={walletType}
              onChange={(e) => setWalletType(e.target.value)}
              displayEmpty
              fullWidth
              sx={{
                fontFamily: "Bai Jamjuree",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              <MenuItem value="">Select Wallet Type</MenuItem>
              <MenuItem value="Wallet">Wallet</MenuItem>
              <MenuItem value="Exchange">Exchange</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>

            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  fontFamily: "Bai Jamjuree",
                  fontWeight: 500,
                  fontSize: "18px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: "Bai Jamjuree",
                  fontWeight: 500,
                  fontSize: "18px",
                },
              }}
            />

            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  fontFamily: "Bai Jamjuree",
                  fontWeight: 500,
                  fontSize: "18px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: "Bai Jamjuree",
                  fontWeight: 500,
                  fontSize: "18px",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#0066FF",
                alignSelf: "flex-start",
                fontFamily: "Bai Jamjuree",
                fontWeight: 600,
                textTransform: "none",
                marginLeft:"415px",
                fontSize: "16px",
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddWallet;