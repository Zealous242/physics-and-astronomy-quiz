# physics-and-astronomy-quiz

## Introduction
The purpose of this website is to serve as an interactive quiz on Physics and Astronomy. It is being developed as part of Code Institutes "Hackathon 1 - Front-end with HTML, CSS and JavaScript" project. 

## Link To Site

https://zealous242.github.io/physics-and-astronomy-quiz/

## User Stories
### 1. Welcome Screen (Must Have)

**As a user, I want to view a welcome screen so that I understand the purpose of the quiz**

Acceptance Criteria:
-	The welcome screen is displayed when the website loads. 
-	The page includes the quiz title and a brief description. 
-	A Start Quiz button is clearly visible. 

Implementation Tasks:
-	Create the HTML structure for the welcome screen. 
-	Style the welcome screen using CSS. 

### 2. Quiz Category (Could Have)
**As a user, I want to select a quiz category (Physics, Astronomy, or Mixed) so that I can choose the topics I want to be tested on.**

**Acceptance Criteria**

- The user can choose one category before starting the quiz.
- The selected category determines which questions are displayed.
- Selecting **Mixed** displays questions from both Physics and Astronomy.

**Implementation Tasks**

- Create category selection buttons or a dropdown menu.
- Store the selected category in JavaScript.
- Filter the question list based on the selected category.

### 3. Start Button (Must Have)

**As a user, I want to start the quiz by clicking a Start button so that I can begin answering questions.**

**Acceptance Criteria**

- Clicking the **Start Quiz** button begins the quiz.
- The welcome screen is hidden.
- The first question is displayed.

**Implementation Tasks**

- Create a **Start Quiz** button.
- Add an event listener to detect button clicks.
- Initialise the quiz variables and display the first question.

### 4. Question Layout (Must Have)

**As a user, I want one multiple-choice question displayed at a time so that I can focus on answering it.**

**Acceptance Criteria**

- Only one question is displayed at any given time.
- Four answer options are displayed for each question.
- The displayed question updates correctly when moving through the quiz.

**Implementation Tasks**

- Store the questions in a JavaScript array or JSON object.
- Create a function to display the current question.
- Dynamically update the webpage using DOM manipulation.

### 5. Four-Response Layout (Must Have)

**As a user, I want to select one answer from four options so that I can submit my response.**

**Acceptance Criteria**

- Only one answer can be selected per question.
- The selected answer is visually highlighted.
- The selected answer is stored for scoring.

**Implementation Tasks**

- Create clickable answer buttons.
- Add CSS styling to indicate the selected answer.
- Store the user's selected answer in JavaScript.

### 6. Next Question Button (Must Have)

**As a user, I want to move to the next question after answering so that I can complete the quiz.**

**Acceptance Criteria**

- A **Next** button becomes available after an answer is selected.
- Clicking **Next** loads the following question.
- The quiz ends after the final question.

**Implementation Tasks**

- Create a **Next** button.
- Increase the current question index.
- Detect when the final question has been answered.

 ### 7.Current Score (Should Have)
 
 **As a user, I want to see my current score as I progress so that I can track my performance.**

**Acceptance Criteria**

- The current score is displayed throughout the quiz.
- The score increases when the user selects the correct answer.
- The displayed score updates immediately.

**Implementation Tasks**

- Create a score variable in JavaScript.
- Compare the selected answer with the correct answer.
- Update the score display after each question.

 ### 8.Correct or Incorrect (Must Have)
 
 **As a user, I want to receive feedback indicating whether my answer was correct or incorrect so that I can learn from my mistakes.**

**Acceptance Criteria**

- A message is displayed indicating whether the selected answer is correct or incorrect.
- Feedback is shown before moving to the next question.
- The correct answer is clearly identified when the user answers incorrectly.

**Implementation Tasks**

- Create a feedback section in the interface.
- Display different messages for correct and incorrect answers.
- Use CSS to style the feedback with appropriate colours or icons.

### 9.Randomness (Could Have)

**As a user, I want the questions and answer choices to appear in a random order so that each quiz attempt is different.**

**Acceptance Criteria**

