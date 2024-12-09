# Ba9mtna Gheer Quiz

This project is an **interactive quiz** built with **React** and bootstrapped using [Create React App](https://github.com/facebook/create-react-app). It is designed to provide users with a dynamic multiple-choice quiz experience about animal and plant species, focusing on unique characteristics, habitats, and conservation status.

## Game Features

- **Multiple-Choice Quiz**: Users answer questions about different animal and plant species, with each question featuring a unique image to help identify and learn more about each species.
- **Interactive Feedback**: The app provides instant feedback for each answer, with a customized message and visual to indicate correctness.
- **Progress Tracking**: A dynamic scoring system tracks correct answers, helping users gauge their knowledge.
- **Responsive Design**: Built with Material UI, the app adjusts seamlessly across desktop and mobile screens for optimal accessibility.
- **Themed Background Images**: Each screen has themed background images, enhancing the quiz’s educational atmosphere.
- **Shuffled Answer Choices**: Answers are dynamically shuffled for a unique experience each time, helping reinforce learning and engagement.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wasimakram516/InteractiveQuiz.git
   cd InteractiveQuiz
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the game**:
   ```bash
   npm start
   ```

   This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to start the quiz.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. The page will automatically reload if you make edits.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode, allowing you to write and validate unit tests for the game’s components.

### `npm run build`

Builds the app for production to the `build` folder, optimizing it for the best performance and smallest file size.

### `npm run eject`

If you need to customize the configuration further, you can run `npm run eject`. **This action is irreversible**.

## Game Structure

- **Start Screen**: Welcomes users to the game, allowing them to start the quiz with a themed button.
- **Quiz Component**: Manages question display, evaluates answers for correctness, and provides feedback.
- **Feedback Modal**: Displays customized feedback, showing additional details about each animal or plant species for correct answers.
- **Assets and Images**: Each question has a unique image associated with it to aid visual identification, and feedback images provide further engagement.

## Customization

You can easily customize the questions, answers, and images by editing the `quizData` object in the `data` folder. To add new questions or change existing ones, follow this structure:

```javascript
import one from "../assets/QuestionAnswerSection/1.jpg";
const quizData = [
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "دب الباندا", isCorrect: true },
      { text: "الكوالا", isCorrect: false },
      { text: "الدب القطبي", isCorrect: false },
    ]),
    detail: "من بين جميع الحيوانات المهددة بالخطر، يعتبر دب الباندا من الأكثر شهرة. ويعاني هذا النوع من البقاء في الصين ويقدر أنه هناك حالياً حوالي 2000 عينة في البرية أو في الأسر. هم مهددون بسبب قلة التزاوج وتدمير غابات الخيزران.",
    image: one
  },
  // Add more questions here
];
```

You can update images by replacing the files in the `assets` folder and updating the import paths accordingly.

## Technologies Used

- **React**: For building a dynamic and interactive user interface.
- **Material UI**: For responsive design components and styling.
- **JavaScript (ES6+)**: Game logic and interactivity.
- **HTML5 & CSS3**: Basic layout and styling.
- **Webpack**: For efficient bundling and optimization of the app.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/). For additional details on Create React App, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
