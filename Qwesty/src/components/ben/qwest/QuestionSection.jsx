import React, { useState } from "react";

const Question = ({ question = "What's your favorite color?" }) => {
  return (
    <div className="bg-white p-3 992:p-5 992:text-xl rounded-xl text-slate-500 w-[268px] 992:w-[356px] text-center">
      <h1>{question}</h1>
    </div>
  );
};

const Options = ({ answer, handleSelected }) => {
  return (
    <div
      className={`992:text-xl rounded-[1.2rem] w-[131.72px]  992:w-[179px] text-left ${
        answer ? "bg-[#8E5DF5] text-white" : "bg-white text-slate-500"
      } cursor-pointer py-2 992:py-3 px-1`}
      onClick={handleSelected}
    >
      A. Option 1
    </div>
  );
};

const QuestionSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSelectedAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleSelectedQuestion = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div className="flex flex-col justify-center 992:items-center gap-5">
      <Question />
      {/* options */}
      <div className="grid grid-cols-1 992:grid-cols-2 gap-y-2 992:gap-y-8 992:gap-x-14">
        {[1, 2, 3, 4].map((_, index) => (
          <Options
            key={index}
            answer={selectedAnswer === index}
            handleSelected={() => handleSelectedAnswer(index)}
          />
        ))}
      </div>
      {/* sliders */}
      <div className="grid grid-cols-3 gap-y-2 gap-x-3 w-fit mt-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className={`cursor-pointer py-[3.5px] sm:py-[5px] px-7 sm:px-11 rounded-[0.2rem] ${
              selectedQuestion === index ? "bg-[#F2C523]" : "bg-white"
            } mx-auto`}
            key={index}
            onClick={() => handleSelectedQuestion(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
