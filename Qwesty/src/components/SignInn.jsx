import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import qwesty from "./images/qwesty.jpg";
import art from "./images/Art.png";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
      <div className="flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2">
          <div className="md:p-10 absolute top-10 left-10">
            <Logo />
          </div>
          <div className="md:px-10  my-8 md:mt-[30%] text-black/80">
            <label className="font-bold   md:ml-[39%]  md:text-center" htmlFor="email">
              Enter your email
            </label>
            <div className="mb-4 ml-auto mr-auto md:w-[60%]">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-2 border-b-2 focus:outline-none text-center mb-10"
                placeholder="mandela@gmail.com"
                required
              />
            </div>
            <label className="font-bold md:ml-[37%] py-9  md:text-center" htmlFor="password">
              Enter your password
            </label>
            <div className="mb-4 ml-auto mr-auto md:w-[60%]">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-2 border-b-2 focus:outline-none mb-10 text-center"
                placeholder="********"
                required
              />
            </div>
            <label className="font-bold  md:ml-[37%] md:text-center" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="mb-4 ml-auto mr-auto md:w-[60%]">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full p-2  border-b-2 focus:outline-none text-center"
                placeholder="********"
                required
              />
            </div>
            <div className="flex justify-center">
              <Link to="/signInn">
                <button className="bg-purple-500 mt-5 p-2 w-44 h-10 rounded-3xl">
                  Lets go!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <img
            src={qwesty}
            alt="colorful qwesty letters"
            className="max-w-full"
          />
        </div>
      </div>
      <div className="md:hidden absolute left-[70%] top-0 h-full w-[50%]">
        <img
          src={art}
          alt="colorful qwesty letters"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
