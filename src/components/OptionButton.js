import React from "react";
import { Box, Button, Typography } from "@mui/material";

function OptionButton({ option, handleAnswer, optionLetter }) {
  // Define color styles for each option letter
  const optionStyles = {
    1: { backgroundColor: "#87B353", color: "#FFFFFF" },
    2: { backgroundColor: "#F58220", color: "#FFFFFF" },
    3: { backgroundColor: "#394E29", color: "#FFFFFF" },
    4: { backgroundColor: "#FAC090", color: "#FFFFFF" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Button
        onClick={() => handleAnswer(option)} // Trigger answer handler
        sx={{
          width: "70px",
          height: "70px",
          backgroundColor: optionStyles[optionLetter]?.backgroundColor,
          color: optionStyles[optionLetter]?.color,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign:"center",
          padding: 0,
          "&:hover": {
            backgroundColor: optionStyles[optionLetter]?.color,
            color: optionStyles[optionLetter]?.backgroundColor,
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {optionLetter}
        </Typography>
      </Button>
    </Box>
  );
}

export default OptionButton;
