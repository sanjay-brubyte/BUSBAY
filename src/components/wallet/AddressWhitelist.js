
// import React, { useMemo, useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   MenuItem,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Button,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useNavigate } from 'react-router-dom';

// const sampleRows = [
//   { type: "Wallet",   name: "John",       address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
//   { type: "Exchange", name: "ABC Ltd PVC",address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
//   { type: "Other",    name: "ABC Ltd PVC",address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Blocked" },
//   { type: "Wallet",   name: "ABC Ltd PVC",address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Pending" },
//   { type: "Other",    name: "ABC Ltd PVC",address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
//   { type: "Wallet",   name: "Sam",        address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Blocked" },
//   { type: "Exchange", name: "Dex Corp",   address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
//   { type: "Other",    name: "Vault Inc",  address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Pending" },
//   { type: "Wallet",   name: "Eve",        address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
//   { type: "Other",    name: "Blue Box",   address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
//   { type: "Wallet",   name: "Ravi",       address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Blocked" },
//   { type: "Exchange", name: "Coin Hut",   address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
// ];

// const statusColor = (s) =>
//   s === "Active" ? "#2e7d32" : s === "Blocked" ? "#d32f2f" : "#757575";

// export default function AddressWhitelist() {
//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("Active");
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   const navigate = useNavigate();

//   const filtered = useMemo(() => {
//     return sampleRows.filter((r) => {
//       const byName = r.name.toLowerCase().includes(search.toLowerCase());
//       const byStatus = status ? r.status === status : true;
//       return byName && byStatus;
//     });
//   }, [search, status]);

//   const pageCount = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
//   const currentRows = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

//   const goPrev = () => setPage((p) => Math.max(1, p - 1));
//   const goNext = () => setPage((p) => Math.min(pageCount, p + 1));

//   React.useEffect(() => {
//     if (page > pageCount) setPage(pageCount);
//   }, [page, pageCount]);

//   return (
//     <Box p={3}>
//       <Typography variant="h6" fontWeight={700} mb={1}>
//         Address Whitelist
//       </Typography>
//       <Box height={2} bgcolor="#1976d2" mb={2} />

//       <Box display="flex" gap={2} alignItems="center" mb={2}>
//         <TextField
//           size="small"
//           placeholder="Search By Name"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           InputProps={{
//             startAdornment: <SearchIcon sx={{ mr: 1, color: "text.disabled" }} />,
//           }}
//           sx={{ maxWidth: 240 }}
//         />
//         <TextField
//           select
//           size="small"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           InputProps={{
//             startAdornment: <FilterListIcon sx={{ mr: 1, color: "text.disabled" }} />,
//           }}
//           sx={{ width: 160 }}
//         >
//           <MenuItem value="">Status</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Blocked">Blocked</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//         </TextField>

//         <Box flex={1} />
//         <Button
//           variant="contained"
//           sx={{ textTransform: "none", px: 3, backgroundColor: "#1976d2" }}
//           onClick={() => navigate('/wallet/addwallet')}
//         >
//           Add
//         </Button>
//       </Box>

//       <Paper sx={{ boxShadow: "none" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Sr. No.</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell align="center">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentRows.map((r, idx) => (
//               <TableRow key={`${r.address}-${idx}`}>
//                 <TableCell>{(page - 1) * rowsPerPage + idx + 1}</TableCell>
//                 <TableCell>{r.type}</TableCell>
//                 <TableCell>{r.name}</TableCell>
//                 <TableCell sx={{ maxWidth: 420, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
//                   {r.address}
//                 </TableCell>
//                 <TableCell sx={{ color: statusColor(r.status), fontWeight: 600 }}>
//                   {r.status}
//                 </TableCell>
//                 <TableCell align="center">
//                   <IconButton size="small" onClick={() => alert("View")}><VisibilityOutlinedIcon /></IconButton>
//                   <IconButton size="small" onClick={() => alert("Edit")}><EditOutlinedIcon /></IconButton>
//                   <IconButton size="small" onClick={() => alert("Delete")}><DeleteOutlineOutlinedIcon /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {currentRows.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={6} align="center" sx={{ py: 6, color: "text.secondary" }}>
//                   No results
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </Paper>

//       <Box display="flex" justifyContent="flex-end" gap={1.5} mt={2} alignItems="center">
//         <Button
//           variant="outlined"
//           startIcon={<ArrowBackIosNewIcon sx={{ fontSize: 16 }} />}
//           onClick={goPrev}
//           disabled={page === 1}
//           sx={{ textTransform: "none", borderRadius: 2, px: 2 }}
//         >
//           Prev
//         </Button>

//         {Array.from({ length: pageCount }).map((_, i) => {
//           const p = i + 1;
//           const active = p === page;
//           return (
//             <Button
//               key={p}
//               variant={active ? "contained" : "outlined"}
//               onClick={() => setPage(p)}
//               sx={{
//                 minWidth: 44,
//                 borderRadius: 2,
//                 ...(active
//                   ? { backgroundColor: "#1976d2", color: "#fff" }
//                   : { backgroundColor: "#fff" }),
//               }}
//             >
//               {p}
//             </Button>
//           );
//         })}

