import React from "react";
import { Btn } from "../../../pages/researcher/Survey"; 
import { CirclePlus } from "lucide-react"; 
import { darkTheme, switchTheme } from "../../../data/data"; 

const QuestionInput = ({ resTheme }) => { // Declaring the QuestionInput component
  return (
    <div className="flex flex-col md:flex-row w-full 1320:w-[70%] px-2 focus-within:border-[#8E5DF5] rounded-lg border-gray-400 bg-transparent border-2"> {/* Main container */}
      <textarea
        className="focus:outline-none bg-transparent p-5 w-[70%] h-40 md:h-20 placeholder:font-bold resize-none overflow-hidden" // Styling for the textarea
        placeholder="Add a question" // Placeholder text for the textarea
      />
      {/* Badge container */}
      <div className="flex flex-col 344:flex-row gap-2 justify-center md:justify-normal items-center pb-3 md:pb-0  md:pr-3"> {/* Container for badges */}
        {/* Upload image badge */}
        <label
          htmlFor="file-upload"
          className={`${switchTheme(
            "bg-white",
            darkTheme,
            resTheme
          )} rounded-2xl h-fit shadow-md  whitespace-nowrap font-semibold  border border-gray-400 px-5 py-1 cursor-pointer`} // Styling for the upload image badge
        >
          upload image {/* Text content for the upload image badge */}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden" // Hidden input element for file upload
          />
        </label>
        {/* Multiple choice badge */}
        <label className="rounded-2xl shadow-md h-fit whitespace-nowrap font-semibold text-white bg-[#636387]  border-gray-[#636387] px-3 py-1 cursor-pointer"> {/* Styling for the multiple choice badge */}
          multiple choice {/* Text content for the multiple choice badge */}
        </label>
      </div>
    </div>
  );
};

export default QuestionInput; 
