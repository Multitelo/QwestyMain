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
          <p className="text-4xl mt-[24%] ml-[37%] font-semibold">Sign Up</p>
          <div className="my-8 text-black/80">
            <label className="font-bold ml-[33%]" htmlFor="email">
              Please enter your email
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
              placeholder="name@gmail.com"
              required
            />
          </div>
          
          <Link to="/signIn">
            <button className="bg-purple-500 mt-5 text-white ml-[32%] p-2 w-44 h-10 rounded-3xl">Ok</button>
          </Link>
          <p className="mt-24 font-semibold ml-[27%] ">
            Already have an account? {" "}
            <Link to="/signUp" className="text-purple-500">
              <span className="text-purple-500">Log In</span>
            </Link>
          </p>
          
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
