const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Hyperlink Text Markup Language", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
    answers: [
      { text: "It defines the document type and version of HTML", correct: true },
      { text: "It links to the CSS file", correct: false },
      { text: "It creates a heading for the web page", correct: false },
      { text: "It includes external JavaScript", correct: false },
    ],
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    answers: [
      { text: "font-weight", correct: false },
      { text: "font-style", correct: false },
      { text: "font-family", correct: true },
      { text: "font-size", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<div>", correct: false },
      { text: "<span>", correct: false },
      { text: "<h1>", correct: false },
    ],
  },
  {
    question: "Which CSS property controls the text color?",
    answers: [
      { text: "color", correct: true },
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "background-color", correct: false },
    ],
  },
  {
    question: "What does the 'id' attribute do in HTML?",
    answers: [
      { text: "It defines the identifier for an element", correct: true },
      { text: "It specifies the background color", correct: false },
      { text: "It creates a link to another webpage", correct: false },
      { text: "It defines the class of an element", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid CSS selector?",
    answers: [
      { text: ".className", correct: true },
      { text: "#className", correct: false },
      { text: "<div>", correct: false },
      { text: "div.className", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used for links?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change the background color of an element?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bg-color", correct: false },
      { text: "background-image", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'alt' attribute in an image tag?",
    answers: [
      { text: "It specifies an alternative text for the image", correct: true },
      { text: "It sets the width of the image", correct: false },
      { text: "It links the image to another page", correct: false },
      { text: "It sets the height of the image", correct: false },
    ],
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    answers: [
      { text: "<ol>", correct: false },
      { text: "<ul>", correct: true },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false },
    ],
  },
  {
    question: "What does the 'float' property do in CSS?",
    answers: [
      { text: "It moves an element to the left or right of its container", correct: true },
      { text: "It sets the size of an element", correct: false },
      { text: "It makes an element fixed at the top of the page", correct: false },
      { text: "It changes the font style", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define an input field?",
    answers: [
      { text: "<button>", correct: false },
      { text: "<input>", correct: true },
      { text: "<form>", correct: false },
      { text: "<textarea>", correct: false },
    ],
  },
  {
    question: "Which property is used to add space between the content of an element and its border in CSS?",
    answers: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "border-spacing", correct: false },
      { text: "space", correct: false },
    ],
  },
  {
    question: "What does the 'position' property do in CSS?",
    answers: [
      { text: "It determines the position of an element on the page", correct: true },
      { text: "It sets the text alignment", correct: false },
      { text: "It sets the background color", correct: false },
      { text: "It defines the font size", correct: false },
    ],
  },
  {
    question: "Which of the following is the correct syntax for linking a CSS file in HTML?",
    answers: [
      { text: "<link rel='stylesheet' href='style.css'>", correct: true },
      { text: "<css src='style.css'>", correct: false },
      { text: "<style src='style.css'>", correct: false },
      { text: "<stylesheet>style.css</stylesheet>", correct: false },
    ],
  },
  {
    question: "How can you make a list item appear as a bullet in HTML?",
    answers: [
      { text: "Use <ul> and <li>", correct: true },
      { text: "Use <ol> and <li>", correct: false },
      { text: "Use <ul> and <ol>", correct: false },
      { text: "Use <li> and <list>", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to control the spacing between letters in text?",
    answers: [
      { text: "letter-spacing", correct: true },
      { text: "word-spacing", correct: false },
      { text: "line-height", correct: false },
      { text: "text-indent", correct: false },
    ],
  },
  {
    question: "What does the 'display' property do in CSS?",
    answers: [
      { text: "It defines how an element is displayed on the page", correct: true },
      { text: "It sets the color of an element", correct: false },
      { text: "It changes the background of an element", correct: false },
      { text: "It adjusts the size of an element", correct: false },
    ],
  },
  {
    question: "What does the <div> tag do in HTML?",
    answers: [
      { text: "Defines a division or section in an HTML document", correct: true },
      { text: "Defines a form element", correct: false },
      { text: "Defines an image", correct: false },
      { text: "Defines a heading", correct: false },
    ],
  },
];
