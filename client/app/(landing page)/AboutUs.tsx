import { aboutPerson, aboutProfilePic, bannerCircle } from '@/assets'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
    return (
        <section id='about-us' className='max-w-6xl w-full pt-12 bg-[#FEFEFE] flex gap-12 max-lg:flex-col items-center px-8'>
            {/* left side */}
            <div className='h-fit w-[50%] max-w-[700px] max-lg:w-full'>
                <div className="w-full aspect-square relative">
                    <Image src={bannerCircle} className="p-0 m-0 absolute top-[10%] left-[15%] w-[70%]" alt="circle" />
                    <Image src={bannerCircle} className=" p-0 m-0 w-[50%] absolute top-[20%] left-[25%] " alt="circle" />
                    <div className='h-[45%] w-full absolute bottom-0 bg-[#FD3D0C] rounded-xl'>
                        <Image src={aboutPerson} className="w-[700px] absolute bottom-0 lg:w-[500px]" alt="person image" />
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='h-full w-[50%] max-w-[700px] max-lg:w-full flex flex-col'>
                <h3 className='w-40 px-2 py-2 rounded-xl text-center font-bold font-heading text-lg text-[#FD3D0C] bg-[#FFEBE6]'>ABOUT US</h3>
                <h2 className='text-6xl font-heading font-bold mt-4'>Welcome To Our Fitness Gym</h2>
                <p className='font-body mt-6 text-[rgb(164,171,179)] text-sm leading-6'>Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                <p className='font-body mt-4 text-[rgb(164,171,179)] text-sm leading-6'>Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.</p>
                <div className='flex gap-7 mt-6 w-full items-center '>
                    <div>
                        <Image src={aboutProfilePic } alt='profile pic' className=' rounded-full w-20 max-sm:w-24 '/>
                    </div>
                    <div className='flex w-full gap-14  max-sm:flex-col  max-sm:gap-4'>
                        <div>
                            <h5 className=' text-lg font-heading font-semibold'>Denis Robinson</h5>
                            <p className='text-sm font-body text-[#a4abb3]'>Our Coach</p>
                        </div>
                        <button className='px-8 py-4 w-fit rounded-xl font-bold font-heading text-lg text-white bg-[#FD3D0C]'>EXPLOR MORE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs