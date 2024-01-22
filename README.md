Code Quiz Challenge README
Welcome to the Code Quiz Challenge application! This application is designed to test your coding knowledge through a timed quiz with multiple-choice questions. Below you will find all the necessary information to get started, how to use the application, and details on its functionalities.

Getting Started
To get started with the Code Quiz Challenge, you'll need to clone this repository to your local machine, and then open the index.html file in your preferred web browser to launch the application.

Prerequisites
Make sure you have a modern web browser installed such as:

Google Chrome
Mozilla Firefox
Safari
Microsoft Edge
No additional software is required to run the quiz.

Features
Start Quiz: Clicking the start button begins the timer and displays the first question.
Quiz Questions:
Each question is presented along with multiple-choice answer buttons.
Upon clicking an answer, the application will automatically proceed to the next question.
If the selected answer is incorrect, a penalty is applied by subtracting time from the remaining timer.
Timer: The quiz timer counts down until it reaches zero or all questions have been answered.
Scoring: At the end of the quiz, the user's score is calculated based on the number of correct answers and the remaining time.
Save Score: The application allows users to save their initials along with their score to keep track of the high scores.
Usage
Start the Quiz: Press the 'Start' button on the main screen to begin.
Answer Questions: Click on the button that corresponds to your selected answer for each question - a different sound effect will play according to whether or not you’ve answered correctly.
Monitor the Timer: Keep an eye on the timer as incorrect answers will penalise you by reducing the time by 5 seconds.
End of Quiz: When all questions have been answered, or the timer reaches zero, the quiz will end and your score will be displayed.
Save Your Score: Enter your initials and submit to save your score to the high score list, you also have the ability to clear all high scores.
Customising Questions
If you're a developer, you can easily add or modify questions by editing the questions.js file within the js directory. Follow the existing format to maintain functionality:

Questions

{
  question: "What is the capital of France?",
  choices: ["New York", "London", "Paris", "Tokyo"],
  correctAnswer: "Paris"
},