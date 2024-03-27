import React from "react";

const TotalResponse = ({TableBody, TableHeading}) => {
  return (
    <section className="w-full 785:w-[40%] bg-white rounded-xl h-fit">
      <div className="bg-[#8E5DF5] rounded-xl py-5">
        <p className="text-center py-3 text-white">
          Total responses (participants)
        </p>
        <h1 className="font-bold text-white text-center text-4xl md:text-5xl py-3">
          50
        </h1>
      </div>
      {/* table */}
      <div className="px-5 w-full overflow-x-auto">
      <table className="w-full  my-10 mx-auto table-auto">
        {/* table head */}
        <thead className="text-center">
          <tr>
            {Object.keys(TableHeading).map((key, index) => (
              <th className="pb-3" key={index}>{TableHeading[key].text}</th>
            ))}
          </tr>
        </thead>
        {/* table body */}
        <tbody className="w-full text-center">
          {TableBody.map((data, index) => (
            <tr key={index}>
              <td className="py-2">{data.perDay}</td>
              <td className="py-2">{data.responses}</td>
              <td className="py-2">{data.perState}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default TotalResponse;
