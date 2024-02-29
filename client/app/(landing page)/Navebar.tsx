import Image from "next/image";
import { logo } from '@/assets'
function Navebar() {
  return (
    <nav className="w-full flex justify-center fixed top-0 z-50">
      <div id="nav-bar" className=" max-w-6xl w-full h-24 px-4 flex justify-between items-center">
        {/* logo */}
        <div className=" mr-4">
          <Image src={logo} alt="logo" width={150} />
        </div>

        {/* nave items */}
        <div className=" flex justify-between w-[50%]">
          <p className="font-body text-sm font-medium text-white">Home</p>
          <p className="font-body text-sm font-medium text-white">About Us</p>
          <p className="font-body text-sm font-medium text-white">Classes</p>
          <p className="font-body text-sm font-medium text-white">pages</p>
          <p className="font-body text-sm font-medium text-white">Blog</p>
          <p className="font-body text-sm font-medium text-white">Contact Us</p>
        </div>
        {/* join now button  */}
        <button className="w-44  px-10 py-4 rounded-xl font-bold font-heading bg-white text-[#FD3D0C]">JOIN NOW</button>
      </div>
    </nav>
  )
}

export default Navebar;