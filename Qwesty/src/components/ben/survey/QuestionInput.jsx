import React, { useEffect, useState, useRef } from "react";
import { Btn } from "../../../pages/researcher/Survey";
import { ChevronDown, CirclePlus } from "lucide-react";
import { darkTheme, switchTheme } from "../../../data/data";
import MultipleChoiceQestion from "./MultipleChoiceQestion";
import QuestionComponent from "./QuestionComponent";

const QuestionInput = ({ resTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Multichoice"); // Default to "Multichoice"
  const options = [
    "Single select text",
    "Checkboxes",
    "Multichoice",
    "Open ended text",
    "Open ended number",
    "File upload",
    "Dropdown",
    "Linear scale",
    "Multi choice group",
    "Test completion",
    "Date",
    "Time",
  ];
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const optionComponents = {
    "Single select text": <QuestionComponent questionType={selectedOption} />,
    "Checkboxes": <QuestionComponent questionType={selectedOption} />,
    "Multichoice": <MultipleChoiceQestion />,
    "Open ended text": <QuestionComponent questionType={selectedOption} />,
    "Open ended number": <QuestionComponent questionType={selectedOption} />,
    "File upload": <QuestionComponent questionType={selectedOption} />,
    "Dropdown": <QuestionComponent questionType={selectedOption} />,
    "Linear scale": <QuestionComponent questionType={selectedOption} />,
    "Multi choice group": <QuestionComponent questionType={selectedOption} />,
    "Test completion": <QuestionComponent questionType={selectedOption} />,
    "Date": <QuestionComponent questionType={selectedOption} />,
    "Time": <QuestionComponent questionType={selectedOption} />
  };

  useEffect(() => {
    const closeSidebar = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, []);

  return (
    <section className="relative w-full 1320:w-[70%] px-2 focus-within:border-[#8E5DF5] rounded-lg border-gray-400 bg-transparent border-2">
      <div className="relative flex flex-col md:flex-row w-full rounded-lg bg-transparent">
        <textarea
          className="focus:outline-none bg-transparent p-5 w-[70%] h-40 md:h-20 placeholder:font-bold resize-none overflow-hidden"
          placeholder="Add a question"
        />
        <div className="flex flex-col 344:flex-row gap-2 justify-center md:justify-normal items-center pb-3 md:pb-0  md:pr-3">
          <label
            className={`${switchTheme(
              "transparent",
              darkTheme,
              resTheme
            )} rounded-2xl h-fit shadow-md  whitespace-nowrap font-semibold  border-[1px] border-gray-500 px-5 py-1 cursor-pointer`}
          >
            upload image
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
          <label
            className="rounded-2xl flex items-center gap-1 shadow-md h-fit whitespace-nowrap font-semibold text-white bg-[#636387]  border-gray-[#636387] px-3 py-1 cursor-pointer"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            {selectedOption || "multiple choice"} <ChevronDown size={20} />
          </label>
          <div className="absolute z-50 transform left-[88%] top-[20.7rem] -translate-x-1/2 -translate-y-1/2">
            {isOpen && (
              <div className={`option bg-white text-black rounded-lg py-2  shadow-md`}>
                {options.map((value, index) => (
                  <p
                    className="cursor-pointer  px-10 font-semibold pt-1 border-[1px] border-x-transparent border-t-transparent hover:border-b-[#763cbd] border-b-gray-300"
                    key={index}
                    onClick={() => handleOptionClick(value)}
                  >
                    {value}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {optionComponents[selectedOption]} 
    </section>
  );
};

export default QuestionInput;
