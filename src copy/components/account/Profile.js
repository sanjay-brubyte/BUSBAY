

import React, { useState } from "react";
import {
  Box,
  Typography,
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

  return (
    <Box sx={{ width: "100%", maxWidth: 450 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: "1rem" }}
        >
          Account Details
        </Typography>
        {!isEditing && (
          <Box>
            <Typography
              component="button"
              sx={{ color: "#1976d2", fontSize: "0.9rem", cursor: "pointer" }}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Typography>
          </Box>
        )}
      </Box>

      {!isEditing ? (
        <Box
          mt={1}
          p={2}
          sx={{
            border: "1px dashed #b71c1c", 
            borderRadius: "2px",
            backgroundColor: "#fff",
          }}
        >
          {Object.entries(formData).map(([label, value]) => (
            <Box
              key={label}
              display="flex"
              justifyContent="space-between"
              mb={1.2}
            >
              <Typography sx={{ fontSize: "0.85rem" }}>{label} :</Typography>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: label === "Email Address" ? "bold" : "normal",
                }}
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          mt={1}
          p={2}
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <Grid container spacing={1.5}>
            {Object.entries(formData).map(([label, value]) => (
              <Grid item xs={12} sm={6} key={label}>
                <TextField
                  fullWidth
                  size="small"
                  label={label}
                  value={value}
                  onChange={(e) => handleChange(label, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>

          <Box mt={2} display="flex" gap={1.5}>
            <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={handleSave}
            >
              Update
            </Button>
       
          </Box>
        </Box>
      )}
    </Box>
  );
}