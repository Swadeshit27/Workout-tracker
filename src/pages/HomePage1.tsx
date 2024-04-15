import { Link, useNavigate } from "react-router-dom";
import { homeImg1 } from "../assets"
import { Button } from "../components"
import { IoIosArrowForward } from "react-icons/io";

function HomePage1() {
  const navigate = useNavigate()
  return (
    <div className=" h-screen max-w-[475px] w-full font-Montserrat px-4 py-11 relative">
      <Link
        to={'/demo-2'}
        className="block text-base text-link font-medium text-end underline cursor-pointer"
      >
        Skip
      </Link>
      <div className=" flex justify-center items-center py-20">
        <img src={homeImg1} alt="home image 1" className=" h-[282px] w-[282px]" />
      </div>
      <div>
        <h1 className=" text-mediumBlack text-xl font-semibold py-2">Track Your Goal</h1>
        <p className=" text-lighterGray text-base font-medium">
          Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals
        </p>
      </div>
      <div className=" absolute bottom-11 right-4">
        <Button
          className=" rounded-full"
          onClick={()=>navigate('/demo-2')}
        >
          <IoIosArrowForward size={20} />
        </Button>
      </div>
    </div>
  )
}

export default HomePage1