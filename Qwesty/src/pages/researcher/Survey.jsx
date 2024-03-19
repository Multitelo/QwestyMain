import React, { useState } from "react";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, switchTheme } from "../../data/data";
import { CirclePlus } from "lucide-react";
import ProgressBar from "../../components/ben/survey/ProgressBar";
import QuestionInput from "../../components/ben/survey/QuestionInput";

export const Btn = ({ children, onClick, theme, width, padding }) => {
  return (
    <div>
      <button
        className={`${theme} shadow-md text-sm font-bold whitespace-nowrap rounded-md`}
        onClick={onClick}
        style={{ width: width, padding: padding }}
      >
        {children}
      </button>
    </div>
  );
};

const Survey = () => {
  const { resTheme } = useTheme();
  const [questions, setQuestions] = useState([1]);

  return (
    <div className={`researcher-content ${resTheme}`}>
      <div className="researcher-menu">
        <SideBar />
      </div>
      <div className="home-main">
        <div className="top-section">
          <Top />
        </div>
        {/* content */}
        <div className="home-main-section">
          {/* heading */}
          <section
            className={`w-full  rounded-2xl h-[100h] my-10 p-3 ${switchTheme(
              "bg-gray-100",
              darkTheme,
              resTheme
            )}`}
          >
            <h1
              className={`draft font-bold text-3xl ${switchTheme(
                "text-black",
                "text-white",
                resTheme
              )}`}
            >
              Prepare your survey
            </h1>
            {/* subtitle */}
            <div className="my-2">
              <p className="text-gray-500">
                <span>{"survey info:".toLocaleUpperCase()}</span> personal
                questions
              </p>
              <p className="text-gray-500 py-2">
                This is how your questions will appear to participants. Use the
                buttons below to navigate between questions and preview
                different question types.
              </p>
            </div>
            {/* set question */}
            <div>
              {/* section 1 */}
              <div
                className={`${switchTheme(
                  "text-black",
                  "text-white",
                  resTheme
                )}`}
              >
                <p>Questions 1 of 10</p>
                <h3 className={`font-bold py-2`}>
                  What is your favorite food?
                </h3>

                {/* button fex */}
                <section className="my-5 grid grid-cols-1 280:grid-cols-2 gap-10 md:gap-4 w-full 627:w-1/2 1157:w-1/3 1320:w-1/4">
                  <button
                    className={`${switchTheme(
                      "bg-gray-200",
                      "bg-[#43433F]",
                      resTheme
                    )} w-full text-sm whitespace-nowrap font-bold shadow-md px-5 rounded-lg py-1`}
                  >
                    Multiple choice
                  </button>
                  <button
                    className={`${switchTheme(
                      "bg-gray-200",
                      "bg-[#43433F]",
                      resTheme
                    )} w-full text-sm whitespace-nowrap font-bold shadow-md px-5 rounded-lg py-1`}
                  >
                    Short text
                  </button>
                  <Btn
                    width={`100%`}
                    padding={`0.75rem 55px`}
                    theme={switchTheme(
                      "bg-[#8E5DF5] text-white",
                      "bg-[#8E5DF5] text-white",
                      resTheme
                    )}
                  >
                    Next
                  </Btn>
                  <Btn
                    width={`100%`}
                    padding={`0.75rem 13px`}
                    theme={switchTheme(
                      "bg-white text-black",
                      "bg-[#43433F] text-white",
                      resTheme
                    )}
                  >
                    Delete Question
                  </Btn>
                </section>

                {/* create question */}
                <section
                  className={`${switchTheme(
                    "text-black",
                    "text-white",
                    resTheme
                  )} mt-[100px]`}
                >
                  <h1 className="font-bold text-xl mb-5">Page 1 of 3</h1>
                  {/* input */}
                  <section className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row h-fit items-center gap-10 w-full">
                      <QuestionInput resTheme={resTheme} />
                      <button
                        onClick={() =>
                          setQuestions([...questions, questions.length + 1])
                        }
                        className={`flex w-full h-fit sm:w-fit gap-3 py-3 px-8 rounded-md font-bold justify-center items-center whitespace-nowrap ${switchTheme(
                          "bg-[#8E5DF5] text-white",
                          "bg-[#8E5DF5] text-white",
                          resTheme
                        )}`}
                      >
                        <CirclePlus />
                        <span>Add</span>
                      </button>
                    </div>
                    {/* additonal buttons down here */}
                    {questions.map((questionIndex) => (
                      <QuestionInput key={questionIndex} resTheme={resTheme} />
                    ))}
                  </section>
                </section>
              </div>
            </div>
          </section>

          <section className="w-full 1320:w-[70%] px-5 md:px-0">
            <p
              className={`font-semibold py-3 ${switchTheme(
                "text-black",
                "text-white",
                resTheme
              )}`}
            >
              Total Questions
            </p>
            <div className="flex flex-col md:flex-row gap-10 md:gap-40 justify-center md:justify-between items-center w-full mb-20">
              <ProgressBar progress={85} label={85} />
              <Btn
                padding={`0.7rem 20px`}
                theme={switchTheme(
                  "bg-[#8E5DF5] text-white",
                  "bg-[#8E5DF5] text-white",
                  resTheme
                )}
              >
                Preview survey
              </Btn>
            </div>
          </section>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Survey;
