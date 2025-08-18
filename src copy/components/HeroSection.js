

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const heroSlides = [
    {
      title: 'LCD 4K',
      subtitle: 'Ultra Bright LCD',
      note: 'NEW ARRIVALS',
      background: '/images/1.png',
    },
    {
      title: 'Smart TV',
      subtitle: 'Ultra Bright LCD',
      note: 'ONLINE DEAL',
      background: '/images/2.png',
    },
    {
      title: 'Gaming Monitor',
      subtitle: 'Ultra Bright LCD',
      note: 'JUST LAUNCHED',
      background: '/images/3.png',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        px: 2,
        py: 4,
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          flex: '1 1 510px', 
          minHeight: 400, 
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                height: '100%',
                minHeight: 400,
                backgroundImage: `url(${slide.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 4,
                borderRadius: 2,
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ maxWidth: '60%', textAlign: 'left' }}>
                <Typography sx={{ fontSize: '48px', fontWeight: 'bold', color: '#ffd700' }}>
                  {slide.title}
                </Typography>
                <Typography sx={{ fontSize: '48px', fontWeight: 'bold', mt: 1 }}>
                  {slide.subtitle}
                </Typography>
                <Typography sx={{ fontSize: '32px', fontWeight: 500, mt: 1 }}>
                  {slide.note}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: '#fff',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: '20px',
                    width: 'fit-content',
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box sx={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          sx={{
            borderRadius: 2,
            backgroundImage:` url(/images/4.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            color: '#fff',
            p: 2,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 194,
            minHeight: 150,
            boxSizing: 'border-box',
          }}
        >
          <Box>
            <Typography fontSize={24} variant="subtitle1">
              Mobile
            </Typography>
            <Typography fontSize={24} fontWeight={400}>
              Nexus Mobile Pro 256GB
            </Typography>
            <Typography fontSize={12}>Limited Time: Online Only!</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundImage: `url(/images/5.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            color: '#fff',
            p: 2,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 190,
            minHeight: 150,
            boxSizing: 'border-box',
          }}
        >
          <Box>
            <Typography fontSize={24} variant="subtitle1">
              Mobile
            </Typography>
            <Typography fontSize={24} fontWeight={400}>
              Nexus Mobile Pro 256GB
            </Typography>
            <Typography fontSize={12}>Limited Time: Online Only!</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;