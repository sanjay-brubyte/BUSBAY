

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Pagination,
//   Stack,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// const wishlistData = [
//   { id: 1, image: "/images/1.png", name: "Galaxy A54 5G 128G", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
//   { id: 2, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
//   { id: 3, image: "/images/1.png", name: "Galaxy A54 5G 128G", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
//   { id: 4, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
//   { id: 5, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
//   { id: 6, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
//   { id: 7, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
// ];

// export default function WishlistTable() {
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const startIndex = (page - 1) * rowsPerPage;
//   const endIndex = startIndex + rowsPerPage;
//   const currentData = wishlistData.slice(startIndex, endIndex);

//   return (
//     <Box p={2}>
//       <Typography variant="h6" sx={{ mb: 1, borderBottom: "2px solid #1976d2", pb: 1 }}>
//         Wishlist
//       </Typography>

//       <TableContainer component={Paper} variant="outlined">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><b>Order</b></TableCell>
//               <TableCell><b>Product Detail</b></TableCell>
//               <TableCell><b>Amount</b></TableCell>
//               <TableCell><b>Date</b></TableCell>
//               <TableCell><b>Add To Cart</b></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentData.map((item, index) => (
//               <TableRow key={item.id}>
//                 <TableCell>{startIndex + index + 1}</TableCell>
//                 <TableCell>
//                   <Box display="flex" alignItems="center" gap={2}>
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
//                     />
//                     <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
//                   </Box>
//                 </TableCell>
//                 <TableCell>{item.amount}</TableCell>
//                 <TableCell>{item.date}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="outlined"
//                     endIcon={<ShoppingCartIcon />}
//                     sx={{
//                       textTransform: "none",
//                       borderRadius: "8px",
//                     }}
//                   >
//                     Add To Cart
//                   </Button>
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
//         spacing={2}
//         sx={{ mt: 2 }}
//       >
//         <Pagination
//           count={Math.ceil(wishlistData.length / rowsPerPage)}
//           page={page}
//           onChange={handlePageChange}
//           color="primary"
//           shape="rounded"
//         />
//       </Stack>
//     </Box>
//   );
// }






import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const wishlistData = [
  { id: 1, image: "/images/1.png", name: "Galaxy A54 5G 128G", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
  { id: 2, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
  { id: 3, image: "/images/1.png", name: "Galaxy A54 5G 128G", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
  { id: 4, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
  { id: 5, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
  { id: 6, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
  { id: 7, image: "/images/1.png", name: "AirPods Max Bluetooth", amount: "$25.00 For 1 Item", date: "May 30, 2025" },
];

export default function WishlistTable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = wishlistData.slice(startIndex, endIndex);

  return (
    <Box p={2}>
      <Typography variant="h6" sx={{ mb: 1, borderBottom: "2px solid #1976d2", pb: 1 }}>
        Wishlist
      </Typography>

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Order</b></TableCell>
              <TableCell>
                <b style={{  display: 'inline-block' }}>Product Detail</b>
              </TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Add To Cart</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
                    />
                    <Box sx={{ borderBottom: '2px solid black', display: 'inline-block' }}>
                      <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    endIcon={<ShoppingCartIcon />}
                    sx={{
                      textTransform: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Add To Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Pagination
          count={Math.ceil(wishlistData.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
}