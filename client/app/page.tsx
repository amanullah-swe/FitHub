import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" h-screen w-full flex justify-center gap-5">
     <Link href={'/login'}>login</Link>
     <Link href={'/sign-up'}>sign up</Link>
     <Link href={'/home'}>home</Link>
    </main>
  )
}
