


import React from "react";
import { Box, Typography, Link } from "@mui/material";

const AddressHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
        borderBottom: "2px solid blue", 
        pb: 0.5,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Link href="#" underline="none" color="primary" fontSize="body2">
        Edit
      </Link>
    </Box>
  );
};

const AddressCard = ({ name, address, phone, email, mobile }) => {
  return (
    <Box
      sx={{
        border: "1px dashed #d32f2f",
        padding: 3,
        borderRadius: 1,
        width: 350,
        minHeight: 150,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {address}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {email}
      </Typography>
      <Typography variant="body2">{mobile}</Typography>
    </Box>
  );
};

const AddressSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 2,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <AddressHeader title="Billing Address" />
        <AddressCard
          name="Jasmine"
          address="4301 Peacock Springs Trl Orlando FL"
          phone="P: (123) 456-7890"
          email="Hellow@Gmail.Com"
          mobile="1234567890"
        />
      </Box>

      <Box>
        <AddressHeader title="Shipping Address" />
        <AddressCard
          name="Alexandra"
          address="John Smith, 123 Main Street, Anytown,"
          phone="P: (123) 456-7890"
          email="Hellow@Gmail.Com"
          mobile="9556653636"
        />
      </Box>
    </Box>
  );
};

export default AddressSection;