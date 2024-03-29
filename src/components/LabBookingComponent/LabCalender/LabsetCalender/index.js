import React, { useState, useEffect } from "react";
import { Checkbox, Button, Autocomplete, TextField } from "@mui/material";
import DatePicker from "../datePicker";

import "react-dates/initialize";

export default function Index({ setExperimentName }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };


  const [btnText, setbtnText] = useState("Request approval")
  const changeText = (text) => setbtnText("Waiting for approval");


  const [dates, setdates] = useState(new Date());

  const [ActiveIndex, setActiveIndex] = useState("1");
  const [ActiveIndexTime, setActiveIndexTime] = useState("");

  var monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  console.log(dates.getDay());

  useEffect(() => {
    console.log(ActiveIndex);
    if (ActiveIndex === "2") {
      console.log("im working");
    }
  }, [ActiveIndex]);

  const experimentsTemplate = ["Calibration of Pressure Gauge", "Calibration of Thermocouple", "Calibration of LVDT", "Calibration of Load cell", "Determination of modulus of elasticity of a mild steel specimen using strain gauges.", "Measurement of thread parameters using Optical Projector (Profile Projector)", "Measurement of thread parameters using Toolmaker Microscope", "Measurement of angle using Sine bar"]

  return (
    <div className="flex flex-col w-[30rem] overflow-x-clip px-8 py-5 rounded-xl bg-white  m-auto drop-shadow-xl">
      <div className="">
        <div className="font-semibold text-lg whitespace-normal">
          Prebook a lab
        </div>

      </div>
      {/* Calender */}

      <Autocomplete
        disableClearable
        options={experimentsTemplate}
        className="w-96 mt-4"
        onChange={(e, v) => {
          setExperimentName(v);
        }}
        renderInput={(params) => (
          <TextField {...params} label="select experiment" />
        )}
      />

      <div className="flex items-center my-4">
        <div
          className={`${
            ActiveIndex === "1" ? "bg-accent text-white" : "bg-white"
          } flex flex-col w-fit px-4 py-2 rounded-lg  mr-2`}
          onClick={() => setActiveIndex("1")}
        >
          <div>{dayList[dates.getDay()]}</div>
          <div>{dates.getDate()}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div
          className={`${
            ActiveIndex === "2" ? "bg-accent text-white" : "bg-white"
          } flex flex-col w-fit px-4 py-2 rounded-lg  mr-2`}
          onClick={() => setActiveIndex("2")}
        >
          <div>
            {
              dayList[
                dates.getDay() + 1 > 6 ? dates.getDay() - 6 : dates.getDay() + 1
              ]
            }
          </div>
          <div>{dates.getDate() + 1}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div
          className={`${
            ActiveIndex === "3" ? "bg-accent text-white" : "bg-white"
          } flex flex-col w-fit px-4 py-2 rounded-lg  mr-2`}
          onClick={() => setActiveIndex("3")}
        >
          <div>
            {
              dayList[
                dates.getDay() + 2 > 6 ? dates.getDay() - 6 : dates.getDay() + 2
              ]
            }
          </div>
          <div>{dates.getDate() + 2}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div
          className={`${
            ActiveIndex === "4" ? "bg-accent text-white" : "bg-white "
          } flex flex-col w-fit px-4 py-2 rounded-lg  mr-2`}
          onClick={() => setActiveIndex("4")}
        >
          <div>
            {
              dayList[
                dates.getDay() + 3 > 6 ? dates.getDay() - 6 : dates.getDay() + 3
              ]
            }
          </div>
          <div>{dates.getDate() + 3}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

    

        <div>
          <DatePicker/>
        </div>
      </div>

      <div className="text-sm font-thin py-1">Preferred time slot.</div>

      {/* Time */}

      <div className="flex flex-col mt-6">
        <div className="flex my-1 ">
          <div className={`${
            ActiveIndexTime === "1" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndexTime("1")}
          >
            17:00 - 18:00 
          </div>
          <div className={`${
            ActiveIndexTime === "2" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndexTime("2")}
          >
            18:00 - 19:00 
          </div>
        </div>

        <div className="flex my-1">
        <div className={`${
            ActiveIndexTime === "3" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndexTime("3")}
          >
            19:00 - 20:00 
          </div>
          <div className={`${
            ActiveIndexTime === "4" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndexTime("4")}
          >
            21:00 - 22:00
          </div>
        </div>
      </div>


      <div className="flex items-center justify-between mt-3 ">
        <div className="w-[22rem]">
          I agree with the college guidelines and promise to follow them.
        </div>
        <div>
          <Checkbox {...label} />
        </div>
      </div>

      {/* Book Button */}

      <Button
        className="!bg-accent !text-white !px-6 !my-4  !py-2 !rounded-full"
        variant="outlined"
        onClick={() => changeText("newText")}
      >
        {btnText}
      </Button>

      <div className="flex justify-between">
        <div className="text-base font-thin">Credit Price for 1 lab</div>
        <div className="text-base font-thin">50</div>
      </div>
      <div className="flex justify-between">
        <div className="text-base font-thin">Service fee</div>
        <div className="text-base font-thin">0</div>
      </div>

      <div>
        <div className=" bg-gray flex-1 h-[1px] my-3 -mx-8 "></div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">Total credits deducted</div>
          <div className="font-bold text-lg">50</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
