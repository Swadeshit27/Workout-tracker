import { Link } from 'react-router-dom'
import {
    homeIcon,
    tradeIcon,
    searchIcon,
    cameraIcon,
    userIcon
} from '../assets'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 h-[76px] z-50 w-full flex items-center justify-evenly bg-white  ">
            <Link to={'/tracker'} className=' list-none'>
                <img src={homeIcon} alt="home-icon" />
            </Link>
            <Link to={'/schedule'} className=' list-none'>
                <img src={tradeIcon} alt="trade-icon" />
            </Link>
            <Button className=' rounded-full p-5 -translate-y-8'>
                <img src={searchIcon} alt="search-icon" />
            </Button>
            <Link to={'#'} className=' list-none'>
                <img src={cameraIcon} alt="camera-icon" />
            </Link>
            <Link to={'#'} className=' list-none'>
                <img src={userIcon} alt="user-icon" />
            </Link>
        </nav>
    )
}

export default Navbar
