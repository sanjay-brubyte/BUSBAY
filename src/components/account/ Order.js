import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Pagination,
  Stack,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const orders = [
    { id: 1, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
    { id: 2, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
    { id: 3, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
    { id: 4, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
    { id: 5, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
    { id: 6, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
    { id: 7, orderId: "Xxx-Xxx-Xxx", date: "May 30, 2025", status: "Processing", amount: "$25.00 For 1 Item" },
  ];

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginatedOrders = orders.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleNavigateClick = () => {
    navigate("/account/navigation");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        mb={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" fontWeight="bold">
          Orders
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="flex-end">
          <TextField
            size="small"
            sx={{ width: { xs: "100%", sm: "200px" } }}
            placeholder="Search orders..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              )
            }}
          />
          <TextField type="date" size="small" />
          <TextField type="date" size="small" />
        </Stack>
      </Stack>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Order Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={handleNavigateClick}>
                    <NavigationIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default OrdersPage;