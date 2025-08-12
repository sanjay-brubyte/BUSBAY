import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const menuItems = [
  { label: "My Profile", path: "/account/profile" },
  { label: "My Order", path: "/account/order" },
  { label: "My Address", path: "/account/address" },
  { label: "My Wishlist", path: "/account/wishlist" },
  { label: "Change Password", path: "/account/password" },
];

export default function MyAccountLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedPath, setSelectedPath] = useState(location.pathname);

  useEffect(() => {
    setSelectedPath(location.pathname);
  }, [location]);

  const handleItemClick = (path) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" align="center" gutterBottom>
        My Account
      </Typography>

      <Grid container spacing={3}>
        <Grid
          item
          sx={{
            width: { xs: "100%", sm: "20%" },
          }}
        >
          <Paper
            sx={{
              height: "auto",
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItemButton
                  key={item.path}
                  onClick={() => handleItemClick(item.path)}
                  sx={{
                    backgroundColor:
                      selectedPath === item.path ? "blue" : "transparent",
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "white",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Right Content */}
        <Grid
          item
          sx={{
            width: { xs: "100%", sm: "70%" }, // Remaining width
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}