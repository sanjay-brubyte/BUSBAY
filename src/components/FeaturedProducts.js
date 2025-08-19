
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const productData = [
  {
    image: '/images/phone1.png',
    hoverImage: '/images/phone2.png',
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Consectetur..',
    rating: 3,
    price: 99.99,
    category: 'Hand Watch',
  },
  {
    image: '/images/h1.png',
    hoverImage: '/images/h2.png',
    title: 'Gaming Headset',
    description: 'Lorem Ipsum Dolor Consectetur..',
    rating: 2,
    price: 79.99,
    category: 'Gamer',
  },
  {
    image: '/images/w11.png',
    hoverImage: '/images/w112.png',
    title: 'Laptop X Pro',
    description: 'Lorem Ipsum Dolor Consectetur..',
    rating: 4,
    price: 999.99,
    category: 'Laptop',
  },
];

const categories = ['All Product', 'Laptop', 'Hand Watch', 'Gamer'];

const FeaturedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Product');

  const filteredProducts =
    selectedCategory === 'All Product'
      ? productData
      : productData.filter((p) => p.category === selectedCategory);

  return (
    <Box sx={{ px: 3, py: 5, bgcolor: '#f4f4f4' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 4,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Featured Products
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Typography
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              sx={{
                cursor: 'pointer',
                fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                color: selectedCategory === cat ? '#1976d2' : '#333',
                borderBottom: selectedCategory === cat ? '2px solid #1976d2' : 'none',
                fontSize: 14,
              }}
            >
              ● {cat}
            </Typography>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              backgroundColor: '#1a2b49',
              color: '#fff',
              borderRadius: 2,
              p: 4,
              height: '65%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundImage: 'url("/images/product-banner2 1.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Box sx={{ mt: 'auto' }}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'right',
                  paddingLeft: '60px',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  marginBottom: 4,
                }}
              >
                Redmi 10
                <br />
                Prime
                <br />
                Phone
              </Typography>
              <Typography
                sx={{
                  my: 1,
                  fontWeight: 600,
                  textAlign: 'right',
                  paddingLeft: '160px',
                  marginBottom: 5,
                }}
              >
                From
                <br /> $159.00
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#007bff',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 1,
                  marginLeft: '180px',
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>

        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                border: hoveredIndex === index ? '1px solid #1976d2' : '1px solid transparent',
                borderRadius: 3,
                transition: '0.3s',
                p: 1,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  p: 2.5,
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  bgcolor: '#fff',
                  height: '80%',
                }}
              >
                <Box
                  onMouseEnter={() => setHoveredImageIndex(index)}
                  onMouseLeave={() => setHoveredImageIndex(null)}
                  sx={{
                    borderRadius: 2,
                    height: 150,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${
                        hoveredImageIndex === index ? product.hoverImage : product.image
                      })`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                  {hoveredIndex === index && (
                    <Box
                      sx={{
                        top: 5,
                        right: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        position: 'absolute',
                      }}
                    >
                      <Tooltip title="Add to Wishlist" arrow>
                        <IconButton
                          size="small"
                          sx={{ bgcolor: '#fff', color: '#000' }}
                        >
                          <FavoriteBorderIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Quick View" arrow>
                        <IconButton
                          size="small"
                          sx={{ bgcolor: '#fff', color: '#000' }}
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Compare" arrow>
                        <IconButton
                          size="small"
                          sx={{ bgcolor: '#fff', color: '#000' }}
                        >
                          <CompareArrowsIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ color: 'primary.main', mb: 1 }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 14, color: 'text.secondary', height: 36, overflow: 'hidden' }}
                  >
                    {product.description}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < product.rating ? (
                        <StarIcon key={i} sx={{ color: 'yellow', fontSize: 20 }} />
                      ) : (
                        <StarBorderIcon key={i} sx={{ color: 'yellow', fontSize: 20 }} />
                      )
                    )}
                  </Box>

                  <Typography variant="h6" mt={1}>
                    ${product.price.toFixed(2)}
                  </Typography>

                  <Button
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                    fullWidth
                    sx={{
                      mt: 2,
                      fontWeight: 500,
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        borderColor: 'primary.main',
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
    </Box>
  );
};

export default FeaturedProducts;