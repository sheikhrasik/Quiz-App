const quizDB = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    ans: "ans4",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans1",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    ans: "ans2",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

//initial call
loadQuestion();

const getCheckedAnswer = () => {
  let answer;
  // console.log(answers);

  // answers.forEach((curAnsElem) => {
  //     answer = curAnsElem.id;
  // });
  // return answer;

  // let options = [...answers];
  // let checkedOption = options.filter((i) => i.checked);
  // if (checkedOption.length >= 1) 
  // return checkedOption.id;
  // alert("try choosing an option");
  // return;

  // let checkedOption = answers.filter((i) => i.checked);
  // if (checkedOption) return checkedOption.id;
  // return Alert("try choosing an option");
};

const checkedAnswer = () => {
  const givenAnswer = getCheckedAnswer();
  console.log(givenAnswer);

  if (givenAnswer) {
    if (givenAnswer === quizDB[questionCount].ans) {
      score++;
    }
    questionCount++;
    reset();
  } else {
    return;
  }

  if (questionCount === quizDB.length) {
    submit.style.display = "none";
  }

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3>You scored ${score} / ${quizDB.length} ✌🏻<h3/>
                           <button class="btn" onClick="location.reload()">Play again</button> 
    `;

    showScore.classList.remove("scoreArea");
  }
};

const reset = () => {
  answers.forEach((ansElm) => {
    ansElm.checked = false;
  });
};

submit.addEventListener("click", checkedAnswer);
