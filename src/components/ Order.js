
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Pagination,
//   Stack,
//   InputAdornment
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import SettingsIcon from "@mui/icons-material/Settings";

// const OrdersPage = () => {
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 5;

//   const orders = [
//     { id: 1, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//     { id: 2, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//     { id: 3, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//     { id: 4, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//     { id: 5, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//     { id: 6, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//     { id: 7, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
//   ];

//   const totalPages = Math.ceil(orders.length / itemsPerPage);

//   const paginatedOrders = orders.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography variant="h6" fontWeight="bold" mb={2}>
//         Orders
//       </Typography>

//       <Stack
//         direction={{ xs: "column", sm: "row" }}
//         spacing={2}
//         mb={2}
//         alignItems={{ xs: "stretch", sm: "center" }}
//       >
//         <TextField
//           placeholder="Search..."
//           size="small"
//           sx={{ width: { xs: "100%", sm: "250px" } }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon fontSize="small" />
//               </InputAdornment>
//             )
//           }}
//         />
//         <TextField type="date" size="small" />
//         <TextField type="date" size="small" />
//       </Stack>

//       <TableContainer component={Paper}>
//         <Table size="small">
//           <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
//             <TableRow>
//               <TableCell>Order</TableCell>
//               <TableCell>Order Id</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedOrders.map((order) => (
//               <TableRow key={order.id}>
//                 <TableCell>{order.id}</TableCell>
//                 <TableCell>{order.orderId}</TableCell>
//                 <TableCell>{order.date}</TableCell>
//                 <TableCell>{order.status}</TableCell>
//                 <TableCell>{order.amount}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary">
//                     <VisibilityIcon />
//                   </IconButton>
//                   <IconButton color="secondary">
//                     <SettingsIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         mt={2}
//       >
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={(e, value) => setPage(value)}
//           shape="rounded"
//           color="primary"
//         />
//       </Stack>
//     </Box>
//   );
// };

// export default OrdersPage;




import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemText,
 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Use the same menuItems array or define separately
const menuItems = [
  { label: "My Profile", route: "/profile" },
  { label: "My Order", route: "/order" },
  { label: "My Address", route: "/address" },
  { label: "My Wishlist", route: "/wishlist" },
  { label: "Change Password", route: "/change-password" },
];

export default function Order() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1); // default to 'My Order' page

  const handleMenuItemClick = (item, index) => {
    if (item.route) {
      navigate(item.route);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", pt: 4, pb: 8 }}>
      <Box sx={{ bgcolor: "#f3f3f4", py: 4 }}>
        <Box maxWidth="1100px" mx="auto" px={2} textAlign="center">
          <Typography variant="h4" fontWeight={700}>
            MY ACCOUNT - ORDER PAGE
          </Typography>
        </Box>
      </Box>

      <Box maxWidth="1100px" mx="auto" px={2} mt={4}>
        <Grid container spacing={3} alignItems="flex-start">
          {/* Sidebar Menu */}
          <Grid
            item
            xs={12}
            md
            sx={{
              flexBasis: "25%",
              maxWidth: "25%",
            }}
          >
            <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
              <List disablePadding>
                {menuItems.map((item, index) => (
                  <ListItemButton
                    key={item.label}
                    selected={index === activeIndex}
                    onClick={() => handleMenuItemClick(item, index)}
                    sx={{
                      py: 2,
                      px: 3,
                      bgcolor: index === activeIndex ? "#0b5cff" : "white",
                      color: index === activeIndex ? "white" : "black",
                      "&:hover": { bgcolor: "#e0f7ff" },
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: index === activeIndex ? 600 : 400,
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Main Content Area */}
          <Grid
            item
            xs={12}
            md
            sx={{
              flexBasis: "69%",
              maxWidth: "50%",
            }}
          >
            {/* Replace this with your actual order content */}
            <Typography variant="h6" gutterBottom>
              Your Orders will appear here.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is the Order page. You can populate it with your order details.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}