import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ResearchCard from "../../components/ben/ResearchCard";
import { ResearchPageData } from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const {resTheme} = useTheme()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
  };
  const handleClose = () => {
  };
  useEffect(() => {
    const closeSidebar = (event) => {
      if (open && !event.target.closest(".options")) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", closeSidebar);

    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, [open]);

  return (

    <div className={`researcher-content ${resTheme}`}>
        <div className="researcher-menu">
          <SideBar/>
        </div>

        <div className="home-main">
        <div className="top-section">
          <Top/>
        </div>
        <div className="home-main-section">
          {/* content */}
          <section className="bg-white w-full   1097:w-[80%] rounded-xl">
            {/* heading */}
            <div className="heading 531:flex 531:justify-between 531:items-center py-5 px-2 531:px-10">
              <h1 className="text-3xl font-bold hidden 531:grid">Researcher</h1>
              <div className=" flex gap-2 flex-col 237:flex-row">
                <select
                  defaultValue="Status"
                  className="hidden md:grid py-2 outline-none rounded-md border-[2px] border-gray-300"
                >
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Status">Status</option>
                </select>
                <select
                  defaultValue="Research Type"
                  className="py-2 outline-none rounded-md border-[2px] border-gray-300"
                >
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Research Type">Research Type</option>
                </select>
                <select
                  defaultValue="This Year"
                  className="hidden md:grid py-2 outline-none rounded-md border-[2px] border-gray-300"
                >
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="This Year">This Year</option>
                </select>
                <select
                  defaultValue="Filter"
                  className="md:hidden grid py-2 outline-none rounded-md border-[2px] border-gray-300"
                >
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Filter">Filter</option>
                </select>
              </div>
            </div>
            {/* sorting */}
            <div className="sorting px-10 hidden sm:flex gap-5 mb-5">
              <h1 className="text-xl font-semibold">Number reached</h1>
              <div className="flex">
                <ArrowDown />
                <ArrowUp />
              </div>
            </div>
            {/* main */}
            <div className="w-full px-2 531:px-10">
              {ResearchPageData.map((research, index) => (
                <ResearchCard
                key={index}
                  status={research.status}
                  statusColor={
                    research.status == "completed"
                      ? "green"
                      : research.status == "incomplete"
                      ? "red"
                      : "purple"
                  }
                  title={research.title}
                  researchType={research.researchType}
                  numberReached={research.numberReached}
                  amountSpent={research.amountSpent}
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              ))}
            </div>
          </section>
          
        </div>
        </div>

        
      </div>
  )
};

export default Home;
