import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Start from "../assets/Intro/START.webp";
import "../App.css"; // Import global styles

function StartScreen({ startGame }) {
  return (
    <Box className="start-screen">

      <Typography variant="h2" className="game-title">
      كائنات محمية أشجار القرم
      </Typography>
      {/* Start Button */}
      <Button
        variant="startButton"
        className="start-button"
        onClick={startGame}
      >
        <img src={Start} alt="Start Button" />
      </Button>
    </Box>
  );
}

export default StartScreen;
