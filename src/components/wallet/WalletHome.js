import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Grid,
} from "@mui/material";

const walletData = [
  {
    name: "Bitcoin",
    balance: "0.05 BTC",
    value: "$1,801.10",
    change: "3.20%",
    changeColor: "green",
    icon: "₿",
  },
  {
    name: "Ethereum",
    balance: "0.05 ETH",
    value: "$1,801.10",
    change: "3.20%",
    changeColor: "green",
    icon: "♦",
  },
];

const transactions = [
  {
    order: 1,
    type: "Deposit",
    amount: "4 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Success",
    statusColor: "green",
    date: "May 30, 2025",
  },
  {
    order: 2,
    type: "Withdrawal",
    amount: "1.02 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Processing",
    statusColor: "orange",
    date: "May 30, 2025",
  },
  {
    order: 3,
    type: "Transfer",
    amount: "0.09 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Failed",
    statusColor: "red",
    date: "May 30, 2025",
  },
  {
    order: 4,
    type: "Withdrawal",
    amount: "0.006 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Pending",
    statusColor: "gray",
    date: "May 30, 2025",
  },
  {
    order: 5,
    type: "Transfer",
    amount: "10 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Processing",
    statusColor: "orange",
    date: "May 30, 2025",
  },
];

export default function WalletPage() {
  return (
    <Box p={3}>
      {/* My Wallet Heading */}
      <Typography variant="h6" fontWeight="bold" mb={1}>
        My Wallet
      </Typography>
      <Box height={2} bgcolor="#1976d2" mb={3} />

      {/* Wallet Cards */}
      <Grid container spacing={2}>
        {walletData.map((wallet, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {wallet.name}
                </Typography>
                <Typography color="primary" fontWeight="bold">
                  {wallet.balance}
                </Typography>
                <Typography color="text.secondary">
                  {wallet.value}
                </Typography>
                <Typography color={wallet.changeColor}>
                  {wallet.change} ({wallet.name.slice(0, 3)})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Transactions Heading */}
      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Recent Transactions
        </Typography>
        <Link href="#" underline="hover">
          View All
        </Link>
      </Box>
      <Box height={2} bgcolor="#1976d2" mb={2} />

      {/* Transactions Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>TX Hash</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.order}>
                <TableCell>{tx.order}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>{tx.hash}</TableCell>
                <TableCell sx={{ color: tx.statusColor }}>{tx.status}</TableCell>
                <TableCell>{tx.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}