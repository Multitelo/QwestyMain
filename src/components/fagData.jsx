import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";

export default function FagData({question, answer}) {
    const [open, SetOpen] = useState(false)
    const toggle = ()=>{
        SetOpen(!open)
    }
  return (
    <div>
      <div className="">
    <div
      className="bg-gray-200 rounded-2xl  p-4 cursor-pointer"
      onClick={toggle}
    >
      <h2 className=" flex justify-between items-center font-semibold relative">{question} <span><GoPlus /></span></h2>
    </div>
    {open && <p className="mt-2 text-white absolute bg-[#040404] w-[476px] h-[150px] rounded-b-2xl p-5 z-50">{answer}</p>}
  </div></div>
  )
}
