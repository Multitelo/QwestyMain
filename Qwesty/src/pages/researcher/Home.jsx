import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ResearchCard from "../../components/ben/research/ResearchCard";
import {
  ResearchPageData,
  darkTheme,
  filterOptions,
  researchTypeOptions,
  statusOptions,
  switchTheme,
  timePeriodOptions,
} from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import ResearchCardToast from "../../components/ben/research/ResearchCardToast";

const ResearchPage = () => {
  const { resTheme } = useTheme();
  const [sortBy, setSortBy] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedResearchType, setSelectedResearchType] =
    useState("Research Type");

  // descending order
  const sortArrowDown = () => {
    setSortType("active");
    setSortBy("desc");
  };
  // ascending order
  const sortArrowUp = () => {
    setSortType("active");
    setSortBy("asc");
  };
  // Filtered research data based on selected status
  const filteredResearchData = ResearchPageData.filter(
    (research) =>
      selectedStatus === "Status" ||
      research.status.toLowerCase() === selectedStatus.toLowerCase()
  );
  // Message to display when no research is found for selected status
  const noResearchMessage =
    selectedStatus === "Status" ? "" : `No ${selectedStatus} status is found`;

  return (
    <div className={`researcher-content ${resTheme}`}>
      <div className="researcher-menu">
        <SideBar />
      </div>
      <div className="home-main">
        <div className="top-section">
          <Top />
        </div>
        {/* content */}
        <div className="home-main-section">
          <div className="w-full  rounded-2xl  flex justify-center my-10">
            {/* main content */}
            <section
              className={`${switchTheme(
                "bg-white",
                darkTheme + " text-white",
                resTheme
              )} w-full  1097:w-[90%] rounded-xl`}
            >
              {/* heading */}
              <div className="heading 531:flex 531:justify-between  531:items-center py-5 px-2 531:px-10">
                <h1 className="text-3xl font-bold hidden 531:grid">Research</h1>
                <div className=" flex gap-2 flex-col 237:flex-row">
                  {/* status */}
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className={`py-2 hidden md:grid outline-none rounded-md border-[2px] ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                  >
                    {statusOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* Research Type */}
                  <select
                    value={selectedResearchType}
                    onChange={(e) => setSelectedResearchType(e.target.value)}
                    className={`py-2 outline-none rounded-md border-[2px] ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                  >
                    {researchTypeOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* This year */}
                  <select
                    defaultValue="This Year"
                    className={`hidden md:grid py-2 outline-none rounded-md border-[2px] ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                  >
                    {timePeriodOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* filter */}
                  <select
                    defaultValue="Filter"
                    className={`md:hidden grid py-2 outline-none rounded-md border-[2px] border-gray-300
                    ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                  >
                    {filterOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* sorting */}
              <div className="sorting px-10 hidden sm:flex gap-5 mb-5">
                <h1 className="text-xl font-semibold">Number reached</h1>
                <div className="flex cursor-pointer">
                  {/* descending sort */}
                  <ArrowDown
                    onClick={sortArrowDown}
                    color={
                      sortType === "active" && sortBy === "desc"
                        ? "#8E5DF5"
                        : switchTheme("#000000", "#ffffff", resTheme)
                    }
                  />
                  {/* ascending sort */}
                  <ArrowUp
                    onClick={sortArrowUp}
                    color={
                      sortType === "active" && sortBy === "asc"
                        ? "#8E5DF5"
                        : switchTheme("#000000", "#ffffff", resTheme)
                    }
                  />
                </div>
              </div>
              {/* main */}
              <div className="w-full px-2 531:px-10">
                {filteredResearchData.length === 0 ? (
                  <ResearchCardToast noResearchMessage={noResearchMessage} />
                ) : (
                  filteredResearchData
                    .sort((a, b) => {
                      if (sortBy === "asc") {
                        return (
                          parseInt(a.numberReached) - parseInt(b.numberReached)
                        );
                      } else if (sortBy === "desc") {
                        return (
                          parseInt(b.numberReached) - parseInt(a.numberReached)
                        );
                      } else {
                        return 0;
                      }
                    })
                    .map((research, index) => (
                      <ResearchCard
                        key={index}
                        status={research.status}
                        statusColorBg={
                          research.status === "completed"
                            ? "#C7FBC6"
                            : research.status === "paused"
                            ? "#FBF9C6"
                            : "#E9DFFF"
                        }
                        statusColorText={
                          research.status === "completed"
                            ? "green"
                            : research.status === "paused"
                            ? "#B7B00E"
                            : "purple"
                        }
                        title={research.title}
                        researchType={research.researchType}
                        numberReached={research.numberReached}
                        amountSpent={research.amountSpent}
                      />
                    ))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ResearchPage;
