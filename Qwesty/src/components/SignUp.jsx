import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import qwesty from "./images/qwesty.jpg";

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex">
        <div className="w-full">
          <div className="p-10">
            <Logo />
          </div>
      
          <p className="text-4xl mt-[24%] ml-[30%] font-semibold">Sign Up</p>
          <div className="my-8 text-black/80 items-center">
            <label className="font-bold ml-[25%] text-center" htmlFor="email">
              Please enter your email
            </label>
            <div className="mb-4 ml-[26%] items-center">
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
            <div className="flex justify-center mb-4">
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
              <button className="bg-purple-500 mt-5 text-white ml-[32%] p-2 w-44 h-10 rounded-3xl">Ok</button>
            </Link>
            <p className="mt-24 font-semibold ml-[27%]">
              Already have an account?{" "}
              <Link to="/signIn" className="text-purple-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
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
