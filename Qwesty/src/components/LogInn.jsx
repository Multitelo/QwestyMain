import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import qwesty from "./images/qwesty.jpg";
import art from "./images/Art.png";

export default function LogIn() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };



  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
      <div className="flex">
        <div className="md:w-full">
          <div className="md:p-10 absolute top-10 left-10">
            <Logo />
          </div>

          <div className="md:mt-[40%] my-8 text-black/80  md:my-4 md:ml-[30%] ">
            <p className=" ml-[4%] my-12 font-semibold">Welcome back mandela</p>
  <label className="font-bold md:text-center" htmlFor="email">
    Please enter your password
  </label>
</div>
<div className="mb-4 ml-auto mr-auto md:mb-8 md:ml-[35%] md:mr-[26%]">
  <input
    type="email"
    name="email"
    id="email"
    value={email}
    onChange={handleEmailChange}
    className="w-full md:w-[60%] p-2 border-b-2 focus:outline-none text-center"
    placeholder="*******"
    required
  />
</div>
<div className="md:ml-[33%] ml-5">
  <Link to="/signInn">
    <button className="bg-purple-500 mt-5 text-white p-2 md:py-2  w-44 h-10 md:w-44 md:h-10 rounded-3xl">
      Ok
    </button>
  </Link>
</div>
<Link to="/referral">

<p className="font-semibold md:ml-[55%] ml-20 mt-10 underline cursor-pointer ">Forgot password?</p>
  </Link>
</div>

        <div className="hidden md:block">
          <p className="text-4xl mt-[24%] ml-[40%] font-semibold">Log In</p>
          <div className="my-8 text-black/80">
            <label className="font-bold ml-[35%]" htmlFor="email">
              Enter your password
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
              placeholder="********"
              required
            />
          </div>
          
          <Link to="/signedUp/settings">
            <button className="bg-purple-500 mt-5 text-white ml-[32%] p-2 w-44 h-10 rounded-3xl">Next</button>
          </Link>
          <p className="mt-32 underline font-semibold ml-[50%]">
            <Link to="/reset">
            Forgot password?
            </Link>
          </p>
          
        </div>
        <div>
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
