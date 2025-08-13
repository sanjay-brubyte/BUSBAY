import React from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";

const AddressCard = ({ title, name, address, phone, email, mobile }) => {
  return (
    <Box sx={{ p: 7, border: "1px dashed #d32f2f", borderRadius: "4px", maxHeight: "70%" }}>
      <Typography variant="subtitle1" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {address}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {phone}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {mobile}
      </Typography>
    </Box>
  );
};

const AddressSection = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={8}> 
        <Grid item xs={14} md={14}> 
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Billing Address
              </Typography>
              <Button variant="text" size="big" sx={{ textTransform: "none" }}>
                Edit
              </Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <AddressCard
              name="Jasmine"
              address="4301 Peacock Springs Trl Orlando FL"
              phone="P: (123) 456-7890"
              email="Hellow@Gmail.Com"
              mobile="1234567890"
            />
          </Box>
        </Grid>

        <Grid item xs={10} md={10}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Shipping Address
              </Typography>
              <Button variant="text" size="big" sx={{ textTransform: "none" }}>
                Edit
              </Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <AddressCard
              name="Alexandra"
              address="John Smith, 123 Main Street, Anytown, "
              phone="P: (123) 456-7890"
              email="Hellow@Gmail.Com"
              mobile="9556653636"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressSection;
