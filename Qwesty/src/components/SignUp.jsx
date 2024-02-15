import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import qwesty from "./images/qwesty.jpg";
import art from "./images/Art.png";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("participant");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
      <div className="flex">
        <div className="md:w-full">
          <div className="md:p-10">
            <Logo />
          </div>
      
          <p className="text-4xl mt-[24%] md:ml-[35%] ml-[24%] font-semibold">Sign Up</p>
          <div className="my-8 text-black/80 items-center">
            <label className="font-bold md:ml-[32%] ml-[15%] text-center" htmlFor="email">
              Please enter your email
            </label>
            <div className="mb-4 ml-auto mr-auto md:mb-8 md:ml-[35%] md:mr-[26%]">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full md:w-[60%] p-2 border-b-2 focus:outline-none text-center"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="flex md:ml-[28%] ml-[6%] mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="accountType"
                  value="participant"
                  checked={accountType === 'participant'}
                  onChange={handleAccountTypeChange}
                />
                <span className="ml-2">Participant</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="accountType"
                  value="researcher"
                  checked={accountType === 'researcher'}
                  onChange={handleAccountTypeChange}
                />
                <span className="ml-2">Researcher</span>
              </label>
            </div>
            <Link to="/signIn">
              <button className="bg-purple-500 mt-5 z-50 text-white md:ml-[32%] ml-10 p-2 w-44 h-10 rounded-3xl">Ok</button>
            </Link>
            <p className="mt-24 font-semibold md:ml-[27%] ">
              Already have an account?{" "}
              <Link to="/logIn" className="text-purple-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={qwesty}
            alt="colorful qwesty letters"
            className="max-w-full"
          />
        </div>
        <div className="md:hidden absolute left-[70%] top-0 h-full w-[50%]">
          <img
            src={art}
            alt="colorful qwesty letters"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
