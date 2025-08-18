
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#000', pt: 5, borderTop: '1px solid #ddd' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3} sx={{ mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Box component="img" src="/images/border.png" alt="BaseBuy Logo" sx={{ height: 40 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                The Future Of Shopping
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              Follow Us:
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              {[FacebookIcon, InstagramIcon, CloseIcon, YouTubeIcon].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    width: 38,
                    height: 38,
                    border: '1px solid #007bff',
                    bgcolor: '#fff',
                    transition: '0.3s',
                    borderRadius: '4px',
                    '&:hover': {
                      bgcolor: '#007bff',
                      '& svg': { color: '#fff' },
                    },
                  }}
                >
                  <Icon sx={{ color: '#007bff', fontSize: 20 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2} sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Find It Fast
            </Typography>
            {[
              'Laptop & Computer',
              'Headphone & Speakers',
              'Smartphone & Tablet',
              'TV & Audio',
              'Home & Electronic',
            ].map((item) => (
              <Typography key={item} variant="body2" sx={{ color: '#555', mb: 1.2 }}>
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={6} sm={6} md={2} sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Quick Link
            </Typography>
            {['Home Page', 'About Us', 'Shop Now', 'Signup', 'Login'].map((item) => (
              <Typography key={item} variant="body2" sx={{ color: '#555', mb: 1.2 }}>
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={6} sm={6} md={2} sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Customer Care
            </Typography>
            {['My Account', 'Track Your Order', 'Products', 'Customer Service'].map((item) => (
              <Typography key={item} variant="body2" sx={{ color: '#555', mb: 1.2 }}>
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <IconButton
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: '#fff',
                  border: '1px solid #007bff',
                  mr: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#007bff',
                    '& svg': { color: '#fff' },
                  },
                }}
              >
                <RoomIcon sx={{ color: '#007bff', fontSize: 18 }} />
              </IconButton>
              <Typography variant="body2" sx={{ color: '#555' }}>
                C Scheme, Ashok Nagar, Jaipur, Rajasthan 302007
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <IconButton
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: '#fff',
                  border: '1px solid #007bff',
                  mr: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#007bff',
                    '& svg': { color: '#fff' },
                  },
                }}
              >
                <EmailIcon sx={{ color: '#007bff', fontSize: 18 }} />
              </IconButton>
              <Typography variant="body2" sx={{ color: '#555' }}>
                hello@basebuy.io
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconButton
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: '#fff',
                  border: '1px solid #007bff',
                  mr: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#007bff',
                    '& svg': { color: '#fff' },
                  },
                }}
              >
                <PhoneIcon sx={{ color: '#007bff', fontSize: 18 }} />
              </IconButton>
              <Typography variant="body2" sx={{ color: '#555' }}>
                000000000000
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
              Subscribe Our Newsletter
            </Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <TextField
                size="small"
                placeholder="Your Email Address"
                variant="outlined"
                sx={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  width: '150px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px 0 0 4px',
                    height: '40px',
                  },
                }}
                InputProps={{
                  sx: { height: '40px' },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  bgcolor: '#007bff',
                  textTransform: 'none',
                  fontWeight: 600,
                  height: '40px',
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center', py: 3, mt: 4, borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" sx={{ color: 'solid black' }}>
          Copyright © 2025 <strong>BASEBUY</strong> All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;