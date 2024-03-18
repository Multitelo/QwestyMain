import React from "react";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, switchTheme } from "../../data/data";
import Button from "../../components/ben/Button";
import { CirclePlus } from "lucide-react";

const Btn = ({ children, onClick, theme, width, padding }) => {
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
          <section
            className={`w-full  rounded-2xl h-[100vh] my-10 p-3 ${switchTheme(
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
                <section className="my-5">
                  <div className="flex w-1/4 gap-5">
                    <button
                      className={`${switchTheme(
                        "bg-gray-200",
                        "bg-[#43433F]",
                        resTheme
                      )} w-1/2 font-bold shadow-md px-5 rounded-lg py-1`}
                    >
                      <span className="text-sm whitespace-nowrap">
                        Multiple choice
                      </span>
                    </button>
                    <button
                      className={`${switchTheme(
                        "bg-gray-200",
                        "bg-[#43433F]",
                        resTheme
                      )} w-1/2 font-bold shadow-md px-5 rounded-lg py-1`}
                    >
                      <span className="text-sm whitespace-nowrap">
                        Short text
                      </span>
                    </button>
                  </div>
                  <div className="flex w-1/4 gap-5 my-5">
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
                  </div>
                </section>
                {/* create question */}
                <section
                  className={`${switchTheme(
                    "text-black",
                    "text-white",
                    resTheme
                  )} mt-[100px]`}
                >
                  <h1 className="font-bold text-xl">Page 1 of 3</h1>
                  {/* input */}
                  <div className="flex items-center gap-10 mt-5">
                    <div className="flex w-[70%] px-2 focus-within:border-[#8E5DF5] rounded-lg border-gray-400 bg-transparent border-2">
                      <input
                        type="text"
                        className="focus:outline-none bg-transparent p-5 w-[70%] placeholder:font-bold"
                        placeholder="Add a question"
                      />
                      {/* Badge container */}
                      <div className="flex gap-2 items-center pr-3">
                        {/* Upload image badge */}
                        <label
                          htmlFor="file-upload"
                          className={`${switchTheme(
                            "bg-white",
                            darkTheme,
                            resTheme
                          )} rounded-2xl h-fit shadow-md  whitespace-nowrap font-semibold  border border-gray-400 px-5 py-1 cursor-pointer`}
                        >
                          upload image
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </label>
                        {/* Multiple choice badge */}
                        <label className="rounded-2xl shadow-md h-fit whitespace-nowrap font-semibold text-white bg-[#636387]  border-gray-[#636387] px-3 py-1 cursor-pointer">
                          multiple choice
                        </label>
                      </div>
                    </div>
                    <Btn
                      padding={`0.7rem 20px`}
                      theme={switchTheme(
                        "bg-[#8E5DF5] text-white",
                        "bg-[#8E5DF5] text-white",
                        resTheme
                      )}
                    >
                      <span className="flex gap-3 items-center">
                        <CirclePlus /> Next
                      </span>
                    </Btn>
                  </div>
                  <div className="flex items-center gap-10 mt-5">
                    <div className="flex w-[70%] px-2 focus-within:border-[#8E5DF5] rounded-lg border-gray-400 bg-transparent border-2">
                      <input
                        type="text"
                        className="focus:outline-none bg-transparent p-5 w-[70%] placeholder:font-bold"
                        placeholder="Add a question"
                      />
                      {/* Badge container */}
                      <div className="flex gap-2 items-center pr-3">
                        {/* Upload image badge */}
                        <label
                          htmlFor="file-upload"
                          className={`${switchTheme(
                            "bg-white",
                            darkTheme,
                            resTheme
                          )} rounded-2xl h-fit shadow-md  whitespace-nowrap font-semibold  border border-gray-400 px-5 py-1 cursor-pointer`}
                        >
                          upload image
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </label>
                        {/* Multiple choice badge */}
                        <label className="rounded-2xl shadow-md h-fit whitespace-nowrap font-semibold text-white bg-[#636387]  border-gray-[#636387] px-3 py-1 cursor-pointer">
                          multiple choice
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 mt-5">
                    <div className="flex w-[70%] px-2 focus-within:border-[#8E5DF5] rounded-lg border-gray-400 bg-transparent border-2">
                      <input
                        type="text"
                        className="focus:outline-none bg-transparent p-5 w-[70%] placeholder:font-bold"
                        placeholder="Add a question"
                      />
                      {/* Badge container */}
                      <div className="flex gap-2 items-center pr-3">
                        {/* Upload image badge */}
                        <label
                          htmlFor="file-upload"
                          className={`${switchTheme(
                            "bg-white",
                            darkTheme,
                            resTheme
                          )} rounded-2xl h-fit shadow-md  whitespace-nowrap font-semibold  border border-gray-400 px-5 py-1 cursor-pointer`}
                        >
                          upload image
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </label>
                        {/* Multiple choice badge */}
                        <label className="rounded-2xl shadow-md h-fit whitespace-nowrap font-semibold text-white bg-[#636387]  border-gray-[#636387] px-3 py-1 cursor-pointer">
                          multiple choice
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section className="w-[70%] pl-5">
            <div >
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="50"
                className="block rounded-full bg-gray-200"
              >
                <span
                  className="block h-3 rounded-full bg-[#37D8AD] text-center text-[10px]/4"
                  style={{width: "50%"}}
                >
                  <span className="font-bold text-white"> 50% </span>
                </span>
              </span>
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
