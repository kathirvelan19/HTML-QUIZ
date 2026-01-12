const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "Home Tool Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which HTML tag is used to define the root of an HTML document?",
    options: [
      "<body>",
      "<head>",
      "<html>",
      "<root>"
    ],
    answer: "<html>"
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    answer: "<ul>"
  },
  {
    question: "What is the correct HTML tag for the largest heading?",
    options: [
      "<h6>",
      "<head>",
      "<heading>",
      "<h1>"
    ],
    answer: "<h1>"
  },
  {
    question: "How do you create a hyperlink in HTML?",
    options: [
      "<a src='url'>link</a>",
      "<link href='url'>link</link>",
      "<a href='url'>link</a>",
      "<hyperlink href='url'>link</hyperlink>"
    ],
    answer: "<a href='url'>link</a>"
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: [
      "<picture>",
      "<img>",
      "<image>",
      "<src>"
    ],
    answer: "<img>"
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    options: [
      "To define the document title",
      "To define a paragraph",
      "To define metadata about an HTML document",
      "None of the above"
    ],
    answer: "To define metadata about an HTML document"
  },
  {
    question: "Which attribute is used to specify the URL of an image in HTML?",
    options: [
      "href",
      "alt",
      "link",
      "src"
    ],
    answer: "src"
  },
  {
    question: "Which tag is used for line breaks in HTML?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<line>"
    ],
    answer: "<br>"
  },
  {
    question: "Which tag is used to create a table in HTML?",
    options: [
      "<tbl>",
      "<tr>",
      "<table>",
      "<thead>"
    ],
    answer: "<table>"
  },
  {
    question: "Which tag is used to define a paragraph in HTML?",
    options: [
      "<para>",
      "<text>",
      "<p>",
      "<span>"
    ],
    answer: "<p>"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: [
      "title",
      "src",
      "alt",
      "longdesc"
    ],
    answer: "alt"
  },
  {
    question: "Which tag is used to define a division or section in an HTML document?",
    options: [
      "<section>",
      "<span>",
      "<div>",
      "<group>"
    ],
    answer: "<div>"
  },
  {
    question: "How do you make a list that lists items with numbers?",
    options: [
      "<ul>",
      "<list>",
      "<ol>",
      "<li>"
    ],
    answer: "<ol>"
  },
  {
    question: "Which tag is used to define a form in HTML?",
    options: [
      "<input>",
      "<textarea>",
      "<form>",
      "<button>"
    ],
    answer: "<form>"
  },
  {
    question: "Which attribute is used to link a CSS file to an HTML document?",
    options: [
      "src",
      "rel",
      "style",
      "href"
    ],
    answer: "href"
  },
  {
    question: "How can you make text bold in HTML?",
    options: [
      "<i>",
      "<u>",
      "<strong>",
      "<bold>"
    ],
    answer: "<strong>"
  },
  {
    question: "Which tag is used to define an ordered list in HTML?",
    options: [
      "<ul>",
      "<list>",
      "<ol>",
      "<ol-item>"
    ],
    answer: "<ol>"
  },
  {
    question: "Which tag is used to create a dropdown list in HTML?",
    options: [
      "<option>",
      "<dropdown>",
      "<select>",
      "<list>"
    ],
    answer: "<select>"
  },
  {
    question: "Which HTML element is used to define important text?",
    options: [
      "<b>",
      "<em>",
      "<strong>",
      "<i>"
    ],
    answer: "<strong>"
  },
  {
    question: "Which tag is used to define the header of a section or a page in HTML5?",
    options: [
      "<top>",
      "<head>",
      "<header>",
      "<title>"
    ],
    answer: "<header>"
  },
  {
    question: "What is the correct HTML tag for creating a form input field?",
    options: [
      "<text>",
      "<textarea>",
      "<input>",
      "<button>"
    ],
    answer: "<input>"
  },
  {
    question: "What does the <title> tag do in an HTML document?",
    options: [
      "Defines the header of the page",
      "Creates a heading",
      "Defines the title of the webpage shown in the browser tab",
      "Defines metadata"
    ],
    answer: "Defines the title of the webpage shown in the browser tab"
  },
  {
    question: "Which HTML tag is used to define a table row?",
    options: [
      "<th>",
      "<td>",
      "<tr>",
      "<table>"
    ],
    answer: "<tr>"
  },
  {
    question: "Which tag is used to add a comment in HTML?",
    options: [
      "<!-- comment -->",
      "// comment",
      "/* comment */",
      "<comment>"
    ],
    answer: "<!-- comment -->"
  },
  {
    question: "Which attribute specifies the URL of the page the link goes to in an anchor tag?",
    options: [
      "src",
      "alt",
      "url",
      "href"
    ],
    answer: "href"
  },
  {
    question: "What tag is used to define a list item in an ordered or unordered list?",
    options: [
      "<item>",
      "<ol-item>",
      "<li>",
      "<list-item>"
    ],
    answer: "<li>"
  },
  {
    question: "Which tag is used to define a table header in HTML?",
    options: [
      "<td>",
      "<tr>",
      "<th>",
      "<thead>"
    ],
    answer: "<th>"
  },
  {
    question: "Which tag is used to define a footer for a section or a page in HTML5?",
    options: [
      "<bottom>",
      "<foot>",
      "<footer>",
      "<end>"
    ],
    answer: "<footer>"
  },
  {
    question: "What is the purpose of the <iframe> tag in HTML?",
    options: [
      "To create an inline frame to embed another document within the current HTML document",
      "To create a form",
      "To insert an image",
      "To define metadata"
    ],
    answer: "To create an inline frame to embed another document within the current HTML document"
  },
  {
    question: "Which tag is used to define the metadata about the HTML document?",
    options: [
      "<head>",
      "<body>",
      "<meta>",
      "<html>"
    ],
    answer: "<meta>"
  },
  {
    question: "Which HTML element is used to define a clickable button?",
    options: [
      "<input type='button'>",
      "<click>",
      "<button>",
      "<a>"
    ],
    answer: "<button>"
  },
  {
    question: "What does the <hr> tag do?",
    options: [
      "Creates a new paragraph",
      "Defines a heading",
      "Creates a horizontal rule (line)",
      "Links two elements"
    ],
    answer: "Creates a horizontal rule (line)"
  },
  {
    question: "How do you include an external JavaScript file in an HTML document?",
    options: [
      "<js src='file.js'>",
      "<script ref='file.js'>",
      "<javascript src='file.js'>",
      "<script src='file.js'></script>"
    ],
    answer: "<script src='file.js'></script>"
  },
  {
    question: "What is the purpose of the <link> tag in HTML?",
    options: [
      "To define a hyperlink",
      "To link external resources like stylesheets",
      "To link a script file",
      "To insert an image"
    ],
    answer: "To link external resources like stylesheets"
  },
  {
    question: "What does the <noscript> tag do?",
    options: [
      "Defines a script that should not run",
      "Defines content to be shown when JavaScript is disabled or not supported",
      "Defines metadata for non-scripted content",
      "It is a deprecated tag"
    ],
    answer: "Defines content to be shown when JavaScript is disabled or not supported"
  },
  {
    question: "Which tag is used to define a list of options within a <select> element?",
    options: [
      "<list-item>",
      "<dropdown-item>",
      "<option>",
      "<choice>"
    ],
    answer: "<option>"
  },
  {
    question: "Which attribute is used to specify the width of an image in HTML?",
    options: [
      "size",
      "height",
      "src",
      "width"
    ],
    answer: "width"
  },
  {
    question: "Which HTML element is used to specify a caption for <figure> elements?",
    options: [
      "<legend>",
      "<figcaption>",
      "<caption>",
      "<figure-text>"
    ],
    answer: "<figcaption>"
  },
  {
    question: "Which input type is used for email addresses?",
    options: [
      "type='text'",
      "type='url'",
      "type='email'",
      "type='mail'"
    ],
    answer: "type='email'"
  },
  {
    question: "What is the purpose of the 'defer' attribute in a <script> tag?",
    options: [
      "The script will be executed immediately.",
      "The script will be parsed and executed after the HTML document has been parsed.",
      "The script will be executed in parallel with the HTML parsing.",
      "It makes the script optional."
    ],
    answer: "The script will be parsed and executed after the HTML document has been parsed."
  },
  {
    question: "Which HTML5 element is used to draw graphics on a web page?",
    options: [
      "<canvas>",
      "<svg>",
      "<graphics>",
      "<draw>"
    ],
    answer: "<canvas>"
  },
  {
    question: "Which attribute indicates that an input field must be filled out before submitting the form?",
    options: [
      "validate",
      "required",
      "mandatory",
      "placeholder"
    ],
    answer: "required"
  },
  {
    question: "What is the correct way to add a background image in HTML using CSS inline style?",
    options: [
      "<body background='image.jpg'>",
      "<body style='background-image: url(image.jpg);'>",
      "<background src='image.jpg'>",
      "<body style='background: image.jpg;'>"
    ],
    answer: "<body style='background-image: url(image.jpg);'>"
  },
  {
    question: "Which HTML attribute specifies that an <input> field should be focused on automatically when the page loads?",
    options: [
      "autofill",
      "autoselect",
      "autofocus",
      "initialfocus"
    ],
    answer: "autofocus"
  },
  {
    question: "Which HTML element is used to specify a header for a document or section?",
    options: [
      "<head>",
      "<top>",
      "<sectionhead>",
      "<header>"
    ],
    answer: "<header>"
  },
  {
    question: "What is the semantic purpose of the <article> tag in HTML5?",
    options: [
      "To group related content",
      "To define self-contained content that makes sense on its own",
      "To create a division in the document",
      "To define a navigation menu"
    ],
    answer: "To define self-contained content that makes sense on its own"
  },
  {
    question: "Which HTML element is used to embed video content?",
    options: [
      "<media>",
      "<movie>",
      "<video>",
      "<src>"
    ],
    answer: "<video>"
  },
  {
    question: "What does the 'target' attribute in an <a> tag specify?",
    options: [
      "The destination URL",
      "Where to open the linked document",
      "The title of the link",
      "The type of content being linked"
    ],
    answer: "Where to open the linked document"
  },
  {
    question: "Which HTML element is used to define emphasized text?",
    options: [
      "<i>",
      "<strong>",
      "<em>",
      "<italic>"
    ],
    answer: "<em>"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;

// DOM Elements
const questionElement = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const scoreDisplay = document.getElementById("score");
const feedbackMessage = document.getElementById("feedback");
const currentQuestionNumSpan = document.getElementById("current-question-num");
const totalQuestionsSpan = document.getElementById("total-questions");
const progressBarFill = document.getElementById("progress-fill");
const restartBtn = document.getElementById("restart-btn");

function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    quizCompleted = false;

    totalQuestionsSpan.textContent = questions.length;
    scoreDisplay.textContent = "";
    feedbackMessage.textContent = "";
    feedbackMessage.classList.remove('show', 'correct-feedback', 'incorrect-feedback');
    submitBtn.style.display = 'block';
    submitBtn.disabled = true; // Disable submit until an option is selected
    restartBtn.style.display = 'none'; // Hide restart button initially
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    optionsDiv.innerHTML = "";
    selectedOption = null; // Reset selection for new question
    submitBtn.disabled = true; // Disable submit until an option is selected

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn"); // Add a class for general option styling
        btn.onclick = () => selectOption(opt, btn);
        optionsDiv.appendChild(btn);
    });

    updateProgressBar();
    currentQuestionNumSpan.textContent = currentQuestionIndex + 1;
}

