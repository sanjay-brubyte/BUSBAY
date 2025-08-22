// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import WarehouseIcon from "@mui/icons-material/Warehouse";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import PaymentIcon from "@mui/icons-material/Payment";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import VisibilityIcon from "@mui/icons-material/Visibility"; 
// import ReceiptIcon from "@mui/icons-material/Receipt"; 

// const steps = [
//   {
//     icon: <HomeIcon fontSize="medium" color="primary" />,
//     title: "Estimated Delivery Tomorrow",
//     date: "Tomorrow 24 November 2025",
//   },
//   {
//     icon: <LocalShippingIcon fontSize="medium" color="primary" />,
//     title: "Products Ready For Delivery",
//     date: "24 November 2025 Between 15:00 - 17:00",
//     button: "View Order Details",
//   },
//   {
//     icon: <WarehouseIcon fontSize="medium" color="primary" />,
//     title: "Products In The Courier's Warehouse",
//     date: "23 November 2025 At 15:15",
//   },
//   {
//     icon: <InventoryIcon fontSize="medium" color="primary" />,
//     title: "Products Delivered To The Courier - DHL",
//     date: "22 November 2025 At 12:27",
//   },
//   {
//     icon: <PaymentIcon fontSize="medium" color="primary" />,
//     title: "Payment Accepted",
//     date: "19 November 2025 At 10:47",
//   },
//   {
//     icon: <ShoppingCartIcon fontSize="medium" color="primary" />,
//     title: "Order Placed",
//     date: "19 November 2025 At 10:45",
//     button: "View Invoice",
//   },
// ];

// const getButtonIcon = (label) => {
//   if (label === "View Order Details") return <VisibilityIcon sx={{ fontSize: 18 }} />;
//   if (label === "View Invoice") return <ReceiptIcon sx={{ fontSize: 18 }} />;
//   return null;
// };

// const OrderTracking = () => {
//   return (
//     <Box sx={{ p: 3, maxWidth: 600 }}>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         Track The Delivery Of Order #957684673
//       </Typography>
//       {steps.map((step, index) => (
//         <Box
//           key={index}
//           sx={{ display: "flex", alignItems: "flex-start", position: "relative" }}
//         >
//           <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               {index !== 0 && (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: "-100%",
//                     height: "100%",
//                     borderLeft: "2px dotted #1976d2",
//                   }}
//                 />
//               )}
//               {step.icon}
//               {index !== steps.length - 1 && (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: "-100%",
//                     height: "100%",
//                     borderLeft: "2px dotted #1976d2",
//                   }}
//                 />
//               )}
//             </Box>
//           </Box>

//           <Box sx={{ ml: 2, pb: 3 }}>
//             <Typography variant="subtitle1" fontWeight="bold">
//               {step.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {step.date}
//             </Typography>
//             {step.button && (
//               <Button
//                 variant="outlined"
//                 size="small"
//                 sx={{ mt: 1, textTransform: "none" }}
//                 startIcon={getButtonIcon(step.button)}
//               >
//                 {step.button}
//               </Button>
//             )}
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default OrderTracking;



import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReceiptIcon from "@mui/icons-material/Receipt";

const steps = [
  {
    icon: <HomeIcon fontSize="medium" color="primary" />,
    title: "Estimated Delivery Tomorrow",
    date: "Tomorrow 24 November 2025",
  },
  {
    icon: <LocalShippingIcon fontSize="medium" color="primary" />,
    title: "Products Ready For Delivery",
    date: "24 November 2025 Between 15:00 - 17:00",
    button: "View Order Details",
  },
  {
    icon: <WarehouseIcon fontSize="medium" color="primary" />,
    title: "Products In The Courier's Warehouse",
    date: "23 November 2025 At 15:15",
  },
  {
    icon: <InventoryIcon fontSize="medium" color="primary" />,
    title: "Products Delivered To The Courier - DHL",
    date: "22 November 2025 At 12:27",
  },
  {
    icon: <PaymentIcon fontSize="medium" color="primary" />,
    title: "Payment Accepted",
    date: "19 November 2025 At 10:47",
  },
  {
    icon: <ShoppingCartIcon fontSize="medium" color="primary" />,
    title: "Order Placed",
    date: "19 November 2025 At 10:45",
    button: "View Invoice",
  },
];

const getButtonIcon = (label) => {
  if (label === "View Order Details") return <VisibilityIcon sx={{ fontSize: 18 }} />;
  if (label === "View Invoice") return <ReceiptIcon sx={{ fontSize: 18 }} />;
  return null;
};

const OrderTracking = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 600 }}>
      <Typography
        gutterBottom
        sx={{
          fontFamily: "Bai Jamjuree, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
        }}
      >
        Track The Delivery Of Order #957684673
      </Typography>

      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "flex-start", position: "relative" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {index !== 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "-100%",
                    height: "100%",
                    borderLeft: "2px dotted #1976d2",
                  }}
                />
              )}
              {step.icon}
              {index !== steps.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-100%",
                    height: "100%",
                    borderLeft: "2px dotted #1976d2",
                  }}
                />
              )}
            </Box>
          </Box>

          <Box sx={{ ml: 2, pb: 3 }}>
            <Typography
              sx={{
                fontFamily: "Bai Jamjuree, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              {step.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {step.date}
            </Typography>

            {step.button && (
              <Button
                variant="outlined"
                size="small"
                sx={{ mt: 1, textTransform: "none" }}
                startIcon={getButtonIcon(step.button)}
              >
                {step.button}
              </Button>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default OrderTracking;