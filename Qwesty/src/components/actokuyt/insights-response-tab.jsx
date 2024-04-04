import React from "react";
import {
  switchTheme,
  ResponseByParticipants,
  ResponseByQuestions,
} from "../../data/data";
import { Download, Zap, ListOrdered, X } from "lucide-react";
import MuiSelect from "../../components/actokuyt/mui-select";
import { Button } from "../../components/ben/insights";
import { useTheme } from "../../context/ThemeContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function InsightsResponseTab() {
  const { resTheme } = useTheme();
  //Response Page Modal Handlers
  const [openParticipantsModal, setOpenParticipantsModal] =
    React.useState(false);
  const [participantsModalTriggerId, setParticipantsModalTriggerId] =
    React.useState("");
  function handleParticipantsModalOpen(triggerId) {
    setParticipantsModalTriggerId(triggerId);
    setOpenParticipantsModal(true);
  }
  const handleParticipantsModalClose = () => setOpenParticipantsModal(false);

  const [openQuestionsModal, setOpenQuestionsModal] = React.useState(false);
  const [questionsModalTriggerId, setQuestionsModalTriggerId] =
    React.useState("");
  function handleQuestionsModalOpen(triggerId) {
    setQuestionsModalTriggerId(triggerId);
    setOpenQuestionsModal(true);
  }
  const handleQuestionsModalClose = () => setOpenQuestionsModal(false);

  let defaultState = "completed"
  let label = "sort"
  let options = [
    "completed",
    "uncompleted",
  ]

  const bgColor = switchTheme("bg-white", "bg-[#2a2a27]", resTheme)
  const textColor = switchTheme("text-black", "text-white", resTheme)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5em] mb-[5em]">

        <div className={`${bgColor} min-h-[30em] rounded-2xl`}>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">

            <span className="bg-[#EAE1FF] text-[#410FA8] w-[65%] md:w-[83%] text-lg rounded-full  h-[2.8em] flex items-center">

              <p className="inline p-4">By Participants</p>

              <span className="bg-[#CBB5FF] rounded-full py-[0.5em] px-[1em]">
                {ResponseByParticipants.length}
              </span>

            </span>

            <span className="w-[50%] md:justify-self-end">
              <MuiSelect defaultState = {defaultState} label = {label} options = {options}/>
            </span>

          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 w-[90%] mx-auto p-4">

              <div className="justify-self-center">
                <h6 className="font-semibold">Names</h6>
              </div>

              <div className="justify-self-end">
                <h6 className="font-semibold">Time</h6>
              </div>

            </div>
            <div>
              {ResponseByParticipants.map((participant, index) => (
                <div key={index}>
                  <div
                    className="flex flex-row border-t-2 px-4 py-2 items-center"
                    onClick={() =>
                      handleParticipantsModalOpen(participant.name)
                    }
                  >
                    <img
                      src={participant.avatar}
                      alt={participant.name}
                      className="w-[50px] h-[50px]"
                    />
                    <div className="w-[70%] py-2 px-4">
                      <h4 className=" font-semibold">{participant.name}</h4>
                      <div className="text-[#856B0C] text-xs">
                        <h6 className="">{participant.date}</h6>
                        <h6>{participant.time}</h6>
                      </div>
                    </div>
                    <h6>{participant.duration}</h6>
                  </div>
                  <Modal
                    open={openParticipantsModal}
                    // onClose={handleClose}
                    slotProps={{
                      backdrop: {
                        sx: {
                          display: `none`,
                        },
                      },
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box className={`${bgColor} absolute top-[50%] left-[50%] w-[98%] rounded-xl shadow-black -translate-y-1/2 -translate-x-1/2 mx-auto p-4  md:right-0 md:max-w-[35%] md:max-h-[100%] md:-translate-x-0 md:mr-12`}>
                      <span
                        onClick={handleParticipantsModalClose}
                        className={` ${textColor} block w-[24px] p-2 absolute right-8`}
                      >
                        <X />
                      </span>
                      {ResponseByParticipants.map((participant, index) => {
                        if (participant.name === participantsModalTriggerId) {
                          return (
                            <div>
                              <div className="my-4">
                                <h1 className={`${textColor} font-semibold`}>
                                  {`Viewing ${participant.name}`}{" "}
                                </h1>
                                <p className="text-sm text-[#9A9696]">
                                  Participants answers are highlighted in yellow
                                </p>
                              </div>
                              <div className="flex flex-col ">
                                {participant.questions.map(
                                  (question, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="flex flex-row items-center mb-4"
                                      >
                                        <span className="bg-[#E3E3FF] p-4 h-16 w-16 rounded-lg mr-4">
                                          <ListOrdered size={35} />
                                        </span>
                                        <div>
                                          <h1 className={`${textColor} font-semibold mb-2`}>{`Q ${
                                            index + 1
                                          }`}</h1>
                                          <p className="text-[#636387] text-sm">
                                            {question.type}
                                          </p>
                                          <p className="text-[#636387] text-sm mb-4">
                                            {question.question}
                                          </p>
                                          <span className="text-[#636387] text-sm">
                                            <span className="mr-2 text-[#37D8AD]">
                                              Ans:
                                            </span>
                                            <span className="bg-[#FFF3C7] text-[#574505] p-2">
                                              {question.answer}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          );
                        }
                      })}
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${bgColor} min-h-[30em] rounded-2xl`}>
          <div className="p-4 grid grid-cols-2">
            <span className="bg-[#EAE1FF] text-[#410FA8] w-[121%] md:w-[75%] text-lg rounded-full  h-[2.8em] flex items-center">
              <p className="inline p-4">By Questions</p>
              <span className="bg-[#CBB5FF] rounded-full py-[0.5em] px-[1em]">
                {ResponseByQuestions.length}
              </span>
            </span>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 w-[95%] mx-auto p-4">
              <div className="justify-self-center">
                <h6 className="font-semibold">Question</h6>
              </div>
              <div className="justify-self-end">
                <h6 className="font-semibold">Average Time</h6>
              </div>
            </div>
            <div>
              {ResponseByQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex flex-row border-t-2 px-4 py-2 items-center"
                  onClick={() => handleQuestionsModalOpen(question.title)}
                >
                  <span className="text-[#8E5DF5]">
                    <Zap />
                  </span>
                  <span className="w-[70%] py-2 px-4">{question.title}</span>
                  <span>{question.averageTime}</span>
                </div>
              ))}
            </div>
            <Modal
              open={openQuestionsModal}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={`${bgColor} absolute top-[50%] left-[50%] w-[98%] rounded-xl shadow-black -translate-y-1/2 -translate-x-1/2 mx-auto p-4  md:left-[19em] md:max-w-[35%] md:max-h-[95%] md:-translate-x-0 md:ml-12`}>
                <span
                  onClick={handleQuestionsModalClose}
                  className={` ${textColor} block w-[24px] p-2 absolute right-8`}
                >
                  <X />
                </span>
                {ResponseByQuestions.map((question, index) => {
                  if (question.title === questionsModalTriggerId) {
                    return (
                      <div>
                        <div className="my-4">
                          <h1 className={`${textColor} text-2xl font-semibold`}>
                            {`Viewing ${question.title}`}{" "}
                          </h1>
                          <p className="text-[#636387]">{question.question}</p>
                          <p className="text-sm text-[#9A9696]">
                            Participants answers are highlighted in yellow
                          </p>
                        </div>
                        <div className="flex flex-col ">
                          {question.participants.map((participant, index) => {
                            return (
                              <div
                                key={index}
                                className="flex flex-row items-center mb-4 pdx-4 py-2 items-center"
                              >
                                <img
                                  src={participant.avatar}
                                  alt={participant.participant}
                                  className="w-[50px] h-[50px]"
                                />
                                <div className="w-[70%] py-2 px-4">
                                  <h4 className={`${textColor} font-semibold`}>
                                    {participant.participant}
                                  </h4>
                                  <div className="text-[#856B0C] text-xs">
                                    <h6 className="">{participant.date}</h6>
                                    <h6>{participant.time}</h6>
                                  </div>
                                </div>
                                <div className="bg-[#FFF3C7] text-[#3A3A53] p-2">
                                  {participant.answer}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <Button
        p={`0.7rem 2.7rem`}
        theme={switchTheme("bg-[#5E6A82]", "bg-[#5E6A82]", resTheme)}
      >
        <Download size={26} />
        Download All
      </Button>
    </div>
  );
}