- Questions are displayed in a different order each time the quiz starts.
- Answer choices are shuffled for every question.
- Questions are not repeated during a single quiz.

**Implementation Tasks**

- Implement a shuffle algorithm (e.g., Fisher-Yates).
- Randomise both the questions and answer options.
- Reset the question order when the quiz restarts.

### 10. Final Score (Must Have)

**As a user, I want to see my final score when the quiz ends so that I know how well I performed.**

**Acceptance Criteria**

- A results screen is displayed after the final question.
- The user's final score is shown.
- The total number of correct answers is displayed.

**Implementation Tasks**

- Create a results screen.
- Calculate the user's final score.
- Hide the quiz interface and display the results page.

### 11. Performance Level (Could Have)

**As a user, I want to know my performance level so that I understand my result.**

**Acceptance Criteria**

- A personalised message is displayed based on the final score.
- Different score ranges display different messages.
- The final score is shown alongside the result message.

**Tasks**

- Create score ranges.
- Display the appropriate result message.
- Style the results section.

### 12. Restart Button (Could Have)

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

### 13. Responsive Design (Must Have)

**As a user, I want the quiz to work on desktop, tablet, and mobile devices so that I can access it from any device.**

**Acceptance Criteria**

- The layout adapts correctly to different screen sizes.
- Buttons and controls remain easy to use on touch devices.
- Text remains readable without horizontal scrolling.
- Text remains readable without zooming.

**Implementation Tasks**

- Use semantic HTML5 elements to structure the page.
- Build a responsive layout using CSS, Flexbox or Grid.
- Add media queries for different screen sizes.
- Test the website on desktop, tablet, and mobile devices.

## Strategy Plane

### Website Objectives

The website aims to:

- Provide an engaging and interactive learning experience.
- Help users test and improve their knowledge of Physics and Astronomy.
- Reinforce learning through immediate feedback and scoring.
- Encourage repeated use by randomising questions and answer choices.
- Demonstrate front-end web development skills using HTML5, CSS3, and JavaScript.
- Provide a responsive website that works effectively across desktop, tablet, and mobile devices.

### Success Criteria

The project will be considered successful if:

- Users can complete the quiz without encountering usability issues.
- Users receive accurate scoring and immediate answer feedback.
- The website functions correctly across modern browsers and devices.
- The interface is intuitive and easy to navigate.
- Questions are displayed correctly and randomised between quiz attempts.
- Users can restart the quiz and receive a new set of questions.
- The website demonstrates effective use of HTML5, CSS3, and JavaScript.

### Target Audience

The target audience for this website includes students, educators, and science enthusiasts who want an engaging way to test and expand their knowledge of physics and astronomy. The quiz is designed to be interactive, educational, and accessible across a range of devices, making it suitable for both learning and self-assessment

### Primary Audience

Secondary school students (ages 14–18) studying Physics or Astronomy.
College and university students enrolled in science, physics, or astronomy courses.
Individuals preparing for science examinations or quizzes.

### Secondary Audience

Teachers and tutors looking for an interactive classroom revision tool.
Science enthusiasts and hobbyists with an interest in physics, astronomy, and space exploration.
Lifelong learners who enjoy expanding their scientific knowledge through quizzes.

### User Characteristics

The intended users are likely to:

- Have a basic to intermediate understanding of Physics and Astronomy.
- Want a fun and engaging way to reinforce their knowledge.
- Prefer an interactive learning experience with immediate feedback.
- Access the quiz from desktop computers, tablets, or smartphones.
- Appreciate a clean, responsive, and easy-to-navigate interface.

### Purpose for the Target Audience

The website aims to:

Reinforce learning through interactive multiple-choice questions.
Help users assess their understanding of Physics and Astronomy concepts.
Encourage continued learning through immediate feedback and scoring.
Provide an enjoyable educational experience that can be used independently or as a revision aid.

This target audience is broad enough for an educational project while clearly identifying the users who would benefit most from the application.

### User Needs

**Functional Needs**

