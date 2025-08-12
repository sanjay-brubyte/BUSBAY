
import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  TextField,
  Button,
  Grid
} from "@mui/material";

const initialUserDetails = {
  "First Name": "John",
  "Last Name": "Sear",
  "Phone": "0000000000",
  "Zip Code": "02100",
  "Country": "Uk",
  "State": "Uk",
  "Town/City": "Baroda",
  "Email Address": "Hellow@Gmail.Com",
};

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialUserDetails);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated Profile:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(initialUserDetails);
    setIsEditing(false);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: "1.2rem" }}
        >
          Account Details
        </Typography>
        {!isEditing ? (
          <Link
            component="button"
            underline="hover"
            sx={{ color: "#1976d2", fontWeight: 500 }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Link>
        ) : (
          <Link
            component="button"
            underline="hover"
            sx={{ color: "red", fontWeight: 500 }}
            onClick={handleCancel}
          >
            Cancel
          </Link>
        )}
      </Box>

      {!isEditing ? (
        <Box
          mt={2}
          p={2}
          sx={{
            border: "1px dashed #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        >
          {Object.entries(formData).map(([label, value]) => (
            <Box
              key={label}
              display="flex"
              justifyContent="space-between"
              mb={1.5}
            >
              <Typography sx={{ fontWeight: 500 }}>{label} :</Typography>
              <Typography>{value}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          mt={2}
          p={2}
          sx={{
            border: "1px dashed #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        >
          <Grid container spacing={2}>
            {Object.entries(formData).map(([label, value]) => (
              <Grid item xs={12} sm={6} key={label}>
                <TextField
                  fullWidth
                  label={label}
                  value={value}
                  onChange={(e) => handleChange(label, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>

          <Box mt={2} display="flex" gap={2}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}