import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

const MultipleChoiceQuestion = () => {
  const [options, setOptions] = useState(["Option 1"]); 

  const addOption = () => {
    const newOptions = [...options, ""]; 
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1); 
    setOptions(newOptions);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value; 
    setOptions(newOptions);
  };

  return (
    <div className='px-3 py-2'>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 mr-2"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          {options.length > 1 && (
            <XIcon
              size={20}
              color='#8E5DF5'
              className='cursor-pointer'
              onClick={() => removeOption(index)}
            />
          )}
        </div>
      ))}
      <button
        className="bg-[#8E5DF5] text-white px-3 py-1 rounded-md mt-2"
        onClick={addOption}
      >
        Add Option
      </button>
    </div>
  );
};

export default MultipleChoiceQuestion;
