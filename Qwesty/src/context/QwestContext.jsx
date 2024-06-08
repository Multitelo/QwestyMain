import React, { createContext, useState, useContext } from "react";

const QwestContext = createContext();

export const useQwest = () => useContext(QwestContext);

export const QwestProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [responses, setResponses] = useState([]);
  const [progress, setProgress] = useState(0);
  const totalQuestions = 10;

  // Function to start the quiz
  const startQwest = () => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setProgress(0);
  };

  // Function to handle answering a question
  const answerQuestion = (answer) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = { answer, status: "answered" };
    setResponses(newResponses);
    nextQuestion(newResponses);
  };

  // Function to handle skipping a question
  const skipQuestion = () => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = { answer: null, status: "not answered" };
    setResponses(newResponses);
    nextQuestion(newResponses);
  };

  // Function to go to the next question
  const nextQuestion = (newResponses) => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      updateProgress(newResponses);
    } else {
      // Quiz is complete
      setCurrentQuestionIndex(null);
      updateProgress(newResponses);
    }
  };

  // Function to update the progress based on responses
  const updateProgress = (responses) => {
    const answeredCount = responses.filter((response) => response).length;
    const newProgress = (answeredCount / totalQuestions) * 100;
    setProgress(newProgress);
  };

  return (
    <QwestContext.Provider
      value={{
        currentQuestionIndex,
        responses,
        progress,
        startQwest,
        answerQuestion,
        skipQuestion,
      }}
    >
      {children}
    </QwestContext.Provider>
  );
};
