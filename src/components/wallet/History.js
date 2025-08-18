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
  { id: 1, type: "Deposit", network: "Bitcoin", amount: "4 BTC", txHash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c", status: "Success", date: "May 30, 2025" },
  { id: 2, type: "Withdrawal", network: "Ethereum", amount: "1.02 ETH", txHash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c", status: "Processing", date: "May 30, 2025" },
  { id: 3, type: "Transfer", network: "Bitcoin", amount: "0.09 BTC", txHash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c", status: "Failed", date: "May 30, 2025" },
  { id: 4, type: "Withdrawal", network: "Ethereum", amount: "0.006 ETH", txHash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c", status: "Pending", date: "May 30, 2025" },
  { id: 5, type: "Transfer", network: "Bitcoin", amount: "10 BTC", txHash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c", status: "Processing", date: "May 30, 2025" },
  { id: 6, type: "Transfer", network: "Bitcoin", amount: "10 BTC", txHash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c", status: "Processing", date: "May 30, 2025" },

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
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filteredRows = rowsData.filter(
    (row) =>
      row.txHash.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? row.status === statusFilter : true)
  );

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box p={3}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        History
      </Typography>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search By Txhash"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 1 }}
        />
        <TextField
          select
          variant="outlined"
          size="small"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ width: 150 }}
        >
          <MenuItem value="">Status</MenuItem>
          <MenuItem value="Success">Success</MenuItem>
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Failed">Failed</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>
        <TextField
          type="date"
          size="small"
          sx={{ width: 180 }}
          InputLabelProps={{ shrink: true }}
        />
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
            {paginatedRows.map((row) => (
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
            ))}
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