

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { styled } from "@mui/system";

const rowsData = [
  { id: 1, type: "Deposit", network: "Bitcoin", amount: "4 BTC", txHash: "A1B2C3D4E5F6", status: "Success", date: "May 30, 2025" },
  { id: 2, type: "Withdrawal", network: "Ethereum", amount: "1.02 ETH", txHash: "B2C3D4E5F6A1", status: "Processing", date: "June 1, 2025" },
  { id: 3, type: "Transfer", network: "Litecoin", amount: "20 LTC", txHash: "C3D4E5F6A1B2", status: "Failed", date: "June 2, 2025" },
  { id: 4, type: "Withdrawal", network: "Bitcoin", amount: "0.5 BTC", txHash: "D4E5F6A1B2C3", status: "Pending", date: "June 3, 2025" },
  { id: 5, type: "Deposit", network: "Ripple", amount: "3000 XRP", txHash: "E5F6A1B2C3D4", status: "Success", date: "June 4, 2025" },
  { id: 6, type: "Transfer", network: "Ethereum", amount: "2 ETH", txHash: "F6A1B2C3D4E5", status: "Processing", date: "June 5, 2025" },
  { id: 7, type: "Deposit", network: "Bitcoin Cash", amount: "5 BCH", txHash: "A7B8C9D0E1F2", status: "Success", date: "June 6, 2025" },
  { id: 8, type: "Withdrawal", network: "Litecoin", amount: "10 LTC", txHash: "B8C9D0E1F2A3", status: "Failed", date: "June 7, 2025" },
  { id: 9, type: "Transfer", network: "Ripple", amount: "1500 XRP", txHash: "C9D0E1F2A3B4", status: "Pending", date: "June 8, 2025" },
  { id: 10, type: "Deposit", network: "Ethereum", amount: "3 ETH", txHash: "D0E1F2A3B4C5", status: "Success", date: "June 9, 2025" },
];

const StatusText = styled("span")(({ status }) => ({
  color:
    status === "Success"
      ? "green"
      : status === "Processing"
      ? "orange"
      : status === "Failed"
      ? "red"
      : "gray",
  fontWeight: 500,
}));

export default function TransactionHistory() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Success"); 
  const [dateFilter, setDateFilter] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filteredRows = rowsData.filter((row) => {
    const matchesSearch = row.txHash.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter ? row.status === statusFilter : true;
    const matchesDate = dateFilter ? row.date === dateFilter : true;
    return matchesSearch && matchesStatus && matchesDate;
  });

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          History
        </Typography>
        <Box display="flex" gap={2} alignItems="center">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search By Txhash"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 200 }}
          />
          <TextField
            select
            variant="outlined"
            size="small"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1); 
            }}
            sx={{ width: 150 }}
            displayEmpty
          >
            <MenuItem value="">All Statuses</MenuItem>
            <MenuItem value="Success">Success</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </TextField>
          <TextField
            type="date"
            size="small"
            value={dateFilter}
            onChange={(e) => {
              setDateFilter(e.target.value);
              setPage(1); 
            }}
            sx={{ width: 180 }}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Network</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>TX Hash</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.length > 0 ? (
              paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.network}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.txHash}</TableCell>
                  <TableCell>
                    <StatusText status={row.status}>{row.status}</StatusText>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Pagination
          count={Math.ceil(filteredRows.length / rowsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
}