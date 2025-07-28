


import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const FlashSaleBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box sx={{ position: 'relative', backgroundColor: '#f5f5f5', py: { xs: 0, md: 6 } }}>
      <Box
        sx={{
          backgroundImage: 'url("/images/BACKGROUND.png")',
          backgroundSize: { xs: '250% auto', md: '150% auto' }, 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(-0.1)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 4 },
          mx: 'auto',
          height: { xs: 'auto', md: 220 },
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box sx={{ color: '#fff', flex: 1, minWidth: 250 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Big Savings Await!
          </Typography>
          <Typography variant="h6">
            <Box component="span" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
              Shop Now
            </Box>{' '}
            For Unbeatable Deals!
          </Typography>
        </Box>

        <Box
          component="img"
          src="/images/off.png"
          alt="Flash Sale"
          sx={{
            height: { xs: 90, md: 180 }, 
            width: { xs: '50%', md: '310px' },
            objectFit: 'contain',
            mt: { xs: 3, md: 0 },
            transition: '0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      </Box>

      {!isMobile && (
        <Box
          component="img"
          src="/images/default.png"
          alt="product"
          sx={{
            position: 'absolute',
            top: '58%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            height: 350,
            zIndex: 2,
            transition: '0.3s ease-in-out',
            '&:hover': {
              height: 240,
            },
          }}
        />
      )}
    </Box>
  );
};

export default FlashSaleBanner;