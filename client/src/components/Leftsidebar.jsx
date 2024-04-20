import React from "react"
import { Link } from "react-router-dom"
import { homeIcon, logo } from "../assets"


function Leftsidebar() {
  return (
    <div className="flex flex-col items-center max-md:justify-between  gap-20 h-full w-[180px] bg-offwhite py-24 px-7 boder border-r border-r-customgreen absolute z-50 min-md:top-0 left-0 max-md:bottom-0 max-md:flex-row max-md:w-full max-md:h-[100px] max-md:gap-5 max-md:border-t-customgreen max-md:border-t  ">
      {/* log */}
      {/* <Link to={'/'} className="flex items-center justify-center gap-4  w-56 max-md:w-fit  px-12 py-2 rounded-xl max-md:hidden">
        <img src={logo} width={40} alt="" />
        <a href="#" className="logo2  flex items-end">Fithub <span className="span text-5xl"> .</span>
        </a>
      </Link> */}
      {/* home */}
      <Link to={'/home'} className="flex items-center justify-start gap-2  w-56 max-md:w-fit  border px-3 py-2 rounded-xl">
        <div className="fill-customgreen">
          <svg className="fill-inherit" fill="" width="32px" height="32px" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>home</title>
            <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path>
          </svg>
        </div>
        <p className="font-heading max-md:hidden font-normal text-primary">Home</p>
      </Link>

      {/* search */}
      <Link to={'/search'} className="flex items-center justify-start gap-2  w-56 max-md:w-fit  border px-3 py-2 rounded-xl">
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

      {/* meals bowl */}
      {/* <div className="flex items-center justify-start gap-2  w-56 max-md:w-fit  border px-3  py-2 rounded-xl">
        <div className=" fill-customgreen">
          <svg className=" fill-inherit" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 307.429 307.429" xmlSpace="preserve">
            <g>
              <path d="M248.286,119.439l59.143-54.846l-14.858-14.592l-56.893,63.609c-4.115-1.638-8.516-3.176-13.185-4.6l48.447-66.076
		L253.569,31.45l-43.979,74.077c-21.212-5.055-46.47-7.988-73.582-7.988c-0.222,0-0.44,0.002-0.662,0.002
		c0.316,1.271,0.576,2.555,0.775,3.856c1.075,7.025,0.296,14.169-2.246,20.833c0.71-0.004,1.42-0.008,2.133-0.008
		c22.362,0,43.095,2.189,60.155,5.922l-35.261,59.393c-7.983,0.607-16.317,0.932-24.895,0.932
		c-58.221,0-105.418-14.83-105.418-33.125c0-16.203,37.04-29.689,85.97-32.557c1.504-6.117,1.785-13.176-1.225-20.038
		c-0.69-1.573-1.516-3.061-2.435-4.484C48.793,102.321,0,122.962,0,147.82v63.09c0,0,14.101,81.676,136.009,81.676
		c121.908,0,136.009-81.676,136.009-81.676v-63.09C272.018,137.289,263.255,127.515,248.286,119.439z M165.178,187.183
		l41.387-56.447c3.819,1.082,7.388,2.25,10.67,3.496l-46.902,52.439C168.633,186.855,166.915,187.025,165.178,187.183z
		 M176.592,185.923l50.794-47.104c8.929,4.863,14.038,10.506,14.038,16.523C241.424,169.119,214.664,180.927,176.592,185.923z"/>
              <path d="M103.644,81.275c6.556,5.473,12.772,11.494,16.271,19.465c5.375,12.25,2.166,26.09-4.195,37.32
		c2.038,0,5.865-5.162,7.016-6.559c2.168-2.635,4.011-5.537,5.449-8.631c3.002-6.459,4.075-13.668,2.996-20.717
		c-1.73-11.311-8.497-20.301-16.574-27.928c-6.466-6.105-13.84-10.881-18.566-18.691c-7.631-12.611-5.1-27.012,2.539-38.986
		c-1.724,0-5.035,3.891-6.09,4.982c-2.402,2.49-4.476,5.316-6.077,8.385c-3.289,6.305-4.555,13.537-3.42,20.57
		C85.087,63.468,93.925,73.158,103.644,81.275z"/>
              <path d="M130.184,41.257c2.675,2.234,5.214,4.691,6.641,7.945c2.193,5,0.884,10.648-1.713,15.23c0.832,0,2.395-2.105,2.863-2.676
		c0.885-1.076,1.637-2.26,2.225-3.524c1.225-2.635,1.663-5.578,1.223-8.455c-0.707-4.615-3.468-8.285-6.765-11.396
		c-2.638-2.492-5.648-4.441-7.577-7.629c-3.114-5.146-2.081-11.024,1.037-15.91c-0.704,0-2.056,1.588-2.486,2.033
		c-0.98,1.016-1.826,2.17-2.48,3.422c-1.342,2.572-1.858,5.523-1.395,8.394C122.61,33.992,126.217,37.947,130.184,41.257z"/>
            </g>
          </svg>
        </div>
        <p className="font-heading max-md:hidden font-normal text-primary">Meals</p>
      </div> */}

      {/* profile */}
      <Link to={'/my-profile'} className="flex items-center justify-start gap-2  w-56 max-md:w-fit  border px-3 py-2 rounded-xl">
        <div className=" fill-customgreen">
          <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" className=" fill-inherit" clipRule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#000000" /></svg>
        </div>
        <p className="font-heading max-md:hidden font-normal text-primary">Profile</p>
      </Link>

      {/* dashboard */}
      <Link to={'/dashboard'} className="flex items-center justify-start gap-3 max-md:w-fit  px-3  w-56 border py-2 rounded-xl">
        <div className=" fill-customgreen">
          <svg enableBackground="new 0 0 32 32" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m31 31.36h-30c-.199 0-.36-.161-.36-.36v-30h.72v14.632c3.704-.168 5.584-2.933 7.405-5.609 1.8-2.646 3.662-5.382 7.235-5.382s5.436 2.736 7.235 5.382c1.879 2.762 3.821 5.618 7.765 5.618v.72c-4.324 0-6.376-3.016-8.36-5.933-1.773-2.606-3.448-5.068-6.64-5.068-3.193 0-4.867 2.461-6.64 5.067-1.928 2.834-3.92 5.763-8 5.926v14.287h2.28v-10.64c0-.199.161-.36.36-.36h3.64v-3.64c0-.199.161-.36.36-.36h3.64v-4.64c0-.199.161-.36.36-.36h4c.199 0 .36.161.36.36v1.64h3.64c.199 0 .36.161.36.36v3.64h3.64c.199 0 .36.161.36.36v4.64h3.64c.199 0 .36.161.36.36v8.64h2.64zm-6.64-.72h3.279v-8.28h-3.279zm-4 0h3.279v-13.28h-3.279zm-4 0h3.28v-17.28h-3.28zm-4 0h3.28v-19.28h-3.28zm-4 0h3.28v-14.28h-3.28zm-4 0h3.28v-10.28h-3.28z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
        </div>
        <p className="font-heading max-md:hidden font-normal text-primary">Dashboard</p>
      </Link>

      <Link to={'/signin'} className="flex fill-black items-center justify-center gap-2 h-16  w-56 max-md:w-[32px] max-md:h-[32px] border px-12 py-2 rounded-xl bottom-24  md:absolute">
        <div className="fill-customgreen stroke-customgreen max-w-[32px] h-[32px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            width={32}
          >
            <path
              d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
              fill="none"
              stroke="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            />
          </svg>
        </div>
        <p className="font-heading max-md:hidden font-normal text-primary">logout</p>
      </Link>
    </div>
  )
}

export default Leftsidebar