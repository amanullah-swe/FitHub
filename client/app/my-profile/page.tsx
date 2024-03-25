import { bgOverlay, heroPerson, homeIcon, logo } from '@/assets'
import Leftsidebar from '@/components/Leftsidebar'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { log } from 'console'
export default function MyProfile() {
  return (
    <div className="w-full h-screen  flex bg-[#F8F9FE]">
      <Leftsidebar />

      <div className='w-full h-full px-3 py-6 overflow-hidden overflow-y-auto'>
        {/* personal information */}
        <div id='container1' className='flex gap-2 flex-row bg-white border rounded-lg px-6 py-3 mb-5 relative shadow-lg'>
          <div className=' w-64 h-64 overflow-hidden'>
            <Image src={heroPerson} alt='person image'></Image>
          </div>
          <div className='flex flex-col justify-between pt-1'>
            <div className=''>
              <h1 className=' font-heading text-2xl font-bold leading-6'>Shaikh Amanullah</h1>
              <p className='font-body text-sm leading-5 mt-2'>Software engeenier</p>
            </div>
            <div className='flex flex-row gap-5'>
              <div className='flex flex-col gap-3'>
                {/* profession */}
                <div className='flex gap-2'>
                  <svg className=' fill-black' width="24px" height="24px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>bag</title>
                    <path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>
                  </svg>
                  <p className='font-body text-sm '>Software engeenier</p>
                </div>

                {/* phone */}
                <div className='flex gap-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className='font-body text-sm '>9767837923</p>
                </div>

                {/* gender */}
                <div className='flex gap-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className='font-body text-sm '>Male</p>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                {/* email */}
                <div className='flex gap-2'>
                  <svg height="24px" width="24px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512" xmlSpace="preserve">
                    <g>
                      <path className="fill-black" d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
		c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
		C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
		c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
		c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
		c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
		c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
		L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
		C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
		C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
		l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
		C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
		V385.92z"/>
                    </g>
                  </svg>
                  <p className='font-body text-sm '>sarfarazaman38@gamil.com</p>
                </div>

                {/* location */}
                <div className='flex gap-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className='font-body text-sm '>Mogal pura sillod</p>
                </div>

              </div>
            </div>

            {/* edit button  */}
            <button className='border w-fit h-fit absolute top-5 right-5 flex gap-2 py-3 px-5 rounded-md'>
              <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path>
              </svg>
              <span className='font-body text-base leading-5 font-normal '>Edite</span>
            </button>
          </div>
        </div>

        {/* health information */}
        <div id='container1' className='flex gap-2 flex-col bg-white border rounded-lg px-6 py-3 mt-5 mb-5 relative '>
          <h3 className='font-heading text-2xl font-normal leading-6 text-gray-400'>Heal Information</h3>

          <table className='w-full mt-6'>
            <tbody className='w-full'>
              <tr className="w-full  border-b ">
                <td className='w-2/3'><p className='px-8 py-1.5 font-body text-sm leading-5 '>Age:</p></td>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>20</p></td>
              </tr>
              <tr className=' border-b'>
                <td> <p className='px-8 py-1.5 font-body text-sm leading-5 '>Height:</p></td>
                <td> <p className='px-8 py-1.5 font-body text-sm leading-5 '>5.4 feet</p></td>
              </tr>
              <tr className=' border-b'>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>PreferredWorkouts:</p></td>
                <td>
                  <div className='flex px-8 gap-3 flex-wrap'>
                    <p className=' font-body text-sm leading-5 '>Cardio,</p>
                    <p className=' font-body text-sm leading-5 '>Yoga</p>
                  </div>
                </td>
              </tr>
              <tr className=' border-b'>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>DietaryPreferences:</p></td>
                <td>
                  <div className='flex px-8 gap-3 flex-wrap '>
                    <p className='font-body text-sm leading-5 '>Vegetarian,</p>
                    <p className='font-body text-sm leading-5 '>Fruites</p>
                  </div>
                </td>
              </tr>
              <tr className=' border-b'>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>FitnessGoals:</p></td>
                <td>
                  <div className='flex px-8 gap-3 flex-wrap '>
                    <p className=' font-body text-sm leading-5 '>Weight Loss,</p>
                    <p className=' font-body text-sm leading-5 '>Strength Training</p>
                  </div>
                </td>
              </tr>
              <tr className=' border-b'>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>ActivityLevel:</p></td>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>Moderate</p></td>
              </tr>
              <tr className=''>
                <td><p className='px-8 py-1.5 font-body text-sm leading-5 '>MedicalConditions:</p></td>
                <td> <div className='flex px-8 gap-3 flex-wrap '>
                  <p className=' font-body text-sm leading-5 '>None</p>
                </div>
                </td>
              </tr>
            </tbody>
          </table>


          {/* edit button  */}
          <button className='border w-fit h-fit absolute top-5 right-5 flex gap-2 py-3 px-5 rounded-md'>
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path>
            </svg>
            <span className='font-body text-base leading-5 font-normal '>Edite</span>
          </button>
        </div>

        {/* settings */}
        <div id='container1' className='flex gap-2 flex-col bg-white border rounded-lg px-6 py-3 mt-5 mb-5 relative '>
          <h3 className='font-heading text-2xl font-normal leading-6 text-gray-400'>Settings</h3>

          <div className='mt-6 flex flex-col gap-3'>
            <div className='flex flex-row w-full'>
              <p className='px-8 py-1.5 font-body text-sm leading-5 w-2/3'>NotificationPreferences</p>
              <div className='flex flex-col gap-2 items-start'>
                <label className=" items-center cursor-pointer px-8 flex gap-4 justify-between w-full">
                  <span className="ms-3 text-sm font-medium text-gray-900 ">Email</span>
                  <input type="checkbox" hidden  value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <label className=" items-center cursor-pointer px-8  flex gap-4 justify-between w-full">
                  <span className="ms-3 text-sm font-medium text-gray-900 ">Sms</span>
                  <input type="checkbox" hidden  value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <label className=" items-center cursor-pointer px-8  flex gap-4 justify-between w-full">
                  <span className="ms-3 text-sm font-medium text-gray-900 ">App</span>
                  <input type="checkbox" hidden  value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className='flex flex-row w-full'>
              <p className='px-8 py-1.5 font-body text-sm leading-5 w-2/3'>Privacy</p>
              <div className='flex flex-col gap-2 items-start'>
                <label className=" items-center cursor-pointer px-8 flex gap-4 justify-between w-full">
                  <span className="ms-3 text-sm font-medium text-gray-900 ">profileVisibility</span>
                  <input type="checkbox" hidden  value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <label className=" items-center cursor-pointer px-8  flex justify-between w-full">
                  <span className="ms-3 text-sm font-medium text-gray-900 ">dataSharing</span>
                  <input type="checkbox" hidden  value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
