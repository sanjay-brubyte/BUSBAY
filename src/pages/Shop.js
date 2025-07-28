
// import React, { useState } from 'react';
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Tooltip,
//   IconButton,
//   Slider,
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const allProducts = [
//   { id: 1, name: 'Smart Watch X200', description: 'Perfect for meetings and streaming.', image: '/images/m7.png', hoverImage: '/images/m1.png', price: 199.99, rating: 4, category: 'Smart Phones & Tablets' },
//   { id: 2, name: 'Gaming Headset G300', description: 'Perfect for meetings and streaming..', image: '/images/m4.png', hoverImage: '/images/m8.png', price: 89.99, rating: 5, category: 'Top Deals' },
//   { id: 3, name: '4K Action Camera', description: 'Perfect for meetings and streaming.', image: '/images/m9.png', hoverImage: '/images/m7.png', price: 249.99, rating: 4, category: 'Top Selling Products' },
//   { id: 4, name: 'Bluetooth Speaker', description: 'Perfect for meetings and streaming.', image: '/images/m4.png', hoverImage: '/images/m5.png', price: 59.99, rating: 4, category: 'TV & Audios' },
//   { id: 5, name: 'Redmi Note 12', description: 'Perfect for meetings and streaming.', image: '/images/m8.png', hoverImage: '/images/m6.png', price: 299.99, rating: 5, category: 'Smart Phones & Tablets' },
//   { id: 6, name: 'Laptop Stand', description: 'Perfect for meetings and streaming.', image: '/images/m6.png', hoverImage: '/images/m4.png', price: 39.99, rating: 3, category: 'Computer & Desktop' },
//   { id: 7, name: 'Noise Cancelling Earbuds', description: 'Perfect for meetings and streaming.', image: '/images/m7.png', hoverImage: '/images/m3.png', price: 129.99, rating: 4, category: 'Top Featured Products' },
//   { id: 8, name: 'HD Webcam', description: 'Perfect for meetings and streaming.', image: '/images/m8.png', hoverImage: '/images/m5.png', price: 69.99, rating: 4, category: 'Computer & Desktop' },
//   { id: 9, name: 'Fitness Tracker', description: 'Perfect for meetings and streaming.', image: '/images/m9.png', hoverImage: '/images/m4.png', price: 99.99, rating: 4, category: 'Top Featured Products' },
// ];

// const categories = {
//   computerAndDesktop: 'Computer & Desktop',
//   smartPhonesAndTablets: 'Smart Phones & Tablets',
//   homeAndKitchen: 'Home & Kitchen',
//   tvAndAudios: 'TV & Audios',
//   topDeals: 'Top Deals',
//   topSellingProducts: 'Top Selling Products',
//   topFeaturedProducts: 'Top Featured Products',
// };

// const PAGE_SIZE = 6;

// const ShopPage = () => {
//   const [priceRange, setPriceRange] = useState([50, 1000]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchBoxValue, setSearchBoxValue] = useState('');
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
//   const [filteredPriceRange, setFilteredPriceRange] = useState([50, 1000]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showCategories, setShowCategories] = useState(true);
//   const [categoryStates, setCategoryStates] = useState({
//     computerAndDesktop: false,
//     smartPhonesAndTablets: false,
//     homeAndKitchen: false,
//     tvAndAudios: false,
//     topDeals: false,
//     topSellingProducts: false,
//     topFeaturedProducts: false,
//   });

//   const toggleCategory = (categoryKey) => {
//     setCategoryStates(prev => ({
//       ...prev,
//       [categoryKey]: !prev[categoryKey],
//     }));
//   };

//   const handleFilterClick = () => {
//     setFilteredPriceRange(priceRange);
//     setCurrentPage(1);
//   };

//   const handleSearchClick = () => {
//     setSearchTerm(searchBoxValue);
//     setCurrentPage(1);
//   };

//   const filteredProducts = allProducts.filter((product) => {
//     const matchPrice = product.price >= filteredPriceRange[0] && product.price <= filteredPriceRange[1];
//     const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const categoryMatch = Object.entries(categoryStates).some(
//       ([key, value]) => value && product.category === categories[key]
//     );
//     const noCategorySelected = Object.values(categoryStates).every(v => v === false);
//     return matchPrice && matchSearch && (noCategorySelected || categoryMatch);
//   });

//   const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * PAGE_SIZE,
//     currentPage * PAGE_SIZE
//   );

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   return (
    
//     <Box display="flex" px={2} py={4}>
//       <Box width="250px" display="flex" marginLeft={4} flexDirection="column">
//         <Box p={2} border="1px solid #ddd">
//           <Typography variant="h6" gutterBottom>Filter By Price</Typography>
//           <Slider
//             value={priceRange}
//             onChange={(e, newValue) => setPriceRange(newValue)}
//             valueLabelDisplay="auto"
//             min={0}
//             max={1000}
//           />

// {

// <Box display="flex" alignItems="center" mt={2}>
//   <Button
//     variant="contained"
//     color="primary"
//     size="small"
//     onClick={handleFilterClick}
//   >
//     FILTER
//   </Button>
//   <Typography variant="body2" sx={{ ml: '20px' }}>
//     Price: ${filteredPriceRange[0]} - ${filteredPriceRange[1]}
//   </Typography>
// </Box>}
          
//         </Box>

//         <Box p={2} border="1px solid #ddd" borderTop="none">
//           <Typography variant="h6" gutterBottom>Search Products</Typography>
//           <Box display="flex">
//             <input
//               style={{
//                 flexGrow: 1,
//                 padding: '8px',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px 0 0 4px',
//                 outline: 'none',
//                 width: '100%',
//               }}
//               placeholder="Search..."
//               value={searchBoxValue}
//               onChange={(e) => setSearchBoxValue(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               onClick={handleSearchClick}
//               sx={{ borderRadius: '0 4px 4px 0' }}
//             >
//               Search
//             </Button>
//           </Box>
//         </Box>

//         <Box p={2} border="1px solid #ddd" borderTop="none">
//           <Box display="flex" alignItems="center" justifyContent="space-between">
//             <Typography variant="h6">Categories</Typography>
//             <IconButton size="small" onClick={() => setShowCategories(!showCategories)}>
//               {showCategories ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
//             </IconButton>
//           </Box>

//           {showCategories && (
//             <Box mt={1}>
//               {Object.entries(categories).map(([key, label]) => (
//                 <Box display="flex" alignItems="center" justifyContent="space-between" key={key} mb={1}>
//                   <Box display="flex" alignItems="center" gap={1} flexGrow={1}>
//                     <input
//                       type="checkbox"
//                       checked={categoryStates[key]}
//                       onChange={() => toggleCategory(key)}
//                     />
//                     <Typography
//                       variant="body2"
//                       onClick={() => toggleCategory(key)}
//                       sx={{ cursor: 'pointer' }}
//                     >
//                       {label}
//                     </Typography>
//                   </Box>
//                   <IconButton size="small" onClick={() => toggleCategory(key)}>
//                     {categoryStates[key] ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
//                   </IconButton>
//                 </Box>
//               ))}
//             </Box>
//           )}
//         </Box>
//       </Box>

//       <Box flex={1} pl={3}>
//         <Typography mb={2}>Showing {filteredProducts.length} products</Typography>
//         <Grid container spacing={2}>
//           {paginatedProducts.map((product, idx) => (
//             <Grid item xs={12} sm={6} md={4} key={product.id}>
//               <Box
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 sx={{
//                   border: hoveredIndex === idx ? '1px solid #1976d2' : '1px solid transparent',
//                   transition: '0.3s',
//                   borderRadius: 3,
//                   position: 'relative',
//                 }}
//               >
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     p: 3,
//                     textAlign: 'center',
//                     boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                     bgcolor: '#fff',
//                     height: '100%',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       borderRadius: 2,
//                       height: 150,
//                       mb: 2,
//                       position: 'relative',
//                       overflow: 'hidden',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}
//                     onMouseEnter={() => setHoveredImageIndex(idx)}
//                     onMouseLeave={() => setHoveredImageIndex(null)}
//                   >
//                     <Box
//                       sx={{
//                         width: '100%',
//                         height: '100%',
//                         backgroundImage: `url(${hoveredImageIndex === idx ? product.hoverImage : product.image})`,
//                         backgroundSize: 'contain',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundPosition: 'center',
//                         transition: 'background-image 0.3s',
//                       }}
//                     />
//                     {hoveredIndex === idx && (
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           top: 5,
//                           right: 5,
//                           display: 'flex',
//                           flexDirection: 'column',
//                           gap: 1,
//                           backgroundColor: 'rgba(255,255,255,0.8)',
//                           padding: 0.5,
//                           borderRadius: 1,
//                         }}
//                       >
//                         <Tooltip title="Add to Wishlist" arrow>
//                           <IconButton size="small"><FavoriteBorderIcon fontSize="small" /></IconButton>
//                         </Tooltip>
//                         <Tooltip title="Quick View" arrow>
//                           <IconButton size="small"><VisibilityIcon fontSize="small" /></IconButton>
//                         </Tooltip>
//                         <Tooltip title="Compare" arrow>
//                           <IconButton size="small"><CompareArrowsIcon fontSize="small" /></IconButton>
//                         </Tooltip>
//                       </Box>
//                     )}
//                   </Box>

//                   <CardContent sx={{ p: 0 }}>
//                     <Typography variant="subtitle1" fontWeight={600} sx={{ color: 'primary.main', mb: 1 }}>
//                       {product.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14, height: 36, overflow: 'hidden' }}>
//                       {product.description}
//                     </Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
//                       {Array.from({ length: 5 }).map((_, i) =>
//                         i < product.rating ? (
//                           <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
//                         ) : (
//                           <StarBorderIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
//                         )
//                       )}
//                     </Box>
//                     <Typography variant="h6" mt={1}>${product.price.toFixed(2)}</Typography>
//                     <Button
//                       variant="outlined"
//                       fullWidth
//                       startIcon={<ShoppingCartIcon />}
//                       sx={{
//                         mt: 2,
//                         fontWeight: 500,
//                         fontSize: '14px',
//                         color: 'primary.main',
//                         borderColor: 'primary.main',
//                         '&:hover': {
//                           backgroundColor: 'primary.main',
//                           color: '#fff',
//                         },
//                       }}
//                     >
//                       Add To Cart
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>

//         {totalPages > 1 && (
//           <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={1}  marginLeft={63}>
//             <Button variant="outlined" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//               Prev
//             </Button>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <Button
//                 key={index + 1}
//                 variant={currentPage === index + 1 ? 'contained' : 'outlined'}
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//             <Button variant="outlined" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//               Next
//             </Button>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ShopPage;



import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Tooltip,
  IconButton,
  Slider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Galaxy A54 5G 128GB', description: 'Perfect for meetings and streaming.', image: '/images/product1.png', hoverImage: '/images/product4.png', price: 199.99, rating: 4, category: 'Smart Phones & Tablets' },
  { id: 2, name: 'iPhone 15 Pro Max', description: 'Perfect for meetings and streaming..', image: '/images/i1.png', hoverImage: '/images/i2.png', price: 89.99, rating: 5, category: 'Top Deals' },
  { id: 3, name: 'Redmi Note 13 Pro', description: 'Perfect for meetings and streaming.', image: '/images/rad1.png', hoverImage: '/images/rad2.png', price: 249.99, rating: 4, category: 'Top Selling Products' },
  { id: 4, name: 'Dell Inspiron 15', description: 'Perfect for meetings and streaming.', image: '/images/Dell1.png', hoverImage: '/images/Dell2.png', price: 59.99, rating: 4, category: 'TV & Audios' },
  { id: 5, name: 'HP Victus Gaming Laptop', description: 'Perfect for meetings and streaming.', image: '/images/HP7.png', hoverImage: '/images/HP6.png', price: 299.99, rating: 5, category: 'Smart Phones & Tablets' },
  { id: 6, name: 'Apple Watch Series 9', description: 'Perfect for meetings and streaming.', image: '/images/Apple1.png', hoverImage: '/images/Apple2.png', price: 239.99, rating: 3, category: 'Computer & Desktop' },
  { id: 7, name: 'Samsung Galaxy Watch 6', description: 'Perfect for meetings and streaming.', image: '/images/Samsung1.png', hoverImage: '/images/Samsung2.png', price: 129.99, rating: 4, category: 'Top Featured Products' },
  { id: 8, name: 'Sony WH-1000XM5 Headphones', description: 'Perfect for meetings and streaming.', image: '/images/Sony1.png', hoverImage: '/images/Sony2.png', price: 69.99, rating: 4, category: 'Computer & Desktop' },
  { id: 9, name: 'Logitech G Pro Wireless Mouse', description: 'Perfect for meetings and streaming.', image: '/images/Logitech1.png', hoverImage: '/images/Logitech2.png', price: 99.99, rating: 4, category: 'Top Featured Products' },
];

const categories = {
  computerAndDesktop: 'Computer & Desktop',
  smartPhonesAndTablets: 'Smart Phones & Tablets',
  homeAndKitchen: 'Home & Kitchen',
  tvAndAudios: 'TV & Audios',
  topDeals: 'Top Deals',
  topSellingProducts: 'Top Selling Products',
  topFeaturedProducts: 'Top Featured Products',
};

const PAGE_SIZE = 6;

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState([50, 1000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [filteredPriceRange, setFilteredPriceRange] = useState([50, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(true);
  const [categoryStates, setCategoryStates] = useState({
    computerAndDesktop: false,
    smartPhonesAndTablets: false,
    homeAndKitchen: false,
    tvAndAudios: false,
    topDeals: false,
    topSellingProducts: false,
    topFeaturedProducts: false,
  });

  const toggleCategory = (categoryKey) => {
    setCategoryStates(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  const handleFilterClick = () => {
    setFilteredPriceRange(priceRange);
    setCurrentPage(1);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchBoxValue);
    setCurrentPage(1);
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchPrice = product.price >= filteredPriceRange[0] && product.price <= filteredPriceRange[1];
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = Object.entries(categoryStates).some(
      ([key, value]) => value && product.category === categories[key]
    );
    const noCategorySelected = Object.values(categoryStates).every(v => v === false);
    return matchPrice && matchSearch && (noCategorySelected || categoryMatch);
  });

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <Box display="flex" px={2} py={4}>
      <Box width="250px" display="flex" marginLeft={4} flexDirection="column">
        <Box p={2} border="1px solid #ddd">
          <Typography variant="h6" gutterBottom>Filter By Price</Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Button variant="contained" color="primary" size="small" onClick={handleFilterClick}>
              FILTER
            </Button>
            <Typography variant="body2" sx={{ ml: '20px' }}>
              Price: ${filteredPriceRange[0]} - ${filteredPriceRange[1]}
            </Typography>
          </Box>
        </Box>

        <Box p={2} border="1px solid #ddd" borderTop="none">
          <Typography variant="h6" gutterBottom>Search Products</Typography>
          <Box display="flex">
            <input
              style={{
                flexGrow: 1,
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px 0 0 4px',
                outline: 'none',
                width: '100%',
              }}
              placeholder="Search..."
              value={searchBoxValue}
              onChange={(e) => setSearchBoxValue(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleSearchClick}
              sx={{ borderRadius: '0 4px 4px 0' }}
            >
              Search
            </Button>
          </Box>
        </Box>

        <Box p={2} border="1px solid #ddd" borderTop="none">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">Categories</Typography>
            <IconButton size="small" onClick={() => setShowCategories(!showCategories)}>
              {showCategories ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
            </IconButton>
          </Box>

          {showCategories && (
            <Box mt={1}>
              {Object.entries(categories).map(([key, label]) => (
                <Box display="flex" alignItems="center" justifyContent="space-between" key={key} mb={1}>
                  <Box display="flex" alignItems="center" gap={1} flexGrow={1}>
                    <input
                      type="checkbox"
                      checked={categoryStates[key]}
                      onChange={() => toggleCategory(key)}
                    />
                    <Typography
                      variant="body2"
                      onClick={() => toggleCategory(key)}
                      sx={{ cursor: 'pointer' }}
                    >
                      {label}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={() => toggleCategory(key)}>
                    {categoryStates[key] ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      <Box flex={1} pl={3}>
        <Typography mb={2}>Showing {filteredProducts.length} products</Typography>
        <Grid container spacing={2}>
          {paginatedProducts.map((product, idx) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  border: hoveredIndex === idx ? '1px solid #1976d2' : '1px solid transparent',
                  transition: '0.3s',
                  borderRadius: 3,
                  position: 'relative',
                }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    bgcolor: '#fff',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 2,
                      height: 150,
                      mb: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onMouseEnter={() => setHoveredImageIndex(idx)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${hoveredImageIndex === idx ? product.hoverImage : product.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transition: 'background-image 0.3s',
                      }}
                    />
                    {hoveredIndex === idx && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          padding: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        <Tooltip title="Add to Wishlist" arrow>
                          <IconButton size="small"><FavoriteBorderIcon fontSize="small" /></IconButton>
                        </Tooltip>
                        <Tooltip title="Quick View" arrow>
                          <IconButton size="small"><VisibilityIcon fontSize="small" /></IconButton>
                        </Tooltip>
                        <Tooltip title="Compare" arrow>
                          <IconButton size="small"><CompareArrowsIcon fontSize="small" /></IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ p: 0 }}>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ color: 'primary.main', mb: 1, '&:hover': { textDecoration: 'underline' } }}
                      >
                        {product.name}
                      </Typography>
                    </Link>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14, height: 36, overflow: 'hidden' }}>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < product.rating ? (
                          <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                        ) : (
                          <StarBorderIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                        )
                      )}
                    </Box>
                    <Typography variant="h6" mt={1}>${product.price.toFixed(2)}</Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<ShoppingCartIcon />}
                      sx={{
                        mt: 2,
                        fontWeight: 500,
                        fontSize: '14px',
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: '#fff',
                        },
                      }}
                    >
                      Add To Cart
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={1} marginLeft={63}>
            <Button variant="outlined" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </Button>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                variant={currentPage === index + 1 ? 'contained' : 'outlined'}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button variant="outlined" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ShopPage;