
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Box, Button, Paper } from "@mui/material";

const WalletLayout = () => {
  const menuItems = [
    { label: "Wallet", path: "" },
    { label: "Deposit", path: "deposit" },
    { label: "Withdrawal", path: "withdrawal" },
    { label: "Transfer", path: "transfer" },
    { label: "History", path: "history" },
    { label: "Address Whitelist", path: "address-whitelist" },
  ];

  return (
    <Box sx={{ display: "flex", mt: 4, px: 2 }}>
      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          width: 250,
          p: 2,
          bgcolor: "#fff",
          mr: 3,
          height: "fit-content",
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item.path}
            component={NavLink}
            to={item.path}
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: (navData) =>
                navData.isActive ? "#0066ff" : "#f5f5f5",
              color: (navData) => (navData.isActive ? "#fff" : "#000"),
              boxShadow: "none",
              "&:hover": {
                backgroundColor: (navData) =>
                  navData.isActive ? "#0052cc" : "#eaeaea",
                boxShadow: "none",
              },
              fontWeight: (navData) => (navData.isActive ? "500" : "400"),
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      <Paper
        elevation={1}
        sx={{
          flex: 1,
          p: 3,
          bgcolor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <Outlet />
      </Paper>
    </Box>
  );
};

export default WalletLayout;