Be able to start the quiz quickly with minimal setup.
Choose a quiz category (Physics, Astronomy, or Mixed).
Answer multiple-choice questions one at a time.
Receive immediate feedback on whether an answer is correct or incorrect.
View their current score throughout the quiz.
See a final score at the end of the quiz.
Restart the quiz to attempt a higher score.
Experience a different quiz each time through randomised questions and answer choices.

**Usability Needs**

Navigate the website easily with clear buttons and instructions.
Read questions and answers using a clean, uncluttered layout.
Access the quiz on desktop, tablet, and mobile devices.
Receive clear visual feedback when selecting answers or interacting with buttons.
Complete the quiz without unnecessary complexity or distractions.

**Accessibility Needs**

Use high-contrast colours and readable fonts.
Ensure buttons are large enough to be easily selected on touch devices.
Support keyboard navigation where possible.
Present content in a logical and accessible structure using semantic HTML.

**Educational Needs**

Test knowledge across a range of Physics and Astronomy topics.
Learn from mistakes through immediate feedback.
Reinforce understanding of scientific concepts in an engaging way.
Encourage repeated practice to improve knowledge and confidence.

**Performance Needs**

Load quickly and respond smoothly to user interactions.
Update questions and scores without noticeable delays.
Work reliably across modern web browsers.

## Scope Plane

### Functional Requirements

The website shall allow users to:

**Quiz Setup**

- View a welcome screen introducing the quiz.
- Select a quiz category (Physics, Astronomy, or Mixed).
- Start the quiz using a Start Quiz button.

**Quiz Functionality**

- Display one multiple-choice question at a time.
- Display four answer options for each question.
- Allow users to select one answer per question.
- Move to the next question after answering.
- Display the current question number.
- Display the user's current score during the quiz.
- Provide immediate feedback indicating whether the selected answer is correct or incorrect.
- Randomise the order of questions and answer choices for each quiz attempt.

**Results**

- Display the user's final score when the quiz is completed.
- Display the total number of correct answers.
- Allow users to restart the quiz and begin a new attempt.

**Responsive Design**

- Adapt the layout for desktop, tablet, and mobile devices.
- Ensure buttons and controls are easy to interact with on touchscreens. 

### Content Requirements

The website shall include:

**Educational Content**

Physics multiple-choice questions covering topics such as:
- Mechanics
- Forces and Motion
- Energy
- Electricity
- Waves

Astronomy multiple-choice questions covering topics such as:
- The Solar System
- Stars
- Galaxies
- Black Holes
- Space Exploration

**Interface Content**

- Website title and welcome message.
- Quiz instructions.
- Category selection controls.
- Question text.
- Four answer options for each question.
- Feedback messages (Correct/Incorrect).
- Current score display.
- Question number indicator.
- Final results screen.
- Restart Quiz button. 

### Non-Functional Requirements

The website should:

**Performance**

- Load within a few seconds on a typical internet connection.
- Respond immediately to user interactions.
- Run efficiently in modern web browsers.

**Usability**

- Provide an intuitive and consistent interface.
- Use clear navigation and readable typography.
- Minimise the number of steps required to complete the quiz.

**Accessibility**

- Use semantic HTML5 elements.
- Ensure sufficient colour contrast.
- Support keyboard navigation.
- Include descriptive labels for interactive elements.

**Compatibility**

- Function correctly on current versions of Chrome, Edge, Firefox, and Safari.
- Display correctly on desktop, tablet, and mobile screen sizes.

**Maintainability**

- Separate HTML, CSS, and JavaScript into individual files.
- Organise quiz questions using structured JavaScript objects or JSON.
- Use meaningful variable names and comments to improve code readability.

### Features Included (MVP) 

The initial version of the website will include:

- Welcome screen
- Physics, Astronomy, and Mixed categories
- Multiple-choice questions
- Four answer options per question
- Randomised questions and answers
- Score tracking
- Correct/incorrect feedback
- Final results screen
- Restart quiz functionality
- Responsive layout

### Features Excluded (Future Enhancements)

The following features are outside the initial project scope but could be added later:

