import { IoIosArrowBack } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import {
  chart,
  exercise_1,
  exercise_2,
  exercise_3,
} from "../assets"

const Tracker = () => {
  return (
    <div className=" max-w-[475px] w-full h-screen overflow-y-scroll py-11 px-4 font-Montserrat">
      <div className=" my-2 relative">
        <div className=" absolute top-1 left-0 h-5 w-5 rounded bg-lightestGray flex justify-center items-center">
          <IoIosArrowBack />
        </div>
        <h1 className=" font-semibold text-mediumBlack text-xl text-center">Workout Tracker</h1>
      </div>
      <div className=" my-10">
        <div>
          <div className=" font-Montserrat text-xs text-mediumBlack font-[400] float-right ">
            <span className=" mr-10">Good job</span>
            <span className=" mr-10">less then 320cal</span>
          </div>
          <img src={chart} alt="chart" className=" w-full h-[90px]" />
        </div>
        <div className=" bg-textBgGradient w-full p-2 rounded-[10px] my-4 flex items-center gap-2">
          <IoWarningOutline size={20} color="#7E96FF" />
          <p className=" font-Montserrat font-medium text-xs text-mediumBlack ">You've burned fewer calories than yesterday. Time to get moving! </p>
        </div>
      </div>
      <div className=" space-y-5">
        <div className=" flex justify-between">
          <h1 className="font-semibold text-mediumBlack text-xl ">Upcoming Workout</h1>
          <span className=" font-Montserrat font-medium text-xs text-lightGray">See more</span>
        </div>
        <div className=" p-2 flex items-center gap-3 shadow-cardShadow rounded-2xl h-[75px">
          <img src={exercise_1} alt="exercise_1" />
          <div className=" w-full flex justify-between items-center">
            <div className=" font-Montserrat font-medium">
              <p className=" text-xs text-mediumBlack">Full Body Workout</p>
              <span className=" text-[10px] text-lightGray">Today 3pm</span>
            </div>
            <label>
              <input type="checkbox" className="toggle-checkbox" />
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
        <div className=" p-2 flex items-center gap-3 shadow-cardShadow rounded-2xl h-[75px]">
          <img src={exercise_2} alt="exercise_2" />
          <div className=" w-full flex justify-between items-center">
            <div className=" font-Montserrat font-medium">
              <p className=" text-xs text-mediumBlack">Upper Body Workout</p>
              <span className=" text-[10px] text-lightGray">4 Feb, 3:30 pm</span>
            </div>
            <label>
              <input type="checkbox" className="toggle-checkbox" />
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-mediumBlack text-xl py-4">What Do You Want to Train</h1>
        <div className=" bg-[#8CB1FF99] h-[124px] rounded-xl w-full flex justify-between items-start p-4">
          <div className=" font-Montserrat font-medium text-mediumBlack ">
            <p className=" text-sm ">Full Body Workout</p>
            <p className=" text-[10px]">Arms</p>
            <p className=" text-[10px]">Chest</p>
          </div>
          <img src={exercise_3} alt="" className=" w-[100px] h-[100px]" />
        </div>
      </div>
    </div>
  )
}

export default Tracker
