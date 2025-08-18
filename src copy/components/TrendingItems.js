

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
  Stack,
  Link,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const products = [
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    image: '/images/lap1.png',
    hoverImage: '/images/lap2.png',
  },
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    image: '/images/phone1.png',
    hoverImage: '/images/phone2.png',
  },
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    image: '/images/h1.png',
    hoverImage: '/images/h2.png',
  },
  {
    title: 'Fitness Tracker Watch',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    image: '/images/w11.png',
    hoverImage: '/images/w112.png',
  },
];

const PopularProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
    <Box sx={{ p: 4, bgcolor: '#f9f9f9' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight={600}>
          Trending Items
        </Typography>
        <Link href="#" underline="none" fontSize={18}>
          Show All
        </Link>
      </Stack>

      <Grid container spacing={3}>
        {products.map((item, idx) => (
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
                    height: 250,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
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
                        <IconButton size="small" sx={{ bgcolor: '#fff', color: '#000000' }}>
                          <FavoriteBorderIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Quick View" arrow>
                        <IconButton size="small" sx={{ bgcolor: '#fff', color: '#000000' }}>
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Compare" arrow>
                        <IconButton size="small" sx={{ bgcolor: '#fff', color: '#000000' }}>
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
                      mb: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>

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
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularProducts;