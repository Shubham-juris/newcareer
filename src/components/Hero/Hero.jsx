import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import HeroImage1 from '../../assets/nw.png';
import HeroImage2 from '../../assets/nw2.png';
import HeroImage3 from '../../assets/nw3.png';

const images = [HeroImage1, HeroImage2, HeroImage3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'auto', md: '500px' },
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '2rem 0',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(133, 121, 121, 0.34)',
          backdropFilter: 'blur(1px)',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: '600px',
            textAlign: { xs: 'center', md: 'right' },
            margin: { xs: 'auto', md: '0 0 0 auto' },
            padding: { xs: '1rem', md: '0' },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
              textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            New Career College
          </Typography>
          <Typography
            variant='h5'
            sx={{
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
              textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            We are dedicated to providing the best education in the field of New
            Career.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
            }}
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'red',
                color: 'white',
                fontSize: '1rem',
                padding: '0.8rem 1.5rem',
                '&:hover': { backgroundColor: 'darkred' },
              }}
            >
              Enroll Now
            </Button>
            <Button
              variant='outlined'
              sx={{
                borderColor: 'white',
                color: 'white',
                fontSize: '1rem',
                padding: '0.8rem 1.5rem',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
