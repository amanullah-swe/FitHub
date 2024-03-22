import { bannerCircle, bgOverlay, heroPerson } from "@/assets";
import Image from "next/image";
function Hero() {
  return (
    <section className="w-full h-[710px]  flex justify-center max-lg:h-[1400px] max-sm:h-[1200px] max-[450px]:h-[1000px] relative" id="hero">
      {/* bg */}
      <div className="flex h-full w-full bg-[#171C22] max-lg:flex-col ">
        <div className={`w-[70%] bg-cover h-full object-cover max-lg:w-full max-lg:h-[75%]`} style={{ backgroundImage: `url(${bgOverlay.src})` }}>
        </div>
        <div className="bg-[#FD3D0C] w-[30%] h-full max-lg:w-full max-lg:h-[25%]">
        </div>
      </div>
      {/* content */}
      <div className="w-full max-w-6xl h-full flex absolute top-0 max-lg:flex-col">
        {/* left */}
        <div className="w-[50%] h-full flex flex-col items-left justify-center p-4 max-lg:w-full max-lg:h-[50%]  max-lg:items-center">
          <div className=" flex py-2 bg-[#3d353780] rounded-lg text-white w-fit ">
            <p className="rounded-lg px-4 py-1.5 mx-2 bg-[#FD3D0C] font-body font-medium text-base">
              THE BEST
            </p>
            <p className="rounded-lg px-4 py-1.5 font-body font-medium text-base">
              FITNESS CLUB
            </p>
          </div>
          <div className=" max-w-xl w-full mt-6">
            <h1 className="text-7xl text-white font-heading font-[900] leading-[80px]">Work Hard To Get Better Life</h1>
            <p className=" text-base font-body text-[#a4abb3f0] mt-4">Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.</p>
          </div>
          <button className=" w-44 mt-6 px-10 py-4 rounded-xl font-bold font-heading text-white bg-[#FD3D0C]">JOIN NOW</button>
        </div>
        {/* right side */}
        <div className="h-full w-[50%] max-lg:w-full max-lg:h-[30%] flex justify-center">
          <div className=" absolute bottom-20 lg:w-[500px] max-w-[700px] w-full aspect-square">
            <Image src={bannerCircle} className="p-0 m-0 absolute top-0 w-[100%]" alt="circle" />
            <Image src={bannerCircle} className=" p-0 m-0 w-[80%] absolute top-[10%] left-[10%] " alt="circle" />
          </div>
          <Image src={heroPerson} className="w-[700px] absolute bottom-0 lg:w-[500px]" alt="person image" />
        </div>
      </div>
    </section>
  )
}

export default Hero;