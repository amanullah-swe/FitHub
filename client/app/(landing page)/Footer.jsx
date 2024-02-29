import { bgOverlay, locationIcon, logo, mailIcon, phoneIcone } from '@/assets';
import Image from 'next/image';
import React from 'react'

function Footer() {
    return (
        <footer className={`text-white bg-cover h-full object-cover w-full bg-[#171C22] mt-16 flex justify-center items-center`} style={{ backgroundImage: `url(${bgOverlay.src})` }}>
            <div id='footer' className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-w-6xl px-4 py-16 w-full max-lg:px-16 max-sm:px-4'>

                <div className=' flex flex-col gap-6 col-span-1 w-full justify-center'>
                    <Image src={logo} alt='logo' width={210} />
                    <p className=' ml-4 font-body text-sm text-[rgb(164,171,179)] w-fit'>Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.</p>
                </div>

                <div className='flex flex-col gap-3 col-span-1 w-full justify-center'>
                    <h4 className='font-heading text-2xl font-bold border-b-2 border-[#FD3D0C] w-fit'>Our Links</h4>
                    <p className='font-body text-base text-[rgb(164,171,179)]'>Home</p>
                    <p className='font-body text-base text-[rgb(164,171,179)]'>About Us</p>
                    <p className='font-body text-base text-[rgb(164,171,179)]'>Classes</p>
                    <p className='font-body text-base text-[rgb(164,171,179)]'>Blog</p>
                    <p className='font-body text-base text-[rgb(164,171,179)]'>Contact Us</p>
                </div>

                <div className='flex flex-col gap-3 col-span-1 w-full justify-center'>
                    <h4 className='font-heading text-2xl font-bold border-b-2 border-[#FD3D0C] w-fit min-w-0'>Contact Us</h4>
                    <div className='flex flex-row gap-3 w-full h-fit items-center'>
                        <div className=' w-[40px] h-[40px] bg-[#FD3D0C] flex items-center justify-center rounded-full '>
                            <Image src={locationIcon} width={18} />

                        </div>
                        <p className='font-body text-[rgb(164,171,179)] text-sm leading-6 w-fit max-w-48  '>1247/Plot No. 39, 15th Phase, Colony,  Kukatpally, Hyderabad</p>
                    </div>
                    <div className='flex flex-row gap-2 w-full h-fit items-center '>
                        <div className=' w-[40px] h-[40px] bg-[#FD3D0C] rounded-full flex items-center justify-center'>
                            <Image src={mailIcon} width={18} />
                        </div>
                        <p className='font-body text-[rgb(164,171,179)] text-sm leading-6 w-fit max-w-48'>amaan.swe@gmail.com</p>
                    </div>
                    <div className='flex flex-row gap-2 w-full h-fit items-center'>
                        <div className=' w-[40px] h-[40px] bg-[#FD3D0C] rounded-full flex items-center justify-center'>
                            <Image src={phoneIcone} width={18} />
                        </div>
                        <p className='font-body text-[rgb(164,171,179)] text-sm leading-6 w-fit max-w-48'>9767837923</p>
                    </div>
                </div>


                <div className='flex flex-col gap-3 col-span-1 w-full '>
                    <h4 className='font-heading text-2xl font-bold border-b-2 border-[#FD3D0C] w-fit min-w-0'>Our Newsletter</h4>

                </div>
            </div>
        </footer>
    )
}

export default Footer;