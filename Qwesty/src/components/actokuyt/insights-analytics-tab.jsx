import React from "react";
import { Download, ListFilter, GitCompareArrows, X } from "lucide-react";
import ApexCharts from "./apex-chart";
import MuiSelect from "./mui-select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { switchTheme } from "../../data/data";
import { useTheme } from "../../context/ThemeContext";

function TabButton({ className, isActive, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: isActive ? "1px solid #37D8AD" : "1px solid transparent",
      }}
      className={className}
    >
      {label}
    </button>
  );
}

const analyticsTabs = [
  { label: "Table Chart" },
  { label: "Visualization Style" },
];

const questionButtons = [
  {
    label: "Question 1",
  },
  {
    label: "Question 2",
  },
  {
    label: "Question 3",
  },
  {
    label: "Question 4",
  },
  {
    label: "Question 5",
  },
  {
    label: "Question 6",
  },
  {
    label: "Question 7",
  },
];

export default function InsightsAnalyticsTab(params) {
  const { resTheme } = useTheme();

  const [activeTab, setActiveTab] = React.useState(0);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  const [filterOpen, setFilterOpen] = React.useState(false);
  const handleFilterOpen = () => setFilterOpen(true);
  const handleFilterClose = () => setFilterOpen(false);

  const [compareOpen, setCompareOpen] = React.useState(false);
  const handleCompareOpen = () => setCompareOpen(true);
  const handleCompareClose = () => setCompareOpen(false);

  const bgColor = switchTheme("bg-white", "bg-[#2a2a27]", resTheme);
  const textColor = switchTheme("text-black", "text-white", resTheme);
  const borderColor = switchTheme("border-gray-800", "border-[#9a9a98]", resTheme)


  return (
    <div>
      <div className="grid grid-cols-2 gap-4 justify-center md:w-2/5">
        {analyticsTabs.map((analyticTab, index) => {
          return (
            <TabButton
              key={index}
              isActive={activeTab === index}
              label={analyticTab.label}
              onClick={() => handleTabClick(index)}
              className={`${bgColor} ${textColor} py-[0.8em] rounded-xl drop-shadow-md`}
            />
          );
        })}
      </div>

      {activeTab === 0 ? (
        <div>
          <div className="md:w-1/2 mx-auto">
            <h1 className="text-2xl font-semibold text-center mt-8">
              Export Your Data
            </h1>

            <p className="text-sm text-[#636387] text-center mt-2">
              Download your data into a CSV file for use in other applications
            </p>

            <div className="flex flex-col my-8">
              <button className="p-4 bg-[#4285F4] text-white rounded-2xl my-2">
                <img
                  src="/actokuyt/docs.png"
                  alt="excel"
                  width={35}
                  height={35}
                  className="inline mr-2 rotate-0 w-[30px] h-[35px]"
                />
                Export To Google Sheets
              </button>
              <button className="p-4 bg-[#2AAC6E] text-white rounded-2xl my-2">
                <img
                  src="/actokuyt/excel.png"
                  alt="excel"
                  width={35}
                  height={35}
                  className="inline mr-2 rotate-0"
                />
                Export To Microsoft Excel
              </button>
            </div>
          </div>

          <button className="bg-[#5E6A82] p-4 rounded-2xl flex text-white">
            <span className="text-[#FFF3C7] inline mr-2">
              <Download />
            </span>{" "}
            <span className="">Download All</span>
          </button>
        </div>
      ) : activeTab === 1 ? (
        <div className="mt-8">
          <div className="mb-8">
            <div className="flex flex-row justify-end">
              <div className=" hidden md:block">
                <button
                  onClick={handleCompareOpen}
                  className={`${bgColor} ${textColor} text-gray-700 rounded-xl border-[1px] border-gray-500 flex drop-shadow-md px-4 py-2 mr-4`}
                >
                  <span className="mr-2">
                    <GitCompareArrows />
                  </span>
                  Compare
                </button>
                <Modal
                  open={compareOpen}
                  onClose={handleCompareClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: 24,
                      p: 4,
                    }}
                    className={`${bgColor} ${textColor} w-[70%] mx-auto rounded-lg`}
                  >
                    <span
                      onClick={handleCompareClose}
                      className="block absolute right-4 top-4"
                    >
                      <X />
                    </span>

                    <div className="grid grid-cols-2 gap-16">
                      <div>
                        <h1 className="text-xl font-semibold mb-8">
                          Compare This
                        </h1>

                        <div className="flex flex-row flex-wrap justify-center mb-8">
                          {questionButtons.map((question, index) => {
                            return (
                              <button className={`${bgColor} ${textColor} ${borderColor} border-[1px] px-4 py-2 rounded-2xl m-2`}>
                                {question.label}
                              </button>
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <MuiSelect
                            defaultState={"male"}
                            label={"By Participants Gender"}
                            options={["male", "female", "other"]}
                          />
                          <MuiSelect
                            defaultState={"Lagos"}
                            label={"By Location"}
                            options={["Lagos", "Abuja", "Anambra"]}
                          />
                          <MuiSelect
                            defaultState={"Andriod"}
                            label={"By Device Used"}
                            options={["Andriod", "iOS", "other"]}
                          />
                        </div>
                      </div>

                      <div>
                        <h1 className="text-xl font-semibold mb-8">
                          With This
                        </h1>

                        <div className="flex flex-row flex-wrap justify-center mb-8">
                          {questionButtons.map((question, index) => {
                            return (
                              <button className={`${bgColor} ${textColor} ${borderColor} border-[1px] px-4 py-2 rounded-2xl m-2`}>
                                {question.label}
                              </button>
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <MuiSelect
                            defaultState={"male"}
                            label={"By Participants Gender"}
                            options={["male", "female", "other"]}
                          />
                          <MuiSelect
                            defaultState={"Lagos"}
                            label={"By Location"}
                            options={["Lagos", "Abuja", "Anambra"]}
                          />
                          <MuiSelect
                            defaultState={"Andriod"}
                            label={"By Device Used"}
                            options={["Andriod", "iOS", "other"]}
                          />
                        </div>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>

              <div>
                <button
                  onClick={handleFilterOpen}
                  className={`${bgColor} ${textColor} text-gray-700 rounded-xl border-[1px] border-gray-500 flex drop-shadow-md px-4 py-2`}
                >
                  <span className="mr-2">
                    <ListFilter />
                  </span>
                  Filter
                </button>
                <Modal
                  open={filterOpen}
                  onClose={handleFilterClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: 24,
                      p: 4,
                    }}
                    className={`${bgColor} ${textColor} w-[90%] mx-auto rounded-lg md:w-[30%]`}
                  >
                    <span
                      onClick={handleFilterClose}
                      className="block absolute right-4 top-4"
                    >
                      <X />
                    </span>
                    <div>
                      <h1 className="text-xl font-semibold mb-8">
                        Analytics Filter
                      </h1>

                      <div className="flex flex-row flex-wrap justify-center mb-8">
                        {questionButtons.map((question, index) => {
                          return (
                            <button className={`${bgColor} ${textColor} ${borderColor} border-[1px] px-4 py-2 rounded-2xl m-2`}>
                              {question.label}
                            </button>
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <MuiSelect
                          label={"By Participants Gender"}
                          options={["male", "female", "other"]}
                        />
                        <MuiSelect
                          label={"By Location"}
                          options={["Lagos", "Abuja", "Anambra"]}
                        />
                        <MuiSelect
                          label={"By Device Used"}
                          options={["Andriod", "iOS", "other"]}
                        />
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-8">
            <div className={`${bgColor} ${textColor} rounded-xl`}>
              <div className="mb-8">
                <h1 className="text-lg font-semibold py-6 px-2">
                  Question 1
                  <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
                    multiple choice
                  </span>
                </h1>
                <p className="px-2 mb-6">
                  How inspired are you to be your best here?
                </p>
                <span className="text-black px-2 py-4 ml-2 rounded-lg bg-[#FFF3C7] ">
                  28 answered
                </span>
                <span className="px-2 py-4 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
                  8 skipped
                </span>
              </div>
              <div className="">
                <ApexCharts type={"bar"} />
              </div>
            </div>

            <div className={`${bgColor} ${textColor} rounded-xl`}>
              <div className="mb-8">
                <h1 className="text-lg font-semibold py-6 px-2">
                  Question 1
                  <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
                    multiple choice
                  </span>
                </h1>
                <p className="px-2 mb-6">
                  How inspired are you to be your best here?
                </p>
                <span className="text-black px-2 py-4 ml-2 rounded-lg bg-[#FFF3C7] ">
                  28 answered
                </span>
                <span className="px-2 py-4 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
                  8 skipped
                </span>
              </div>
              <div className="">
                <ApexCharts type={"line"} />
              </div>
            </div>
          </div>
          <button className="bg-[#5E6A82] p-4 rounded-2xl flex text-white">
            <span className="text-[#FFF3C7] inline mr-2">
              <Download />
            </span>{" "}
            <span className="">Download All</span>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
