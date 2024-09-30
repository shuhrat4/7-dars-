import React, { useContext } from 'react'
import Logo from "../assets/images/logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { BookmarksIcon, Dots, ExploreIcon, HomeIcon, ListsIcon, MassagesIcon, MoreICon, NotificationsIcon, ProfileFillIcon } from '../assets/images/Icons'
import Button from './Button'
import LogOutModal from './Modal'
import { Context } from '../context/Index'
function Navbar() {
    const navbarList = [
        {
            id:1,
            icon:<HomeIcon/>,
            title:"Home",
            path: "/"
        },
        {
            id:2,
            icon:<ExploreIcon/>,
            title:"Explore",
            path: "/explore"
        },
        {
            id:3,
            icon:<NotificationsIcon/>,
            title:"Notifications",
            path: "/notifications"
        },
        {
            id:4,
            icon:<MassagesIcon/>,
            title:"Messages",
            path: "/messages"
        },
        {
            id:5,
            icon:<BookmarksIcon/>,
            title:"Bookmarks",
            path: "/bookmarks"
        },
        {
            id:6,
            icon:<ListsIcon/>,
            title:"Lists",
            path: "/lists"
        },
        {
            id:7,
            icon:<ProfileFillIcon/>,
            title:"Profile",
            path: "/profile"
        },
        {
            id:8,
            icon:<MoreICon/>,
            title:"More",
            path: "/more"
        },

    ]
    const user = JSON.parse(localStorage.getItem("token"))
    const {isOpenModal, setIsOpenModal} = useContext(Context)

    function handleLogOut(){
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div className='w-[25%] border-r-[1px] border-slate-[#D8D8D8 ] relative h-[100vh] overflow-y-auto pt-[31px] pl-[100px] pr-[15px]'>
      <Link to={"/"}>
        <img src={Logo} alt="site logo img" width={40} height={33} />
      </Link>
      <div className="mt-[49px] space-y-[30px]">
        {navbarList.map(item => (
            <NavLink className={"flex font-semibold text-[18px] leading-[23px] items-center space-x-5"} key={item.id} to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </NavLink>
        ))}
      </div>
      <Button type={"button"} extraStyle={"py-[15px] mt-[30px] w-[200px]"}  >Tweet</Button>
      <div className="flex gap-[10px] absolute bottom-[30px]">
        <img className='rounded-full' src="https://picsum.photos/500/500" alt="icon" width={50} height={50} />
        <div className="flex items-center gap-[42px]">
            <div className="">
                <strong className='font-semibold block text-[16px]'>{user.login}</strong>
                <span className='text-[16px] opacity-60'>@Random_Email</span>
            </div>
            <button onClick={() => setIsOpenModal(true)} className='hover:scale-[1.3] duration-300'>
                <Dots className="w-[17px] h-[4px]" />
            </button>
        </div>
      </div>
      <LogOutModal>
        <p className='font-semibold text-[35px] text-center '>Confirm log out ?</p>
        <div className="flex items-center justify-around mt-5">
            <button onClick={() => setIsOpenModal(false)} className='w-[35%] py-2 rounded-[30px] bg-[#1DA1F2] font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-[#1DA1F2] hover:text-[#1DA1F2] border-[2px] border-transparent duration-300'>Cancel</button>
            <button  onClick={handleLogOut} className='w-[35%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300'>Yes</button>
        </div>
      </LogOutModal>
    </div>
  )
}

export default Navbar
