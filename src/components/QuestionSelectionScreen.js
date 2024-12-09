import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import BackgroundImage from '../assets/Section/Background.webp'; 

function QuestionSelectionScreen({ quizData, selectQuestion }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px', // Optional max-width to control button layout
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          اختبار عن كائنات مهددة بالانقراض واشجار عمانية
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {quizData.map((_, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => selectQuestion(index)}
                sx={{
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '12px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center', // Center text horizontally
                  alignItems: 'center',      // Center text vertically
                  textAlign: 'center',        // Ensure text alignment in center
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {`${index + 1}`}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default QuestionSelectionScreen;
