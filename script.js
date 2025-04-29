const questions = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "None of the above"], answer: "HyperText Markup Language" },
    { question: "What is the correct HTML tag for the largest heading?", options: ["<h1>", "<h6>", "<heading>", "<head>"], answer: "<h1>" },
    { question: "How do you create a hyperlink in HTML?", options: ["<a href='url'>link</a>", "<link href='url'>link</link>", "<a src='url'>link</a>", "<hyperlink href='url'>link</hyperlink>"], answer: "<a href='url'>link</a>" },
    { question: "Which tag is used to define an unordered list in HTML?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
    { question: "Which tag is used to insert an image in HTML?", options: ["<img>", "<image>", "<picture>", "<src>"], answer: "<img>" },
    { question: "What is the purpose of the <meta> tag in HTML?", options: ["To define metadata", "To define the document title", "To define a paragraph", "None of the above"], answer: "To define metadata" },
    { question: "Which attribute is used to specify the URL of an image in HTML?", options: ["src", "href", "alt", "link"], answer: "src" },
    { question: "Which tag is used for line breaks in HTML?", options: ["<br>", "<break>", "<lb>", "<line>"], answer: "<br>" },
    { question: "Which tag is used to create a table in HTML?", options: ["<table>", "<tbl>", "<tr>", "<thead>"], answer: "<table>" },
    { question: "Which tag is used to define a paragraph in HTML?", options: ["<p>", "<para>", "<text>", "<span>"], answer: "<p>" },
    { question: "Which attribute is used to define the background color of a page?", options: ["bgcolor", "color", "background", "style"], answer: "bgcolor" },
    { question: "Which tag is used to define a division or section in an HTML document?", options: ["<section>", "<div>", "<span>", "<group>"], answer: "<div>" },
    { question: "What is the correct HTML tag for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<line>"], answer: "<br>" },
    { question: "Which tag is used to define a link in HTML?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { question: "How do you make a list that lists items with numbers?", options: ["<ul>", "<list>", "<ol>", "<li>"], answer: "<ol>" },
    { question: "Which tag is used to define a form in HTML?", options: ["<form>", "<input>", "<textarea>", "<button>"], answer: "<form>" },
    { question: "Which attribute is used to link a CSS file to an HTML document?", options: ["href", "src", "rel", "style"], answer: "href" },
    { question: "How can you make a text bold in HTML?", options: ["<b>", "<strong>", "<i>", "<u>"], answer: "<b>" },
    { question: "Which tag is used to define an ordered list in HTML?", options: ["<ul>", "<ol>", "<list>", "<ol-item>"], answer: "<ol>" },
    { question: "Which tag is used to create a dropdown list in HTML?", options: ["<select>", "<option>", "<dropdown>", "<list>"], answer: "<select>" },
    { question: "How can you change the background color of a page in HTML?", options: ["bgcolor", "style", "background-color", "color"], answer: "bgcolor" },
    { question: "Which tag is used to define the header of a page in HTML?", options: ["<header>", "<top>", "<head>", "<title>"], answer: "<header>" },
    { question: "What is the correct HTML tag for creating a form input field?", options: ["<text>", "<input>", "<textarea>", "<button>"], answer: "<input>" },
    { question: "What does the <title> tag do in an HTML document?", options: ["Defines the title of the webpage", "Defines the header of the page", "Creates a heading", "Defines metadata"], answer: "Defines the title of the webpage" },
    { question: "Which tag is used to define a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { question: "Which tag is used to define a table row in HTML?", options: ["<tr>", "<th>", "<td>", "<table>"], answer: "<tr>" },
    { question: "Which tag is used to create a dropdown list in HTML?", options: ["<select>", "<option>", "<dropdown>", "<list>"], answer: "<select>" },
    { question: "Which tag is used to add a comment in HTML?", options: ["<!-- comment -->", "<!-- comment >", "<comment>", "<# comment>"], answer: "<!-- comment -->" },
    { question: "Which attribute specifies the URL in the anchor tag?", options: ["href", "src", "alt", "url"], answer: "href" },
    { question: "What tag is used to define a list item in an ordered or unordered list?", options: ["<item>", "<ol-item>", "<li>", "<list>"], answer: "<li>" },
    { question: "Which tag is used to define a table header in HTML?", options: ["<th>", "<td>", "<tr>", "<thead>"], answer: "<th>" },
    { question: "How do you add a comment in HTML?", options: ["// comment", "<!-- comment -->", "/* comment */", "comment()"], answer: "<!-- comment -->" },
    { question: "Which tag is used to define a footer in HTML?", options: ["<footer>", "<bottom>", "<foot>", "<end>"], answer: "<footer>" },
    { question: "What is the purpose of the <iframe> tag in HTML?", options: ["To create a frame within a webpage", "To create a form", "To embed external content", "Both a and c"], answer: "Both a and c" },
    { question: "Which tag is used to define the metadata about the HTML document?", options: ["<meta>", "<head>", "<body>", "<html>"], answer: "<meta>" },
    { question: "How do you create a table in HTML?", options: ["<table>", "<tbl>", "<tr>", "<thead>"], answer: "<table>" },
    { question: "Which HTML tag is used to define a document's title?", options: ["<title>", "<head>", "<meta>", "<body>"], answer: "<title>" },
    { question: "Which HTML element is used to define a clickable button?", options: ["<button>", "<input type='button'>", "<click>", "<a>"], answer: "<button>" },
    { question: "What does the <hr> tag do?", options: ["Creates a horizontal line", "Creates a new paragraph", "Defines a heading", "Links two elements"], answer: "Creates a horizontal line" },
    { question: "How do you include an external JavaScript file in an HTML document?", options: ["<script src='file.js'>", "<js src='file.js'>", "<script ref='file.js'>", "<javascript src='file.js'>"], answer: "<script src='file.js'>" },
    { question: "Which tag is used to display a paragraph in HTML?", options: ["<para>", "<p>", "<text>", "<paragraph>"], answer: "<p>" },
    { question: "What is the purpose of the <link> tag in HTML?", options: ["Links external files", "Links a style sheet", "Links a script file", "Links an image"], answer: "Links a style sheet" },
    { question: "What does the <noscript> tag do?", options: ["Defines content to be shown when scripts are disabled", "Defines content for scripting", "Defines the document title", "Defines a script for the page"], answer: "Defines content to be shown when scripts are disabled" },
    { question: "Which tag is used to define a list of options in HTML?", options: ["<option>", "<select>", "<list>", "<choices>"], answer: "<option>" },
    { question: "Which attribute is used to specify the width of an image in HTML?", options: ["width", "height", "size", "src"], answer: "width" },
    { question: "How do you define a header for a webpage in HTML?", options: ["<header>", "<head>", "<title>", "<top>"], answer: "<header>" },
    { question: "Which tag is used to define a footer for a webpage in HTML?", options: ["<footer>", "<bottom>", "<end>", "<foot>"], answer: "<footer>" },
    { question: "Which tag is used to define the body of the HTML document?", options: ["<body>", "<head>", "<footer>", "<section>"], answer: "<body>" }
  ];
  ;
  
  let current = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
  
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => selectOption(opt);
      optionsDiv.appendChild(btn);
    });
  }
  
  let selected = null;
  
  function selectOption(opt) {
    selected = opt;
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => {
      btn.style.backgroundColor = (btn.textContent === opt) ? "#2196F3" : "#4CAF50";
    });
  }
  
  function submitAnswer() {
    if (!selected) {
      alert("Please select an option!");
      return;
    }
  
    if (selected === questions[current].answer) {
      score++;
    }
  
    selected = null;
    current++;
  
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("question").textContent = "Quiz Completed!";
      document.getElementById("options").innerHTML = "";
      document.getElementById("score").textContent = "Your score: " + score + "/" + questions.length;
      
    }
  }
  
  window.onload = loadQuestion;
  