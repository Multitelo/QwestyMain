import { SearchIcon } from "lucide-react";
import React from "react";

const Searchbar = ({
  placeholder = "Placeholder...",
  handleSearch,
  showIcon = true,
  padding= 'px-5',
}) => {
  return (
    <div
      className={`flex w-full items-center gap-2 my-5 rounded-xl px-2 md:${padding} focus-within:border-[#8E5DF5] shadow-sm bg-[#F0F0F5] border-[2px]`}
    >
      {showIcon && <SearchIcon />}
      <input
        type="text"
        placeholder={placeholder}
        onClick={handleSearch}
        className="w-full px-3 py-2 md:py-3 placeholder:text-black placeholder:font-bold placeholder:text-md md:placeholder:text-xl bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
