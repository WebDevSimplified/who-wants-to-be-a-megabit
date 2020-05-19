export default [
  {
    questionText: "If you want to fill an entire background with an image without distorting the aspect ratio which value of background-size do you use?",
    codeAnswer: true,
    correctAnswer: "cover",
    incorrectAnswers: [
      "fill",
      "100%",
      "contain"
    ]
  },
  {
    questionText: "How do you define a custom property in CSS?",
    codeAnswer: true,
    correctAnswer: "--custom-property: 10",
    incorrectAnswers: [
      "--custom-property = 10",
      "$custom-property: 10",
      "$custom-property = 10"
    ]
  },
  {
    questionText: "Given the following HTML which CSS will not select the .selected element?",
    questionCode: `<div>
    <span></span>
    <span></span>
    <p class="selected"></p>
    <span></span>
    <p></p>
</div>`,
    codeAnswer: true,
    correctAnswer: "div > p:first-child",
    incorrectAnswers: [
      "div > :nth-child(5n - 7)",
      "div > :nth-last-of-type(2n)",
      "div > :not(span)"
    ]
  },
  {
    questionText: "Given the following HTML and CSS what is the color of the element?",
    questionCode: `<div class="parent">
  <span class="child" style="color: red;"></span>
</div>

.parent { color: blue !important; }
.child { color: green; }
span { color: purple; }
`,
    correctAnswer: "red",
    incorrectAnswers: [
      "blue",
      "green",
      "purple"
    ]
  },
  {
    questionText: "How do you check grid support in CSS?",
    codeAnswer: true,
    correctAnswer: "@supports(display: grid)",
    incorrectAnswers: [
      "@supports(grid)",
      "@feature(display: grid)",
      "@feature(grid)"
    ]
  },
  {
    questionText: "What is the border-color of .child?",
    questionCode: `.parent { color: red; }
.child {
  color: green;
  background-color: yellow;
  border-color: currentColor;
  color: blue;
}`,
    correctAnswer: "blue",
    incorrectAnswers: [
      "red",
      "yellow",
      "green",
    ]
  },
  {
    questionText: "What is margin-bottom if .child is inside .parent?",
    questionCode: `.parent {
  height: 100px;
  width: 200px;
}
.child {
  margin-bottom: calc(10% + 10px);
}`,
    correctAnswer: "30px",
    incorrectAnswers: [
      "20px",
      "10px",
      "25px"
    ]
  },
  {
    questionText: "Which CSS unit is the largest?",
    correctAnswer: "pc",
    incorrectAnswers: [
      "px",
      "Q",
      "mm"
    ]
  },
  {
    questionText: "Which of the following is an invalid color in CSS?",
    codeAnswer: true,
    correctAnswer: "hsl(200, 100, 50)",
    incorrectAnswers: [
      "rgb(0, 0, 0, .5)",
      "hsla(500, 100%, 50%, .6)",
      "#C1C1C133"
    ]
  },
  {
    questionText: "How do you access the value of a data-attribute in CSS?",
    codeAnswer: true,
    correctAnswer: "content: attr(data-text);",
    incorrectAnswers: [
      "color: attr(data-color);",
      "content: data(data-text);",
      "color: data(data-color);"
    ]
  },
  {
    questionText: "Which of the following is not a valid CSS property?",
    correctAnswer: "text-wrap",
    incorrectAnswers: [
      "empty-cells",
      "border-image",
      "will-change"
    ]
  },
  {
    questionText: "Which of the following is not a valid relative CSS unit?",
    correctAnswer: "el",
    incorrectAnswers: [
      "ex",
      "ch",
      "lh"
    ]
  },
  {
    questionText: "Which proposed CSS selector can be used to select an anchor tag with a span direct child in it?",
    codeAnswer: true,
    correctAnswer: "a:has(> span)",
    incorrectAnswers: [
      "a:contains(span)",
      "span < a",
      "a:wraps(span)"
    ]
  },
  {
    questionText: "Which of the following is not an SVG property?",
    codeAnswer: true,
    correctAnswer: "stroke-radius",
    incorrectAnswers: [
      "stroke-linejoin",
      "fill-opacity",
      "font-family"
    ]
  },
  {
    questionText: "Which of these creates a stacking context?",
    correctAnswer: "position: sticky",
    incorrectAnswers: [
      "opacity: 1",
      "z-index: 10",
      "order: 4"
    ]
  }
]