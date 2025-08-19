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
    changeColor: "success.main",
    icon: "₿",
    iconBg: "#f7931a",
    bgImage: "/images/coin1.png",
  },
  {
    name: "Ethereum",
    balance: "0.05 ETH",
    value: "$1,801.10",
    change: "3.20%",
    changeColor: "success.main",
    icon: "♦",
    iconBg: "#3c3c3d",
    bgImage: "/images/coin2.png",
  },
];

const transactions = [
  {
    order: 1,
    type: "Deposit",
    amount: "4 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Success",
    statusColor: "success.main",
    date: "May 30, 2025",
  },
  {
    order: 2,
    type: "Withdrawal",
    amount: "1.02 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Processing",
    statusColor: "warning.main",
    date: "May 30, 2025",
  },
  {
    order: 3,
    type: "Transfer",
    amount: "0.09 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Failed",
    statusColor: "error.main",
    date: "May 30, 2025",
  },
  {
    order: 4,
    type: "Withdrawal",
    amount: "0.006 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Pending",
    statusColor: "text.secondary",
    date: "May 30, 2025",
  },
  {
    order: 5,
    type: "Transfer",
    amount: "10 BTC",
    hash: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5c",
    status: "Processing",
    statusColor: "warning.main",
    date: "May 30, 2025",
  },
];

export default function WalletPage() {
  return (
    <Box p={3}>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        My Wallet
      </Typography>
      <Box height={2} bgcolor="primary.main" mb={3} />

      <Grid container spacing={2}>
        {walletData.map((wallet, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative" }}>
              <CardContent
                sx={{
                  position: "relative",
                  "&:last-child": { pb: 2, mr: 30, mt: 3, mb: 3 },
                }}
              >
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: wallet.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {wallet.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold">
                    {wallet.name}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  {wallet.balance}
                </Typography>

                <Typography color="text.secondary">{wallet.value}</Typography>

                <Typography sx={{ color: wallet.changeColor }}>
                  {wallet.change} ({wallet.name.slice(0, 3)})
                </Typography>

                <Box
                  component="img"
                  src={wallet.bgImage}
                  alt={wallet.name}
                  sx={{
                    width: 150, 
                    height: 150,
                    position: "absolute",
                    left: 283,
                    top:55,
                    opacity: 0.8, 
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        mt={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontWeight="bold">
          Recent Transactions
        </Typography>
        <Link href="#" underline="hover" sx={{ fontWeight: "bold" }}>
          View All
        </Link>
      </Box>
      <Box height={2} bgcolor="primary.main" mb={2} />

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "grey.100" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Order</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>TX Hash</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow
                key={tx.order}
                hover
                sx={{ "&:hover": { backgroundColor: "grey.50" } }}
              >
                <TableCell>{tx.order}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell
                  sx={{
                    maxWidth: 180,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {tx.hash}
                </TableCell>
                <TableCell sx={{ color: tx.statusColor, fontWeight: "bold" }}>
                  {tx.status}
                </TableCell>
                <TableCell>{tx.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}