import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

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
          <p className="text-4xl mt-[24%] text-center font-semibold">Reset Password</p>
          <div className="my-8 text-black/80">
            <label className="font-bold ml-[34%]" htmlFor="email">
              Please what is your email
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
              placeholder="mandela@gmail.com"
              required
            />
          </div>
         
          <Link to="/reset">
            <button className="bg-purple-500 mt-5 text-white ml-[35%] p-2 w-44 h-10 rounded-3xl">Ok</button>
          </Link>
          
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/b2de/e3d9/eca46d083bc1a3361ca7df3e14b88285?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O6ZM5dzolBDtIqnpR01UPfrQV0Pj2bcVgIyJcVovwnLBJ2LiLhAh9t6RGv5aRHGXhF23IcSE1V6yovCALXXUtcnt8NAB~2n9hoLzz4GIWX7uPHpgvxnQoj1duer7iQP-gzNAvF8uBJs8cA9qBOuFWOamiKDS3sm77k~cdvIA2rwGsvyFyvmi6m5H4l-DTGF9~eMcUaKIaZAdKFIx5UKDUPn0HpTBt~4-5cvXvfQik6~KdJTh~9Ppj0qXiNlkJDcnANNitNeaR5x5baAn1Er2DrQ~WPHZJoZFu8MifS-cZwiHzuiRKWEUwl0A9Q2DCUL3eHnJHMygNUPjrQAZJI9iTw__"
            alt="colorful qwesty letters"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
