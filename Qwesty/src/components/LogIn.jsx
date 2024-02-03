import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import qwesty from "./images/qwesty.jpg";
import qwest from "./images/qwesty.jpg";

export default function LogIn() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="max-w-720px relative bg-white mx-auto">
      <div className="flex">
        <div className="w-full hidden md:block">
          <div className="p-10 ml-[7%]">
            <Logo />
          </div>
          <div className="">
            <p className="text-4xl mt-[24%] ml-[37%] font-semibold">Log In</p>
            <div className="my-8 text-black/80">
              <label className="font-bold ml-[35%]" htmlFor="email">
                Enter your email
              </label>
            </div>
            <div className="mb-4  ml-[26%]">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-[60%]  p-2 border-b-2 focus:outline-none text-center"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="flex items-center mb-4 ml-[150px]">
              <input type="checkbox" id="check" className="mr-2" />
              <span>Remember for 30 days</span>
            </div>
            <Link to="/LogInn">
              <button className="bg-purple-500 mt-5 text-white ml-[32%] p-2 w-44 h-10 rounded-3xl">
                Next
              </button>
            </Link>
            <p className="mt-24 font-semibold ml-[27%] ">
              Dont have an account?{" "}
              <Link to="/signUp" className="text-purple-500">
                <span className="text-purple-500">Sign up</span>
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

<div
      className="md:hidden absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${qwest})` }}
    >
    <div className="">
            <p className="text-4xl mt-[24%] ml-[37%] font-semibold">Log In</p>
            <div className="my-8 text-black/80">
              <label className="font-bold ml-[35%]" htmlFor="email">
                Enter your email
              </label>
            </div>
            <div className="mb-4  ml-[26%]">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-[60%]  p-2 border-b-2 focus:outline-none text-center"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="flex items-center mb-4 ml-[150px]">
              <input type="checkbox" id="check" className="mr-2" />
              <span>Remember for 30 days</span>
            </div>
            <Link to="/LogInn">
              <button className="bg-purple-500 mt-5 text-white ml-[32%] p-2 w-44 h-10 rounded-3xl">
                Next
              </button>
            </Link>
            <p className="mt-24 font-semibold ml-[27%] ">
              Dont have an account?{" "}
              <Link to="/signUp" className="text-purple-500">
                <span className="text-purple-500">Sign uppp</span>
              </Link>
            </p>
          </div>
    </div>


      </div>
    </div>
  );
}
