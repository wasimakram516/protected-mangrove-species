import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, useTheme, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function FeedbackModal({ open, isCorrect, feedbackDetail, handleNextQuestion }) {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={handleNextQuestion} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          bgcolor: isCorrect ? theme.palette.primary.main : theme.palette.error.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {isCorrect ? "إجابة صحيحة، أحسنت!" : "إجابة خاطئة!"}
          <IconButton onClick={handleNextQuestion} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="body1" sx={{ padding: "20px" }}>
          {feedbackDetail}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleNextQuestion}
          variant="contained"
          autoFocus
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          متابعة
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FeedbackModal;
