"use client"
import { baseApiUrl } from "@/constant/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Login() {
  const router= useRouter();
  async function handleSubmit(event:any){
    event.preventDefault();
    event.stopPropagation();
    try {
      const email = event.target.email.value;
      const response = await fetch(baseApiUrl+'/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({email})
      });
      const data = await response.json();
      console.log(data);
      router.push('/')
    } catch (error) {
      console.log(error);
    }
 
  }

  return ( <div className='h-full w-full flex items-center justify-center min-h-screen bg-gray-500'>
      <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit} >
            <input type="email" name="email" placeholder="enter your email" />
            <input type="submit" name="btn" id="submit" placeholder="submit" value={"submit"}/>
      </form>
    </div>
  )
}
