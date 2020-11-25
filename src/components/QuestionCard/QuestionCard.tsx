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
      <p className="number">Question: {questionNr}/3</p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              {answer}
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
