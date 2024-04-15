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
            <li className=' list-none'>
                <img src={homeIcon} alt="home-icon" />
            </li>
            <li className=' list-none'>
                <img src={tradeIcon} alt="trade-icon" />
            </li>
            <Button className=' rounded-full p-5 -translate-y-8'>
                <img src={searchIcon} alt="search-icon" />
            </Button>
            <li className=' list-none'>
                <img src={cameraIcon} alt="camera-icon" />
            </li>
            <li className=' list-none'>
                <img src={userIcon} alt="user-icon" />
            </li>
        </nav>
    )
}

export default Navbar