- User accounts and login system
- Online multiplayer quizzes
- Global leaderboards
- Timed quiz mode
- Difficulty levels
- Audio effects and background music
- Achievement badges and rewards
- Question search and filtering
- High-score storage using a database
- Animated educational explanations after each question
- AI-generated quiz questions
- Support for additional science subjects such as Chemistry or Biology

### Project Constraints

The project will be developed with the following constraints:

- Built using HTML5, CSS3, and vanilla JavaScript (no external frameworks).
- Data will be stored locally within JavaScript rather than a database.
- The application will run entirely in the user's web browser.
- The design should remain simple, responsive, and easy to maintain.
- The project should be achievable within the available development timeframe.

### Deliverables

By the end of the project, the website will provide:

- An interactive Physics and Astronomy quiz.
- Responsive layouts for desktop, tablet, and mobile.
- Dynamic question rendering using JavaScript.
- Automatic score calculation and results display.
- Immediate answer feedback.
- Randomised quiz sessions for replayability.

## Skeleton Plane

### Desktop, Laptop and Tablet Wireframes

The quiz will look the same on desktops, laptops and tablets so these devices will use the same wireframes

![Screenshot of wireframes for laptop, tablet and desktop](/documentation/wireframes/desktop-wireframes.png)

### Mobile Wireframes

![Screenshot of wireframes for mobile](/documentation/wireframes/mobile-wireframes.png)

## The Surface Plane

### Typography

**Colour palette** 

The colour palette was chosen to reinforce the Physics and Astronomy theme while maintaining good readability and accessibility. A combination of deep blues and bright accent colours creates a modern, space-inspired appearance. 

![Image of color palette used](/documentation/color-palette/color-palette.png)

**Fonts**


The website uses Arial as its primary, with Helvetica and sans-serif as fallback fonts. These fonts were selected because they are widely available across operating systems, highly legible at a range of screen sizes, and provide a clean, modern appearance that complements the scientific theme of the quiz.

## AI Usage

ChatGPT and CoPilot were used to generate user stories for the website. They were also used to define the functional and non-function user requirements. 

The CoPilot extension was used in VS Code to generate code blocks for sections such as the quiz section. It was also used to make code suggestions to implement certain functionalities such as choosing a question category.

## Technologies Used

- HTML5
- CSS3
- Git and GitHub
- GitHub Pages for deployment
- CoPilot
- ChatGPT
- Markdown Builder

## Deployment

The site was deployed to GitHub pages. The steps taken to do this are as follows:

1. Navigate to the repository
2. Click on settings
3. Go to pages
4. In the "Build and deployment" section set the source to "Deploy from main branch"
5. Click Save
6. Wait 5 minutes for the link to go live
7. After 5 minutes or more refresh the page and you should see the link
8. Click Visit Site 

The link to the diversity and inclusion website can be found at: https://zealous242.github.io/physics-and-astronomy-quiz/ 

## Credits

- W3Schools - Used to help with wrtiing the HTML5, CSS3 and JavaScript
Link: https://www.w3schools.com/ 

- MDN - Used to help with wrtiing the HTML5, CSS3 and JavaScript
Link: https://developer.mozilla.org/en-US/

- Canva - Used to create wireframes and assist with planning the website layout and design before development.
Link: https://www.canva.com/,

- Bootstrap - Used for responsive layout structure, components, and styling support throughout the project.
Link: https://getbootstrap.com/,

- Code Institute - Used for accessing previous lessons, learning materials, and course resources to support development throughout the project.
Link: https://codeinstitute.net/,

- ChatGPT - Used as a support tool for guidance, troubleshooting, explanations, and assistance during development.
Link: https://chat.openai.com/,

- Font Awesome - Used to provide icons throughout the website to improve visual communication and user experience.
Link: https://fontawesome.com/,

- W3C Markup Validation Service - Used to validate HTML code and identify structural errors to ensure the website followed web standards.
Link: https://validator.w3.org/,

- W3C CSS Validation Service - Used to validate CSS code and identify styling errors or issues with CSS standards compliance.
Link: https://jigsaw.w3.org/css-validator/,

GitHub Copilot - Used as a coding assistant to provide suggestions, help troubleshoot issues, and improve development efficiency while building the project.
Link: https://github.com/features/copilot