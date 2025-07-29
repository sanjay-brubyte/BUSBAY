import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Tabs,
  Tab,
  IconButton,
  TextField,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useParams } from 'react-router-dom';

const allProducts = [
  {
    id: 1,
    name: 'Galaxy A54 5G 128GB',
    description: `• Access Smart TV Apps Without Your PC Or Laptop<br />
• Unlock A Full PC Experience With Wireless DeX And See Movies On The Big Screen With Tap View<br />
• Work Seamlessly With Microsoft 365 Or Use Remote PC To Work On Your School Or Office PC`,
    images: ['/images/sam3.png', '/images/sam4.png', '/images/sam3.png', '/images/sam4.png'],
    price: 1150.99,
    rating: 5,
    stock: 40,
    colors: ['black', 'blue', 'red'],
    storageOptions: ['128GB', '256GB'],
    weight: '1 KG',
    tag: 'MOBILE',
    category: 'GALAXY A54, MOBILE',
    brand: 'SAMSUNG',
    sku: 'A54-128GB-SAM',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    description: 'Dynamic Island, 48MP camera, A17 Pro chip, titanium design.',
    images: ['/images/i1.png', '/images/i2.png', '/images/i3.png', '/images/i2.png'],
    price: 1399.00,
    rating: 5,
    stock: 25,
    colors: ['black', 'white', 'blue', 'gray'],
    storageOptions: ['256GB', '512GB', '1TB'],
    weight: '0.75 KG',
    tag: 'MOBILE',
    category: 'IPHONE, MOBILE',
    brand: 'APPLE',
    sku: 'IP15PM-256GB',
  },
  {
    id: 3,
    name: 'Redmi Note 13 Pro',
    description: 'AMOLED display, 200MP camera, Snapdragon 7s Gen2.',
    images: ['/images/rad1.png', '/images/rad2.png', '/images/rad3.png', '/images/rad1.png'],
    price: 449.99,
    rating: 4,
    stock: 100,
    colors: ['black', 'green', 'blue'],
    storageOptions: ['128GB', '256GB'],
    weight: '0.82 KG',
    tag: 'MOBILE',
    category: 'REDMI, MOBILE',
    brand: 'XIAOMI',
    sku: 'RN13PRO-128',
  },
  {
    id: 4,
    name: 'Dell Inspiron 15',
    description: '15.6" FHD, i5 13th Gen, 16GB RAM, 512GB SSD, Windows 11.',
    images: ['/images/Dell1.png', '/images/Dell2.png', '/images/Dell3.png', '/images/Dell1.png'],
    price: 899.99,
    rating: 4,
    stock: 30,
    colors: ['gray', 'black'],
    storageOptions: ['512GB SSD'],
    weight: '2.2 KG',
    tag: 'LAPTOP',
    category: 'DELL, LAPTOP',
    brand: 'DELL',
    sku: 'DELL-I5-512',
  },
  {
    id: 5,
    name: 'HP Victus Gaming Laptop',
    description: 'RTX 3050, Ryzen 5 5600H, 16GB, 512GB SSD, 144Hz display.',
    images: ['/images/HP7.png', '/images/HP6.png', '/images/HP5.png', '/images/HP6.png'],
    price: 1099.99,
    rating: 5,
    stock: 15,
    colors: ['black', 'silver'],
    storageOptions: ['512GB SSD'],
    weight: '2.5 KG',
    tag: 'LAPTOP',
    category: 'HP, GAMING',
    brand: 'HP',
    sku: 'HPV-5600H-RTX',
  },
  {
    id: 6,
    name: 'Apple Watch Series 9',
    description: 'S9 chip, Always-On Retina display, blood oxygen, ECG app.',
    images: ['/images/Apple Watch1.png', '/images/Apple Watch2.png', '/images/Apple Watch3.png', '/images/Apple1.png'],
    price: 499.00,
    rating: 4,
    stock: 60,
    colors: ['black', 'pink', 'red'],
    storageOptions: ['64GB'],
    weight: '0.25 KG',
    tag: 'WEARABLE',
    category: 'WATCH, APPLE',
    brand: 'APPLE',
    sku: 'AW9-64GB-BLK',
  },
  {
    id: 7,
    name: 'Samsung Galaxy Watch 6',
    description: 'Sleep coaching, ECG, body composition, fitness tracking.',
    images: ['/images/Samsung Galaxy Watch1.png', '/images/Samsung Galaxy Watch2.png', '/images/Samsung Galaxy Watch4.png', '/images/Samsung1.png'],
    price: 299.99,
    rating: 4,
    stock: 45,
    colors: ['black', 'gray', 'green'],
    storageOptions: ['16GB'],
    weight: '0.28 KG',
    tag: 'WEARABLE',
    category: 'WATCH, SAMSUNG',
    brand: 'SAMSUNG',
    sku: 'SGW6-16GB',
  },
  {
    id: 8,
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling with 8 microphones.',
    images: ['/images/Sony WH-1000XM5 Headphones1.png', '/images/Sony WH-1000XM5 Headphones2.png', '/images/Sony WH-1000XM5 Headphones3.png', '/images/Sony1.png'],
    price: 399.00,
    rating: 5,
    stock: 70,
    colors: ['black', 'silver'],
    storageOptions: ['N/A'],
    weight: '0.65 KG',
    tag: 'AUDIO',
    category: 'HEADPHONES, AUDIO',
    brand: 'SONY',
    sku: 'WH1000XM5-BLK',
  },
  {
    id: 9,
    name: 'Logitech G Pro Wireless Mouse',
    description: 'LIGHTSPEED wireless, HERO 25K sensor, ultra-lightweight.',
    images: ['/images/Logitech G Pro Wireless Mouse1.png', '/images/Logitech G Pro Wireless Mouse2.png', '/images/Logitech G Pro Wireless Mouse3.png', '/images/Logitech1.png'],
    price: 129.99,
    rating: 4,
    stock: 80,
    colors: ['black', 'white'],
    storageOptions: ['N/A'],
    weight: '0.10 KG',
    tag: 'ACCESSORY',
    category: 'MOUSE, GAMING',
    brand: 'LOGITECH',
    sku: 'GPRO-WIRELESS',
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product?.storageOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box border="1px solid #ccc" borderRadius={2} p={2}>
            <img
              src={selectedImage}
              alt="product"
              style={{ width: '100%', maxHeight: 400, objectFit: 'contain' }}
            />
          </Box>

          <Box mt={2} display="flex" gap={2}>
            {product.images.map((img, i) => (
              <Box
                key={i}
                border={img === selectedImage ? '2px solid red' : '1px solid #ccc'}
                borderRadius={1}
                p={1}
                onClick={() => setSelectedImage(img)}
                sx={{ cursor: 'pointer' }}
              >
                <img src={img} alt="thumb" width={60} height={60} />
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={600}>
            {product.name}
          </Typography>

          <Typography variant="body2" color="warning.main" mt={1}>
            ★★★★★ <span style={{ color: '#888' }}>(1 Review)</span>
          </Typography>

          <Typography mt={2} dangerouslySetInnerHTML={{ __html: product.description }} />

          <Typography variant="h5" fontWeight="bold" color="#007bff" mt={2}>
            ${product.price.toFixed(2)}
          </Typography>

          <Chip
            label={`${product.stock} In Stock`}
            sx={{ backgroundColor: '#d4f4dd', color: '#2e7d32', fontWeight: 600, mt: 1 }}
          />

          <Typography mt={3}>Color</Typography>
          <Box display="flex" gap={1} mt={1}>
            {product.colors.map((color) => (
              <Box
                key={color}
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1,
                  backgroundColor: color,
                  border: selectedColor === color ? '2px solid black' : '1px solid #ccc',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </Box>

          <Typography mt={3}>Storage</Typography>
          <Box display="flex" gap={1} mt={1}>
            {product.storageOptions.map((opt) => (
              <Button
                key={opt}
                variant={selectedStorage === opt ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setSelectedStorage(opt)}
              >
                {opt}
              </Button>
            ))}
          </Box>

          <Box
            mt={3}
            sx={{ 
              border: '1px solid #ddd', 
              borderRadius: 1, 
              p: 2, 
              marginInlineEnd: '318px' 
            }}
          >
            <Box display="flex" alignItems="center" mb={2} justifyContent="space-between">
              <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius={1} marginInlineEnd={10}>
                <Button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  sx={{ minWidth: 40 }}
                >
                  -
                </Button>
                <TextField
                  value={quantity}
                  size="small"
                  inputProps={{ style: { textAlign: 'center' }, readOnly: true }}
                  sx={{ width: 50 }}
                />
                <Button onClick={() => setQuantity((prev) => prev + 1)} sx={{ minWidth: 40 }}>
                  +
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'blue', color: '#fff', ml: 2 }}
              >
                Add To Cart
              </Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" gap={1}>
                <IconButton sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
                  <CompareArrowsIcon />
                </IconButton>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'green', color: '#fff', ml: 2 }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>

          <Box mt={3}>
            <Typography variant="body2">SKU: {product.sku}</Typography>
            <Typography variant="body2">Categories: {product.category}</Typography>
            <Typography variant="body2">Tag: {product.tag}</Typography>
            <Typography variant="body2">Brand: {product.brand}</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Tabs value={tabIndex} onChange={(e, newVal) => setTabIndex(newVal)}>
          <Tab label="Description" />
          <Tab label="Reviews (1)" />
        </Tabs>

        <Box mt={2}>
          {tabIndex === 0 && (
            <Box>
              <Typography>Weight: {product.weight}</Typography>
              <Typography>Dimensions: {product.dimensions || '10 × 11 × 22 CM'}</Typography>
              <Typography>Color: {product.colors.join(', ').toUpperCase()}</Typography>
              <Typography>Storage: {product.storageOptions.join(', ')}</Typography>
            </Box>
          )}

          {tabIndex === 1 && (
            <Box mt={2}>
              <Typography fontWeight="bold" mb={2}>
                1 Review For {product.name}
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" border="1px solid #eee" p={3} borderRadius={2}>
                    <Typography variant="h3" fontWeight="bold" color="primary">
                      5.0
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={1} mb={1}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Typography key={i} color="warning.main" fontSize={24}>
                          ★
                        </Typography>
                      ))}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Based On 1 Review
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                  {[
                    { label: '5 Star', value: 100 },
                    { label: '4 Star', value: 0 },
                    { label: '3 Star', value: 0 },
                    { label: '2 Star', value: 0 },
                  ].map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" mb={1}>
                      <Box width={60}>
                        <Typography>{item.label}</Typography>
                      </Box>
                      <Box flexGrow={1} mx={1} height={10} borderRadius={5} bgcolor="#e0e0e0">
                        <Box
                          width={`${item.value}%`}
                          height="100%"
                          bgcolor="#fdd835"
                          borderRadius={5}
                        />
                      </Box>
                      <Typography minWidth={35}>{item.value}%</Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;