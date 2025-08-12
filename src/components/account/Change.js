




// // // import React, { useState } from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   Grid,
// // //   Paper,
// // //   List,
// // //   ListItemButton,
// // //   ListItemText,
// // //   Divider,
// // //   TextField,
// // //   Button,
// // //   Link,
// // // } from "@mui/material";

// // // const menuItems = [
// // //   "My Profile",
// // //   "My Order",
// // //   "My Address",
// // //   "My Wishlist",
// // //   "Change Password",
// // // ];

// // // const initialAccount = {
// // //   firstName: "John",
// // //   lastName: "Sear",
// // //   phone: "0000000000",
// // //   zip: "02100",
// // //   country: "Uk",
// // //   state: "Uk",
// // //   city: "Baroda",
// // //   email: "Hellow@Gmail.Com",
// // // };

// // // export default function MyAccountPage() {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [account, setAccount] = useState(initialAccount);
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [editValues, setEditValues] = useState(initialAccount);

// // //   const handleEditClick = () => {
// // //     setEditValues(account);
// // //     setIsEditing(true);
// // //   };

// // //   const handleCancel = () => {
// // //     setIsEditing(false);
// // //   };

// // //   const handleSave = () => {
// // //     setAccount(editValues);
// // //     setIsEditing(false);
// // //   };

// // //   const handleChange = (field, value) => {
// // //     setEditValues((prev) => ({
// // //       ...prev,
// // //       [field]: value,
// // //     }));
// // //   };

// // //   const renderContent = () => {
// // //     if (activeIndex === 0) {
// // //       return (
// // //         <>
// // //           <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
// // //             <Typography variant="h6" fontWeight={700}>
// // //               Account Details
// // //             </Typography>
// // //             {!isEditing && (
// // //               <Link
// // //                 component="button"
// // //                 underline="hover"
// // //                 fontWeight={600}
// // //                 onClick={handleEditClick}
// // //               >
// // //                 Edit
// // //               </Link>
// // //             )}
// // //           </Box>
// // //           <Divider sx={{ mb: 3, borderColor: "rgba(0,0,0,0.1)" }} />

// // //           <Paper
// // //             elevation={1}
// // //             sx={{
// // //               borderRadius: 2,
// // //               p: 3,
// // //               border: "1px dotted rgba(180,120,120,0.2)",
// // //               bgcolor: "#fff",
// // //             }}
// // //           >
// // //             {isEditing ? (
// // //               <>
// // //                 {Object.entries(editValues).map(([key, value]) => (
// // //                   <Box key={key} mb={2}>
// // //                     <TextField
// // //                       fullWidth
// // //                       label={key.replace(/([A-Z])/g, " $1")}
// // //                       value={value}
// // //                       onChange={(e) => handleChange(key, e.target.value)}
// // //                     />
// // //                   </Box>
// // //                 ))}
// // //                 <Box display="flex" gap={2} mt={2}>
// // //                   <Button variant="contained" onClick={handleSave}>
// // //                     Save
// // //                   </Button>
// // //                   <Button variant="outlined" onClick={handleCancel}>
// // //                     Cancel
// // //                   </Button>
// // //                 </Box>
// // //               </>
// // //             ) : (
// // //               Object.entries(account).map(([key, value]) => (
// // //                 <Box
// // //                   key={key}
// // //                   display="flex"
// // //                   justifyContent="space-between"
// // //                   alignItems="center"
// // //                   mb={2}
// // //                 >
// // //                   <Typography color="text.secondary" minWidth="150px">
// // //                     {key.replace(/([A-Z])/g, " $1")} :
// // //                   </Typography>
// // //                   <Typography fontWeight={600}>{value}</Typography>
// // //                 </Box>
// // //               ))
// // //             )}
// // //           </Paper>
// // //         </>
// // //       );
// // //     } else {
// // //       return (
// // //         <Typography variant="body1" mt={2} color="text.secondary">
// // //           {menuItems[activeIndex]} content coming soon...
// // //         </Typography>
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", pt: 4, pb: 8 }}>
// // //       <Box sx={{ bgcolor: "#f3f3f4", py: 4 }}>
// // //         <Box maxWidth="1100px" mx="auto" px={2} textAlign="center">
// // //           <Typography variant="h4" fontWeight={700}>
// // //             MY ACCOUNT
// // //           </Typography>
// // //         </Box>
// // //       </Box>

// // //       <Box maxWidth="1100px" mx="auto" px={2} mt={4}>
// // //         <Grid container spacing={3} alignItems="flex-start">
// // //           <Grid
// // //             item
// // //             xs={12}
// // //             md
// // //             sx={{
// // //               flexBasis: "25%",
// // //               maxWidth: "25%",
// // //             }}
// // //           >
// // //             <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
// // //               <List disablePadding>
// // //                 {menuItems.map((item, index) => (
// // //                   <ListItemButton
// // //                     key={item}
// // //                     selected={index === activeIndex}
// // //                     onClick={() => setActiveIndex(index)}
// // //                     sx={{
// // //                       py: 2,
// // //                       px: 3,
// // //                       bgcolor: index === activeIndex ? "#0b5cff" : "white",
// // //                       color: index === activeIndex ? "white" : "black",
// // //                       "&:hover": { bgcolor: "#e0f7ff" },
// // //                       borderBottom: "1px solid rgba(0,0,0,0.05)",
// // //                     }}
// // //                   >
// // //                     <ListItemText
// // //                       primary={item}
// // //                       primaryTypographyProps={{
// // //                         fontSize: 15,
// // //                         fontWeight: index === activeIndex ? 600 : 400,
// // //                       }}
// // //                     />
// // //                   </ListItemButton>
// // //                 ))}
// // //               </List>
// // //             </Paper>
// // //           </Grid>

