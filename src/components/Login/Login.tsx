import React, { useState } from "react";
import { fetchLogin, fetchQuestion } from "../../API/API";
import { Wrapper } from "../../GlobalStyle/GlobalStyle.style";
import LoginCard from "./components/LoginCard/LoginCard";
import QuestionCard from "./components/QuestionCard/QuestionCard";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type Question = {
  question: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
};

const TOTAL_QUESTIONS = 3;

const Login = () => {
  const [login, setLogin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLogin(false);
    setSubmit(false);
    setUsername("");
    setPassword("");
    setUserAnswers([]);
    setNumber(0);
  };

  const startLogin = async () => {
    setLogin(true);
    const newQuestions = await fetchQuestion();
    setQuestions(newQuestions);
    setUserAnswers([]);
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
      </Wrapper>
    </>
  );
};

export default Login;
