import React, { useState } from "react";
import { Box, Typography, Grid, Button, useTheme } from "@mui/material";
import OptionButton from "./OptionButton";
import FeedbackModal from "./FeedbackModal";

function QuizScreen({ endGame, quizData, currentQuestionIndex, restartGame }) {
  const theme = useTheme();
  const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'
  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (option) => {
    if (option.isCorrect) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

  const handleCloseFeedback = () => {
    if (feedback === "correct") {
      endGame(); // End the game only if the answer was correct
    } else {
      setFeedback(null); // Close the modal and stay on the same question
    }
  };

  return (
    <Box
      className="quiz-screen"
      sx={{
        width: "100vw", // Full viewport width
        maxWidth: "100%", // Prevents exceeding the screen width
        overflowX: "hidden", // Prevents horizontal scrolling
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        paddingX: "20px", // Responsive padding for content
      }}
    >
      <Button
        onClick={restartGame}
        sx={{
          position: "fixed",
          top: "10px",
          right: "20px",
          fontSize: ["16px", "18px", "20px"],
          backgroundColor: theme.palette.secondary.main,
          color: "#FFFFFF",
          padding: "20px",
          borderRadius: "20px",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        إعادة التشغيل
      </Button>

      <Typography
        variant="h1"
        gutterBottom
        sx={{ marginTop: "80px", fontWeight: "bold" }}
      >
        {currentQuestionIndex + 1}
      </Typography>

      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        {currentQuestion.question}
      </Typography>

      <Box
        sx={{
          textAlign: "right",
          maxWidth: "500px",
          marginBottom: "24px",
          padding: "0 20px",
        }}
      >
        {currentQuestion.options.map((option, index) => (
          <Typography
            key={index}
            variant="body1"
            gutterBottom
            sx={{ marginBottom: "12px" }}
          >
            {index+1}. {option.text}
          </Typography>
        ))}
      </Box>

      <Box sx={{ maxWidth: "400px", marginBottom: "24px" }}>
        <img
          src={currentQuestion.image}
          alt="Interactive Quiz"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {currentQuestion.options.map((option, index) => (
          <Grid item sm={4} key={index}>
            <OptionButton
              option={option}
              handleAnswer={() => handleAnswer(option)}
              optionLetter={["1", "2", "3"][index]}
            />
          </Grid>
        ))}
      </Grid>

      {feedback && (
        <FeedbackModal
          open={feedback !== null}
          isCorrect={feedback === "correct"}
          feedbackDetail={
            feedback === "correct"
              ? currentQuestion.detail
              : "عذرًا، ليست الإجابة الصحيحة. حاول مرة أخرى"
          }
          handleNextQuestion={handleCloseFeedback}
        />
      )}
    </Box>
  );
}

export default QuizScreen;