function selectOption(opt, clickedButton) {
    selectedOption = opt;
    const buttons = document.querySelectorAll("#options .option-btn");
    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });
    clickedButton.classList.add("selected");
    submitBtn.disabled = false; // Enable submit button
}

function submitAnswer() {
    if (!selectedOption) {
        feedbackMessage.textContent = "Please select an option!";
        feedbackMessage.classList.add('show', 'incorrect-feedback'); // Provide visual cue
        return;
    }

    submitBtn.disabled = true; // Disable submit button after submission
    const currentQ = questions[currentQuestionIndex];
    const correct = (selectedOption === currentQ.answer);
    const buttons = document.querySelectorAll("#options .option-btn");

    // Provide visual feedback on options
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons after answering
        if (btn.textContent === currentQ.answer) {
            btn.classList.add("correct");
        } else if (btn.textContent === selectedOption && !correct) {
            btn.classList.add("incorrect");
        }
    });

    // Show feedback message
    feedbackMessage.classList.remove('incorrect-feedback', 'correct-feedback'); // Clear previous feedback styling
    feedbackMessage.classList.add('show');
    if (correct) {
        score++;
        feedbackMessage.textContent = "Correct!";
        feedbackMessage.classList.add('correct-feedback');
    } else {
        feedbackMessage.textContent = `Incorrect. The correct answer was: ${currentQ.answer}`;
        feedbackMessage.classList.add('incorrect-feedback');
    }

    // Wait a bit before moving to the next question
    setTimeout(() => {
        feedbackMessage.classList.remove('show'); // Hide feedback
        currentQuestionIndex++;
        loadQuestion();
    }, 1500); // 1.5 seconds delay
}

function endQuiz() {
    quizCompleted = true;
    questionElement.textContent = "Quiz Completed!";
    optionsDiv.innerHTML = "";
    scoreDisplay.textContent = `Your final score: ${score} out of ${questions.length}`;
    submitBtn.style.display = 'none';
    restartBtn.style.display = 'block'; // Show restart button
    currentQuestionNumSpan.textContent = questions.length; // Ensure it shows total on completion
    updateProgressBar();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

function restartQuiz() {
    initializeQuiz();
}

// Initialize the quiz when the page loads
window.onload = initializeQuiz;
