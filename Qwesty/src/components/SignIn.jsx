import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import qwesty from "./images/qwesty.jpg"



export default function LogIn() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="max-w-720px bg-white mx-auto">
      <div className="flex">
        <div className="w-full">
          <div className="p-10 ml-[7%]">
            <Logo />
          </div>
          <div className="">
          <div className="mt-[20%] my-8 text-black/80">
            <label className="font-bold ml-[30%]" htmlFor="email">
              Please enter your username
            </label>
          </div>
          <div className="mb-4 ml-[26%]">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-[60%] p-2 border-b-2 focus:outline-none text-center"
              placeholder="mandela"
              required
            />
          </div>
          
          <Link to="/signInn">
            <button className="bg-purple-500 mt-5 text-white ml-[32%] p-2 w-44 h-10 rounded-3xl">Next</button>
          </Link>
          
          
        </div></div>
        <div>
          <img
            src={qwesty}
            alt="colorful qwesty letters"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}