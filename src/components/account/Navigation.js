

import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info"; 
import ReceiptIcon from "@mui/icons-material/Receipt"; 

const iconStyles = {
  border: "none",
  p: 0,
  backgroundColor: "transparent",
  color: "blue"
};

const TrackOrderPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Track The Delivery Of Order #957684673
      </Typography>

      <Paper sx={{ p: 1, mt: 5, marginRight: 50, marginLeft: -49 }}>
        <Timeline position="right">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={iconStyles}>
                <HomeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Estimated Delivery Tomorrow
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tomorrow 24 November 2025
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={iconStyles}>
                <LocalShippingIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Products Ready For Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                24 November 2025 Between 15:00 - 17:00
              </Typography>
              <Button
                size="small"
                variant="outlined"
                sx={{ mt: 1 }}
                startIcon={<InfoIcon />}
              >
                View Order Details
              </Button>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={iconStyles}>
                <WarehouseIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Products In The Courier's Warehouse
              </Typography>
              <Typography variant="body2" color="text.secondary">
                23 November 2025 At 15:15
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={iconStyles}>
                <LocalMallIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Products Delivered To The Courier - DHL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                22 November 2025 At 12:27
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={iconStyles}>
                <PaymentIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Payment Accepted
              </Typography>
              <Typography variant="body2" color="text.secondary">
                19 November 2025 At 10:47
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={iconStyles}>
                <ShoppingCartIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Order Placed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                19 November 2025 At 10:45
              </Typography>
              <Button
                size="small"
                variant="outlined"
                sx={{ mt: 1 }}
                startIcon={<ReceiptIcon />}
              >
                View Invoice
              </Button>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>
    </Box>
  );
};

export default TrackOrderPage;