//         <Button
//           variant="outlined"
//           endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
//           onClick={goNext}
//           disabled={page === pageCount}
//           sx={{ textTransform: "none", borderRadius: 2, px: 2 }}
//         >
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// }



import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const sampleRows = [
  { type: "Wallet", name: "John", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
  { type: "Exchange", name: "ABC Ltd PVC", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
  { type: "Other", name: "ABC Ltd PVC", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Blocked" },
  { type: "Wallet", name: "ABC Ltd PVC", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Pending" },
  { type: "Other", name: "ABC Ltd PVC", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
  { type: "Wallet", name: "Sam", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Blocked" },
  { type: "Exchange", name: "Dex Corp", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
  { type: "Other", name: "Vault Inc", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Pending" },
  { type: "Wallet", name: "Eve", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
  { type: "Other", name: "Blue Box", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
  { type: "Wallet", name: "Ravi", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Blocked" },
  { type: "Exchange", name: "Coin Hut", address: "D2d84f14a2a20a2d6c0b6a8e6e7b1f9c5d", status: "Active" },
];

const statusColor = (s) =>
  s === "Active" ? "#2e7d32" : s === "Blocked" ? "#d32f2f" : "#757575";

export default function AddressWhitelist() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return sampleRows.filter((r) => {
      const byName = r.name.toLowerCase().includes(search.toLowerCase());
      const byStatus = status ? r.status === status : true;
      return byName && byStatus;
    });
  }, [search, status]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const currentRows = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(pageCount, p + 1));

  React.useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        flexWrap="wrap"
        gap={2}
        sx={{ borderBottom: "2px solid #1976d2", pb: 1 }}
      >
        <Typography
          sx={{
            fontFamily: "Bai Jamjuree",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          Address Whitelist
        </Typography>

        <Box display="flex" gap={2} alignItems="center" flexGrow={1} justifyContent="center">
          <TextField
            size="small"
            placeholder="Search By Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: "text.disabled" }} />,
              sx: {
                fontFamily: "Bai Jamjuree",
                fontWeight: 400,
                fontSize: "16px",
              },
            }}
            sx={{ maxWidth: 240 }}
          />

          <TextField
            select
            size="small"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            InputProps={{
              startAdornment: <FilterListIcon sx={{ mr: 1, color: "text.disabled" }} />,
              sx: {
                fontFamily: "Bai Jamjuree",
                fontWeight: 400,
                fontSize: "16px",
              },
            }}
            sx={{ width: 160 }}
          >
            <MenuItem value="">Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Blocked">Blocked</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </TextField>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            px: 3,
            backgroundColor: "#1976d2",
            fontFamily: "Bai Jamjuree",
            fontWeight: 400,
            fontSize: "16px",
          }}
          onClick={() => navigate("/wallet/addwallet")}
        >
          Add
        </Button>
      </Box>

      <Paper sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              {["Sr. No.", "Type", "Name", "Address", "Status", "Action"].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    fontFamily: "Bai Jamjuree",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((r, idx) => (
              <TableRow key={`${r.address}-${idx}`}>
                <TableCell>{(page - 1) * rowsPerPage + idx + 1}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell
                  sx={{
                    maxWidth: 420,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {r.address}
                </TableCell>
                <TableCell sx={{ color: statusColor(r.status), fontWeight: 600 }}>
                  {r.status}
                </TableCell>
                <TableCell align="center">
                  <IconButton size="small" onClick={() => alert("View")}>
                    <VisibilityOutlinedIcon />
                  </IconButton>
                  <IconButton size="small" onClick={() => alert("Edit")}>
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton size="small" onClick={() => alert("Delete")}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {currentRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 6, color: "text.secondary" }}>
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Box display="flex" justifyContent="flex-end" gap={1.5} mt={2} alignItems="center">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNewIcon sx={{ fontSize: 16 }} />}
          onClick={goPrev}
          disabled={page === 1}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 2,
            fontFamily: "Bai Jamjuree",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          Prev
        </Button>

        {Array.from({ length: pageCount }).map((_, i) => {
          const p = i + 1;
          const active = p === page;
          return (
            <Button
              key={p}
              variant={active ? "contained" : "outlined"}
              onClick={() => setPage(p)}
              sx={{
                minWidth: 44,
                borderRadius: 2,
                fontFamily: "Bai Jamjuree",
                fontWeight: 400,
                fontSize: "16px",
                ...(active
                  ? { backgroundColor: "#1976d2", color: "#fff" }
                  : { backgroundColor: "#fff" }),
              }}
            >
              {p}
            </Button>
          );
        })}

        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
          onClick={goNext}
          disabled={page === pageCount}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 2,
            fontFamily: "Bai Jamjuree",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}