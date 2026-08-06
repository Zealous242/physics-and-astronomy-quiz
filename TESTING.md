# Physics & Astronomy Quiz TESTING

initial-push

## Tests done

>HTML
![](documentation/validation/html-validation.png)

>CSS
![](documentation/validation/css-validation.png)

>JS
![](documentation/validation/js-validation.png)

>JS - Qestions
![](documentation/validation/js-questions-validation.png)

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

