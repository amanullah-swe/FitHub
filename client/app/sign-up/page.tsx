"use client"
import axios from "axios";

export default function SignUp() {

  async function handleSubmit(event:any){
    event.preventDefault();
    event.stopPropagation();
    try {
      const email = event.target.email.value;
      const name = event.target.name.value;
      const response = await axios.post('/api/auth/signup',{
        email,
        name,
      });
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
 
  }

  return ( <div className='h-full w-full flex items-center justify-center min-h-screen bg-gray-500'>
      <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit} >
            <input type="email" name="email" placeholder="enter your email" />
            <input type="text" name="name" placeholder="enter your name" />
            <input type="submit" name="btn" id="submit" placeholder="submit" value={"submit"}/>
      </form>
    </div>
  )
}
