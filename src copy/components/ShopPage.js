// import React, { useState } from 'react';
// import NavBar from '../components/NavBar';
// import {
//   Box, Grid, Typography, TextField, Button, Slider, Checkbox,
//   FormControlLabel, Card, CardContent, CardMedia, Rating, Pagination
// } from '@mui/material';

// const ShopPage = () => {
//   const [priceRange, setPriceRange] = useState([230, 240]);
//   const [page, setPage] = useState(3);

//   return (
//     <>
//       <NavBar />

//       <Box display="flex" px={2} py={4} gap={3}>
//         <Box width="250px" display="flex" flexDirection="column" gap={3}>
//           <Box>
//             <Typography variant="h6" gutterBottom>Filter By Price</Typography>
//             <Slider
//               value={priceRange}
//               onChange={(e, newValue) => setPriceRange(newValue)}
//               valueLabelDisplay="auto"
//               min={100}
//               max={500}
//             />
//             <Typography variant="body2">Price: ${priceRange[0]} - ${priceRange[1]}</Typography>
//             <Button variant="contained" fullWidth sx={{ mt: 1 }}>Filter</Button>
//           </Box>

//           <Box>
//             <TextField fullWidth placeholder="Search Products..." />
//             <Button variant="contained" fullWidth sx={{ mt: 1 }}>Search</Button>
//           </Box>

//           <Box>
//             <Typography variant="h6" gutterBottom>Product Categories</Typography>
//             {[
//               'Computer & Desktop',
//               'Smart Phones & Tablets',
//               'Home & Kitchen',
//               'TV & Audios',
//               'Top Deals',
//               'Top Selling Products',
//               'Top Featured Products',
//             ].map((cat, idx) => (
//               <FormControlLabel
//                 key={idx}
//                 control={<Checkbox />}
//                 label={cat}
//                 sx={{ display: 'block' }}
//               />
//             ))}
//           </Box>
//         </Box>

//         <Box flex={1}>
//           <Typography variant="body2" mb={2}>
//             Showing 1–20 of 67 Results
//           </Typography>
//           <Grid container spacing={2}>
//             {Array.from({ length: 20 }).map((_, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Card sx={{ height: '100%' }}>
//                   <CardMedia
//                     component="img"
//                     height="160"
//                     image='/images/smart1.png' alt="Fitness Tracker Watch"
//                   />
//                   <CardContent>
//                     <Typography variant="subtitle1" fontWeight="bold">
//                       Fitness Tracker Watch
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Lorem Ipsum Dolor Sit Amet Consectetur...
//                     </Typography>
//                     <Rating value={4} readOnly size="small" />
//                     <Typography variant="h6" color="primary">
//                       $99.99
//                     </Typography>
//                     <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
//                       Add To Cart
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           <Box display="flex" justifyContent="center" mt={4}>
//             <Pagination count={4} page={page} onChange={(e, val) => setPage(val)} />
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ShopPage;



import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Slider,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Pagination,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState([230, 240]);
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <>
      <NavBar />

      <Box
        px={{ xs: 1, sm: 2, md: 4 }}
        py={4}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={3}
      >
        <Box
          width={{ xs: '100%', md: '250px' }}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <Box>
            <Typography variant="h6" gutterBottom>Filter By Price</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={100}
              max={500}
            />
            <Typography variant="body2">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 1 }}>
              Filter
            </Button>
          </Box>

          <Box>
            <TextField fullWidth placeholder="Search Products..." />
            <Button variant="contained" fullWidth sx={{ mt: 1 }}>
              Search
            </Button>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Product Categories</Typography>
            {[
              'Computer & Desktop',
              'Smart Phones & Tablets',
              'Home & Kitchen',
              'TV & Audios',
              'Top Deals',
              'Top Selling Products',
              'Top Featured Products',
            ].map((cat, idx) => (
              <FormControlLabel
                key={idx}
                control={<Checkbox />}
                label={cat}
                sx={{ display: 'block' }}
              />
            ))}
          </Box>
        </Box>

        <Box flex={1}>
          <Typography variant="body2" mb={2}>
            Showing 1–20 of 67 Results
          </Typography>

          <Grid container spacing={2}>
            {Array.from({ length: 20 }).map((_, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image="/images/smart1.png"
                    alt="Fitness Tracker Watch"
                    sx={{ objectFit: 'contain' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      noWrap
                    >
                      Fitness Tracker Watch
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      noWrap
                    >
                      Lorem Ipsum Dolor Sit Amet Consectetur...
                    </Typography>
                    <Rating
                      value={4}
                      readOnly
                      size="small"
                      sx={{ mt: 1 }}
                    />
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ mt: 1 }}
                    >
                      $99.99
                    </Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ mt: 1 }}
                    >
                      Add To Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={4}
              page={page}
              onChange={(e, val) => setPage(val)}
              size={isSmallScreen ? 'small' : 'medium'}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShopPage;