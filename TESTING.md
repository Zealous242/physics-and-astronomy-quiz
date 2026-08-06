# Physics & Astronomy Quiz TESTING

initial-push

## Tests done

>HTML
![](/documentation/validation-screenshots/html-validation-screenshot.png)

>CSS
![](/documentation/validation-screenshots/css-validation-screenshot.png)

>JS
![](/documentation/validation-screenshots/javascript-script-validation-screenshot.png)

For the script.js code, the validator flagged the following variables as "undefined": physicsQuestions, astronomyQuestions and allQuestions. This is due to the fact that these variable were placed in a seperate file - the questions.js file.

>JS - Qestions
![](/documentation/validation-screenshots/javascript-questions-validation-screenshot.png)

For the questions.js code, the validator flagged the allQuestions variable as "unused". However, this variable was only flagged this way due to it being used in a seperate file - the script.js file

>Lighthouse - Desktop
![](documentation/lighthouse/lighthouse-desktop.png)

>Lighthouse - Mobile
![](documentation\lighthouse\lighthouse-mobile.png)

>Google Chrome
![](documentation/cross-platform/test-chrome.png)

>Mozilla Firefox - Developer Edition
![](documentation/cross-platform/test-firefox.png)

>Opera GX
![](documentation/cross-platform/test-operagx.png)

## User Stories

### Welcome Screen

As a user, I want to view a welcome screen so that I understand the purpose of the quiz

**Acceptance Criteria:**

- [x] The welcome screen is displayed when the website loads.
- [x] The page includes the quiz title and a brief description.
- [] A Start Quiz button is clearly visible.

**Implementation Tasks:**

- [x] Create the HTML structure for the welcome screen.
- [x] Style the welcome screen using CSS.

![](documentation/user-stories/user-story-welcome-test.png)

### Quiz Category

As a user, I want to select a quiz category (Physics, Astronomy, or Mixed) so that I can choose the topics I want to be tested on.

**Acceptance Criteria:**

- [x] The user can choose one category before starting the quiz.
- [x] The selected category determines which questions are displayed.
- [x]Selecting Mixed displays questions from both Physics and Astronomy.

**Implementation Tasks:**

- [x] Create category selection buttons or a dropdown menu.
- [x] Store the selected category in JavaScript.
- [x] Filter the question list based on the selected category.

>Catrgories Test
![](documentation/ser-stories/ategories/ser-story-category-physics-test.png)
![](documentation/user-stories/categories/user-story-category-astronomy-test.png)
![](documentation/ser-stories/ategories/ser-story-category-mixed-test.png)
![](documentation/ser-stories/ategories/ser-story-category-jsquestions-test.png)

### Question Layout

As a user, I want to start the quiz by clicking a Start button so that I can begin answering questions.

**Acceptance Criteria:**

- [] Clicking the Start Quiz button begins the quiz.
- [x] The welcome screen is hidden.
- [x] The first question is displayed.

**Implementation Tasks:**

- [] Create a Start Quiz button.
- [x] Add an event listener to detect button clicks.
- [x] Initialise the quiz variables and display the first question.

