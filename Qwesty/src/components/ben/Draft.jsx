import React from "react";
import Sidebar from "../ben/Sidebar";
import Searchbar from "./Searchbar";
import { draftTableData } from "../../../data/data";

const Draft = () => {
  return (
    <div className="bg-white w-full h-screen">
      <section className="flex w-full h-[100h]">
        {/* sample sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-full h-[100%] flex justify-center bg-gray-300 p-2 md:p-10">
          <section className="w-full  rounded-2xl h-screen">
            <h1 className="draft font-bold text-3xl">Drafts</h1>
            <Searchbar placeholder="Search drafts..." showIcon={true} />
            {/* main */}

    <div className="w-full rounded-xl border-[1px] border-gray-400 p-5">
            <table className="w-full border-spacing-5">
              <thead>
                <tr>
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Summary</th>
                  <th className="px-5 py-3 whitespace-nowrap">Last Edited</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="border-spacing-5">
                {draftTableData.body.map((item, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 w-1/4 bg-red-400 rounded-lg m-5">{item.Title}</td>
                    <td className="px-5 py-3 w-1/4 bg-blue-400 rounded-lg m-5">{item.Summary}</td>
                    <td className="px-5 py-3 whitespace-nowrap bg-yellow-400 rounded-lg m-20 text-center w-1/4">{item.LastEdited}</td>
                    <td className="px-5 py-3 w-1/4">
                      <div className="flex flex-col justify-around items-center gap-5">
                        <button className="bg-white shadow-md px-10 py-2 rounded-lg hover:text-white hover:bg-[#8E5DF5] text-black">
                          Edit
                        </button>
                        <button className="bg-[#8E5DF5] shadow-md px-[1.7rem] py-2 rounded-lg hover:text-black hover:bg-white text-white">
                          Launch
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Draft;
