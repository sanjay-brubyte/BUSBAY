

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const categories = ['All Product', 'Laptop', 'Hand Watch', 'Gamer'];

const products = [
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur. ',
    rating: 3,
    price: 99.99,
    image: '/images/lap1.png',
    hoverImage: '/images/lap2.png',
    category: 'Laptop',
  },
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    rating: 4,
    price: 99.99,
    image: '/images/phone1.png',
    hoverImage: '/images/phone2.png',
    category: 'Gamer',
  },
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur. ',
    rating: 3,
    price: 99.99,
    image: '/images/h1.png',
    hoverImage: '/images/h2.png',
    category: 'Gamer',
  },
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    rating: 5,
    price: 99.99,
    image: '/images/w11.png',
    hoverImage: '/images/w112.png',
    category: 'Hand Watch',
  },
];

const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All Product');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const filteredProducts =
    activeCategory === 'All Product'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <Box sx={{ p: 4, bgcolor: '#f9f9f9' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Popular Products
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: activeCategory === cat ? '#1976d2' : 'gray',
                fontWeight: activeCategory === cat ? 600 : 400,
                px: 1,
              }}
            >
              {activeCategory === cat && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#1976d2',
                    mr: 1,
                  }}
                />
              )}
              {cat}
            </Box>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Box
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                border:
                  hoveredIndex === idx ? '1px solid #1976d2' : '1px solid transparent',
                borderRadius: 3,
                transition: '0.3s',
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  p: 1,
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  bgcolor: '#fff',
                  height: '100%',
                }}
              >
                <Box
                  onMouseEnter={() => setHoveredImageIndex(idx)}
                  onMouseLeave={() => setHoveredImageIndex(null)}
                  sx={{
                    borderRadius: 2,
                    height: 150,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundColor: '#fff',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${
                        hoveredImageIndex === idx ? item.hoverImage : item.image
                      })`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
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
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: 14,
                      height: 36,
                      overflow: 'hidden',
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < item.rating ? (
                        <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                      ) : (
                        <StarBorderIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                      )
                    )}
                  </Box>

                  <Typography variant="h6" mt={1}>
                    ${item.price.toFixed(2)}
                  </Typography>

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

export default PopularProducts;