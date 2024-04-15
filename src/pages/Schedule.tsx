import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Schedule = () => {
    return (
        <div className=" max-w-[475px] w-full h-screen py-11 font-Montserrat relative pb-24">
            <div className=" my-2 relative px-4">
                <div className=" absolute top-1 left-0 h-5 w-5 rounded bg-lightestGray flex justify-center items-center">
                    <IoIosArrowBack />
                </div>
                <h1 className=" font-semibold text-mediumBlack text-xl text-center">Workout Schedule</h1>
            </div>
            <div className=" flex justify-center items-center py-2 px-4">
                <div className=" flex gap-2 items-center">
                    <IoIosArrowBack />
                    <p className=" text-sm text-mediumBlack font-Montserrat font-semibold">Feb 2024</p>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className=" w-full h-[76px] p-[2px] flex justify-evenly px-4">
                <div className=" w-[63px] rounded-[10px] h-full font-Quicksand font-semibold text-mediumBlack p-2 text-center">
                    <p className=" text-sm leading-4">Sun</p>
                    <p className=" text-[28px] ">5</p>
                </div>
                <div className=" w-[62px] rounded-[10px] h-full bg-dateGradient font-Montserrat font-semibold text-white p-2 text-center">
                    <p className=" text-sm leading-4">Mon</p>
                    <p className=" text-[28px] ">6</p>
                </div>
                <div className=" w-[62px] rounded-[10px] h-full font-Quicksand font-semibold text-mediumBlack p-2 text-center">
                    <p className=" text-sm leading-4">Tue</p>
                    <p className=" text-[28px] ">7</p>
                </div>
                <div className=" w-[62px] rounded-[10px] h-full font-Quicksand font-semibold text-mediumBlack p-2 text-center">
                    <p className=" text-sm leading-4">Wed</p>
                    <p className=" text-[28px] ">8</p>
                </div>
                <div className=" w-[62px] rounded-[10px] h-full font-Quicksand font-semibold text-mediumBlack p-2 text-center">
                    <p className=" text-sm leading-4">Thu</p>
                    <p className=" text-[28px] ">9</p>
                </div>
            </div>

            <div className=" mt-4">
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">06:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div className=" relative">
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">07:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                    <span className=" absolute top-7 right-5 font-Montserrat font-semibold text-xs bg-btn2Gradient text-white py-1 px-2 rounded-full">Upperbody Workout, 9am</span>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">08:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <div className=" font-Montserrat font-semibold text-xs flex items-center py-2 px-3 gap-10  ">
                        <p className="  text-mediumBlack">09:00 AM</p>
                        <span className=" bg-btn2Gradient text-white py-1 px-2 rounded-full">Upperbody Workout, 9am</span>
                    </div>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">10:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">11:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">12:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">01:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <div className=" font-Montserrat font-semibold text-xs flex items-center py-2 px-3 gap-10  ">
                        <p className="  text-mediumBlack">02:00 AM</p>
                        <span className=" bg-lightestGray py-1 px-2 rounded-full text-mediumBlack">Lowerbody Workout, 3pm</span>
                    </div>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">03:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">04:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
                <div>
                    <p className=" p-3 font-Montserrat font-semibold text-xs text-mediumBlack">05:00 AM</p>
                    <p className="border-b-[0.5px] border-lightGray "></p>
                </div>
            </div>
            <button className=" h-[63px] w-[63px] rounded-full bg-btn2Gradient fixed bottom-[120px] right-4 shadow-btnShadow text-4xl font-Montserrat font-[400] text-white">+</button>
        </div>
    )
}

export default Schedule
