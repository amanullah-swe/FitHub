import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

function Navbar() {
    return (
        <div className='w-full absolute top-0 z-60 md:hidden py-4 px-8 flex flex-row justify-between items-center bg-white shadow-lg'>
            <Link to={'/'} className="flex items-center justify-center gap-4  w-56 max-md:w-fit  rounded-xl ">
                <img src={logo} width={40} alt="" />
                <a href="#" className="logo2  flex items-end">Fithub <span className="span text-5xl"> .</span>
                </a>
            </Link>
            <div className='flex justify-between'>
                {/* search */}
                <Link to={'/search'} className="flex items-center justify-start gap-2 mr-12  w-56 max-md:w-fit  border px-3 py-2 rounded-xl md:hidden">
                    <div className=" fill-customgreen stroke-customgreen">
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_15_152) " className=" stroke-inherit" >
                                <rect width="24" height="24" fill="inherite" className=" stroke-transparent" />
                                <circle cx="10.5" cy="10.5" r="6.5" strokeLinejoin="round" />
                                <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000" />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_152">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className="font-heading max-md:hidden font-normal text-primary">Search</p>
                </Link>
                {/* profile */}
                <Link to={'/my-profile'} className="flex items-center justify-start gap-2  w-56 max-md:w-fit  border px-3 py-2 rounded-xl">
                    <div className=" fill-customgreen">
                        <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" className=" fill-inherit" clipRule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#000000" /></svg>
                    </div>
                    <p className="font-heading max-md:hidden font-normal text-primary">Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar