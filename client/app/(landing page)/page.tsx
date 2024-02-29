import Image from 'next/image'
import Link from 'next/link'
import Navebar from './Navebar'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Footer from './Footer'
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
     {/* nave bar */}
     <Navebar ></Navebar>
     {/* hero section */}
     <Hero></Hero>
     {/* about us */}
     <AboutUs></AboutUs>
     {/* explore fitness life  */}
      {/* contact us  */}
      {/* testomoneal */}
      {/* footer */}
      <Footer/>
    </main>
  )
}