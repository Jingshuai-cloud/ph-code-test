import React, { useState } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import LoginCard from "./components/LoginCard/LoginCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { fetchLogin, fetchQuestion, Question } from "./API";
import Sidebar from "./components/Sidebar/Sidebar";

const menus = [
  { coffee: "AFFOGATO", path: "/layer1", subMenu: [] },
  {
    coffee: "ESPRESSO",
    path: "/",
    subMenu: [
      { coffee: "ESPRESSO", path: "/", subMenu: [] },
      { coffee: "DOUBLE ESPRESSO", path: "/", subMenu: [] },
      {
        coffee: "MORE",
        path: "/",
        subMenu: [
          { coffee: "ESPRESSO CON PANNA", path: "/", subMenu: [] },
          { coffee: "ESPRESSO MACCHIATO", path: "/", subMenu: [] },
          {
            coffee: "MORE",
            path: "/",
            subMenu: [
              { coffee: "ICED LATTE", path: "/", subMenu: [] },
              { coffee: "ICED MOCHA", path: "/", subMenu: [] },
            ],
          },
        ],
      },
    ],
  },

  { coffee: "AMERICANO ", path: "/layer1", subMenu: [] },

  { coffee: "CAPPUCCINO ", path: "/layer1", subMenu: [] },

  {
    coffee: "CAFFÈ ",
    path: "/",
    subMenu: [
      { coffee: "CAFFÈ LATTE ", path: "/layer2", subMenu: [] },
      { coffee: "CAFFÈ MOCHA ", path: "/layer2", subMenu: [] },

      { coffee: "CAFÈ AU LAIT", path: "/layer2", subMenu: [] },
    ],
  },
  { coffee: "FLAT WHITE", path: "/", subMenu: [] },
  { coffee: "Login", path: "/login", subMenu: [] },
];

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 3;

const App = () => {
  const [login, setLogin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  console.log(login, submit, username, password);

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLogin(false);
    setSubmit(false);
    setUsername("");
    setPassword("");
    setUserAnswers([]);
    setNumber(0);
    console.log(questions[number]);
  };

  const submitLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userInfo = await fetchLogin(username);
    if (userInfo.length != 0 && userInfo[0].password == password) {
      setError(false);
      setSubmit(true);
      setLogin(false);
    } else {
      setError(true);
      setSubmit(false);
    }
  };
  const startLogin = async () => {
    setLogin(true);
    const newQuestions = await fetchQuestion();
    setQuestions(newQuestions);
    setUserAnswers([]);
    console.log(questions);
    console.log(userAnswers);
  };

  const inputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    setNumber(nextQuestion);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions[number].correct_answer === answer;

    const answerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };

    setUserAnswers((prev) => [...prev, answerObject]);
  };
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Sidebar menus={menus} />
        <div id="right">
          <h1>Predictive Hire</h1>
          {!login && !submit && (
            <button className="home-button" onClick={startLogin}>
              Login
            </button>
          )}

          {login && (
            <LoginCard
              goBack={goBack}
              submitLogin={submitLogin}
              inputUserName={inputUserName}
              inputPassword={inputPassword}
            />
          )}
          {error && <p>login failed</p>}

          {/* {submit && <QuestionCard />} */}
          {submit && (
            <QuestionCard
              question={questions[number].question}
              questionNr={number + 1}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {userAnswers.length === number + 1 && number !== 2 ? (
            <button className="home-button" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
          {userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="home-button" onClick={goBack}>
              Back to Home
            </button>
          ) : null}

          {submit && <p>login successful</p>}
        </div>
      </Wrapper>
    </>
  );
};

export default App;
