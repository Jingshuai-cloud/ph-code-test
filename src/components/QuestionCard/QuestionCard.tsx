import React from "react";
import { Wrapper, ButtonWrapper } from "./QuestionCard.style";
import { AnswerObject } from "../../App";

type Props = {
  question: string;
  questionNr: number;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard: React.FC<Props> = ({
  question,
  questionNr,
  answers,
  userAnswer,
  callback,
}) => {
  return (
    <Wrapper>
      <p>Question: {questionNr}/3</p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer ? userAnswer.correctAnswer === answer : false}
            userClicked={userAnswer ? userAnswer.answer === answer : false}
          >
            <div>
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                {answer}
              </button>
            </div>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
