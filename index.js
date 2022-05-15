"use strict";
const Questionbank = {
  question1: [
    "Name the Father of the Indian Constitution?",
    "Dr. B. R. Ambedkar",
    "APJ Abdul Kalam",
    "Jawaharlal Nehru",
    "Indira Gandhi",
    "1",
  ],
  question2: [
    "Who was the first Prime Minister of India?",
    "Dr. B. R. Ambedkar",
    "APJ Abdul Kalam",
    "Jawaharlal Nehru",
    "Indira Gandhi",
    "3",
  ],
  question3: [
    "Who was the first President of India?",
    "Dr. B. R. Ambedkar",
    "Ramnath Kovind",
    "Jawaharlal Nehru",
    "Rajendra Prasad",
    "4",
  ],
  question4: [
    " Aizawl is the capital of which state of India?",
    "Nagaland",
    "Arunachal Pradesh",
    "Sikkim ",
    "Mizoram",
    "4",
  ],
  question5: [
    "Who is the executive head of the Union Territories?",
    "Home Minister",
    "Prime Minister",
    "Chief Minister",
    "President",
    "4",
  ],
  question6: [
    "Which state produces maximum soybean?",
    "Madhya Pradesh",
    "Bihar",
    "Uttar pardesh",
    "Rajasthan",
    "1",
  ],
};
let randomnumber = Math.floor(Math.random() * 6);

const keys = Object.keys(Questionbank);
const value = Object.values(Questionbank);
const queswithans = value[randomnumber];

console.log(queswithans[0]);

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <QuestionsArea />
      </div>
    );
  }
}

console.log(keys[randomnumber]);

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <h1>Quiz panel</h1>
      </div>
    );
  }
}

class QuestionsArea extends React.Component {
  render() {
    return (
      <div class="questionarea">
        <Question />
        <Options />
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    return (
      <div>
        <h1>{queswithans[0]}</h1>
      </div>
    );
  }
}
let optionno = 0;
class Options extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            optionno = 1;
            check();
          }}
        >
          A: {queswithans[1]}
        </button>
        <button
          onClick={() => {
            optionno = 2;
            check();
          }}
        >
          B: {queswithans[2]}
        </button>
        <button
          onClick={() => {
            optionno = 3;
            check();
          }}
        >
          C: {queswithans[3]}
        </button>
        <button
          onClick={() => {
            optionno = 4;
            check();
          }}
        >
          D: {queswithans[4]}
        </button>
        <div
          onClick={() => {
            window.location.reload();
            window.location.reload();
          }}
        >
          <h2>Next question</h2>
        </div>
      </>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div class="result">
        <h2>
          {answerresult
            ? "Well Done!! Your Answer is Correct"
            : " Sorry!! Your Answer is Incorrect"}
        </h2>
      </div>
    );
  }
}
let answerresult = false;
let answeronce = 0;
const celebration = document.getElementById("confetti");

function check() {
  if (answeronce < 1) {
    if (optionno == queswithans[5]) {
      answerresult = true;
      celebration.classList.remove("hide");
    } else {
      celebration.classList.add("hide");
      answerresult = false;
    }

    ReactDOM.render(<Result />, document.getElementById("result"));
    answeronce = 1;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
