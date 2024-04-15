import { Link, useNavigate } from "react-router-dom";
import { homeImg2 } from "../assets"
import { Button } from "../components"
import { IoIosArrowForward } from "react-icons/io";

function HomePage2() {
    const navigate = useNavigate()
    return (
        <div className=" h-screen max-w-[375px] w-full font-Montserrat px-4 py-11 relative">
            <Link
                to={'/signup'}
                className="block text-base text-link font-medium text-end underline cursor-pointer"
            >
                Skip
            </Link>
            <div className=" flex justify-center items-center py-20">
                <img src={homeImg2} alt="home image 1" className=" h-[234px] w-[352px]" />
            </div>
            <div>
                <h1 className=" text-mediumBlack text-xl font-semibold py-2">Get Burn</h1>
                <p className=" text-lighterGray text-base font-medium">
                    Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
                </p>
            </div>
            <div className=" absolute bottom-11 right-4">
                <Button
                    className=" rounded-full"
                    onClick={() => navigate('/signup')}
                >
                    <IoIosArrowForward size={20} />
                </Button>
            </div>
        </div>
    )
}

export default HomePage2