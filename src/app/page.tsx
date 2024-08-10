// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import MyAppBar from '../components/AppBar';
import { Container, Typography, Box } from '@mui/material';
const Home: React.FC = () => {
  return (
    <div>
      <MyAppBar />
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '300px', md: '600px' } }}>
        <Image
          src="/food.png"
          alt="Banner food"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
    </div>
  );
};

export default Home;
