# physics-and-astronomy-quiz

## Introduction
The purpose of this website is to serve as an interactive quiz on Physics and Astronomy. It is being developed as part of Code Institutes "Hackathon 1 - Front-end with HTML, CSS and JavaScript" project. 

## User Stories
### 1. Welcome Screen

**As a user, I want to view a welcome screen so that I understand the purpose of the quiz**

Acceptance Criteria:
-	The welcome screen is displayed when the website loads. 
-	The page includes the quiz title and a brief description. 
-	A Start Quiz button is clearly visible. 

Implementation Tasks:
-	Create the HTML structure for the welcome screen. 
-	Style the welcome screen using CSS. 

### 2. Quiz Category
**As a user, I want to select a quiz category (Physics, Astronomy, or Mixed) so that I can choose the topics I want to be tested on.**

**Acceptance Criteria**

- The user can choose one category before starting the quiz.
- The selected category determines which questions are displayed.
- Selecting **Mixed** displays questions from both Physics and Astronomy.

**Implementation Tasks**

- Create category selection buttons or a dropdown menu.
- Store the selected category in JavaScript.
- Filter the question list based on the selected category.

### 3. Start Button

**As a user, I want to start the quiz by clicking a Start button so that I can begin answering questions.**

**Acceptance Criteria**

- Clicking the **Start Quiz** button begins the quiz.
- The welcome screen is hidden.
- The first question is displayed.

**Implementation Tasks**

- Create a **Start Quiz** button.
- Add an event listener to detect button clicks.
- Initialise the quiz variables and display the first question.

### 4. Question Layout

**As a user, I want one multiple-choice question displayed at a time so that I can focus on answering it.**

**Acceptance Criteria**

- Only one question is displayed at any given time.
- Four answer options are displayed for each question.
- The displayed question updates correctly when moving through the quiz.

**Implementation Tasks**

- Store the questions in a JavaScript array or JSON object.
- Create a function to display the current question.
- Dynamically update the webpage using DOM manipulation.

### 5. Four-Question Layout

**As a user, I want to select one answer from four options so that I can submit my response.**

**Acceptance Criteria**

- Only one answer can be selected per question.
- The selected answer is visually highlighted.
- The selected answer is stored for scoring.

**Implementation Tasks**

- Create clickable answer buttons.
- Add CSS styling to indicate the selected answer.
- Store the user's selected answer in JavaScript.

### 6. Next Question Button

**As a user, I want to move to the next question after answering so that I can complete the quiz.**

**Acceptance Criteria**

- A **Next** button becomes available after an answer is selected.
- Clicking **Next** loads the following question.
- The quiz ends after the final question.

**Implementation Tasks**

- Create a **Next** button.
- Increase the current question index.
- Detect when the final question has been answered.

 ### 7.Current Score
 
 **As a user, I want to see my current score as I progress so that I can track my performance.**

**Acceptance Criteria**

- The current score is displayed throughout the quiz.
- The score increases when the user selects the correct answer.
- The displayed score updates immediately.

**Implementation Tasks**

- Create a score variable in JavaScript.
- Compare the selected answer with the correct answer.
- Update the score display after each question.

 ### 8.Correct or Incorrect
 
 **As a user, I want to receive feedback indicating whether my answer was correct or incorrect so that I can learn from my mistakes.**

**Acceptance Criteria**

- A message is displayed indicating whether the selected answer is correct or incorrect.
- Feedback is shown before moving to the next question.
- The correct answer is clearly identified when the user answers incorrectly.

**Implementation Tasks**

- Create a feedback section in the interface.
- Display different messages for correct and incorrect answers.
- Use CSS to style the feedback with appropriate colours or icons.

### 9.Randomness

**As a user, I want the questions and answer choices to appear in a random order so that each quiz attempt is different.**

**Acceptance Criteria**

- Questions are displayed in a different order each time the quiz starts.
- Answer choices are shuffled for every question.
- Questions are not repeated during a single quiz.

**Implementation Tasks**

- Implement a shuffle algorithm (e.g., Fisher-Yates).
- Randomise both the questions and answer options.
- Reset the question order when the quiz restarts.

### 10. Final Score

**As a user, I want to see my final score when the quiz ends so that I know how well I performed.**

**Acceptance Criteria**

- A results screen is displayed after the final question.
- The user's final score is shown.
- The total number of correct answers is displayed.

**Implementation Tasks**

- Create a results screen.
- Calculate the user's final score.
- Hide the quiz interface and display the results page.

### 11. Performance Level

**As a user, I want to know my performance level so that I understand my result.**

**Acceptance Criteria**

- A personalised message is displayed based on the final score.
- Different score ranges display different messages.
- The final score is shown alongside the result message.

**Tasks**

- Create score ranges.
- Display the appropriate result message.
- Style the results section.

### 12. Restart Button

**As a user, I want to restart the quiz after finishing so that I can try to improve my score. I should also be able to restart the quiz at anything throughout without using the refresh button**

**Acceptance Criteria**

- A **Restart Quiz** button is displayed on the results screen.
- Clicking the button resets the quiz.
- A new quiz begins with shuffled questions.

**Implementation Tasks**

- Create a **Restart Quiz** button.
- Reset the score and question index.
- Shuffle the questions and answers again.
- Display the first question.

### 13. Responsive Design

**As a user, I want the quiz to work on desktop, tablet, and mobile devices so that I can access it from any device.**

**Acceptance Criteria**

- The layout adapts correctly to different screen sizes.
- Buttons and controls remain easy to use on touch devices.
- Text remains readable without horizontal scrolling.
- Text remains readable without zooming.

**Implementation Tasks**

- Use semantic HTML5 elements to structure the page.
- Build a responsive layout using CSS Flexbox or Grid.
- Add media queries for different screen sizes.
- Test the website on desktop, tablet, and mobile devices.

**As a user, I want the website to work on mobile and desktop so that I can play on any device.**

**Acceptance Criteria**

- The layout adjusts for different screen sizes.
- Buttons remain easy to tap on smaller devices.
- Text remains readable without zooming.

**Tasks**

- Use responsive CSS layouts.
- Add media queries.
- Test the website on multiple screen sizes.