// // //           <Grid
// // //             item
// // //             xs={12}
// // //             md
// // //             sx={{
// // //               flexBasis: "69%",
// // //               maxWidth: "50%",
// // //             }}
// // //           >
// // //             {renderContent()}
// // //           </Grid>
// // //         </Grid>
// // //       </Box>
// // //     </Box>
// // //   );
// // // }





// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   List,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   TextField,
//   Button,
//   Link,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const menuItems = [
//   "My Profile",
//   "My Order",
//   "My Address",
//   "My Wishlist",
//   "Change Password",
// ];

// const initialAccount = {
//   firstName: "John",
//   lastName: "Sear",
//   phone: "0000000000",
//   zip: "02100",
//   country: "Uk",
//   state: "Uk",
//   city: "Baroda",
//   email: "Hellow@Gmail.Com",
// };

// export default function MyAccountPage() {
//   const navigate = useNavigate(); 
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [account, setAccount] = useState(initialAccount);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editValues, setEditValues] = useState(initialAccount);

//   const handleEditClick = () => {
//     setEditValues(account);
//     setIsEditing(true);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//   };

//   const handleSave = () => {
//     setAccount(editValues);
//     setIsEditing(false);
//   };

//   const handleChange = (field, value) => {
//     setEditValues((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleMenuItemClick = (item, index) => {
//     if (item === "My Order") {
//       navigate("/order");
//     } else {
//       setActiveIndex(index);
//     }
//   };

//   const renderContent = () => {
//     if (activeIndex === 0) {
//       return (
//         <>
//           <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//             <Typography variant="h6" fontWeight={700}>
//               Account Details
//             </Typography>
//             {!isEditing && (
//               <Link
//                 component="button"
//                 underline="hover"
//                 fontWeight={600}
//                 onClick={handleEditClick}
//               >
//                 Edit
//               </Link>
//             )}
//           </Box>
//           <Divider sx={{ mb: 3, borderColor: "rgba(0,0,0,0.1)" }} />

//           <Paper
//             elevation={1}
//             sx={{
//               borderRadius: 2,
//               p: 3,
//               border: "1px dotted rgba(180,120,120,0.2)",
//               bgcolor: "#fff",
//             }}
//           >
//             {isEditing ? (
//               <>
//                 {Object.entries(editValues).map(([key, value]) => (
//                   <Box key={key} mb={2}>
//                     <TextField
//                       fullWidth
//                       label={key.replace(/([A-Z])/g, " $1")}
//                       value={value}
//                       onChange={(e) => handleChange(key, e.target.value)}
//                     />
//                   </Box>
//                 ))}
//                 <Box display="flex" gap={2} mt={2}>
//                   <Button variant="contained" onClick={handleSave}>
//                     Save
//                   </Button>
//                   <Button variant="outlined" onClick={handleCancel}>
//                     Cancel
//                   </Button>
//                 </Box>
//               </>
//             ) : (
//               Object.entries(account).map(([key, value]) => (
//                 <Box
//                   key={key}
//                   display="flex"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   mb={2}
//                 >
//                   <Typography color="text.secondary" minWidth="150px">
//                     {key.replace(/([A-Z])/g, " $1")} :
//                   </Typography>
//                   <Typography fontWeight={600}>{value}</Typography>
//                 </Box>
//               ))
//             )}
//           </Paper>
//         </>
//       );
//     } else {
//       return (
//         <Typography variant="body1" mt={2} color="text.secondary">
//           {menuItems[activeIndex]} content coming soon...
//         </Typography>
//       );
//     }
//   };

//   return (
//     <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", pt: 4, pb: 8 }}>
//       <Box sx={{ bgcolor: "#f3f3f4", py: 4 }}>
//         <Box maxWidth="1100px" mx="auto" px={2} textAlign="center">
//           <Typography variant="h4" fontWeight={700}>
//             MY ACCOUNT
//           </Typography>
//         </Box>
//       </Box>

//       <Box maxWidth="1100px" mx="auto" px={2} mt={4}>
//         <Grid container spacing={3} alignItems="flex-start">
//           <Grid
//             item
//             xs={12}
//             md
//             sx={{
//               flexBasis: "25%",
//               maxWidth: "25%",
//             }}
//           >
//             <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
//               <List disablePadding>
//                 {menuItems.map((item, index) => (
//                   <ListItemButton
//                     key={item}
//                     selected={index === activeIndex}
//                     onClick={() => handleMenuItemClick(item, index)}
//                     sx={{
//                       py: 2,
//                       px: 3,
//                       bgcolor: index === activeIndex ? "#0b5cff" : "white",
//                       color: index === activeIndex ? "white" : "black",
//                       "&:hover": { bgcolor: "#e0f7ff" },
//                       borderBottom: "1px solid rgba(0,0,0,0.05)",
//                     }}
//                   >
//                     <ListItemText
//                       primary={item}
//                       primaryTypographyProps={{
//                         fontSize: 15,
//                         fontWeight: index === activeIndex ? 600 : 400,
//                       }}
//                     />
//                   </ListItemButton>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             md
//             sx={{
//               flexBasis: "69%",
//               maxWidth: "50%",
//             }}
//           >
//             {renderContent()}
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

import React from "react";
import { Typography } from "@mui/material";

export default function MyOrder() {
  return <Typography variant="h6">Your orders will appear.</Typography>;
}