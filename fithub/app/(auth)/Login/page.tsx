"use client"
import axios from "axios";

export default function Login() {

  async function handleSubmit(event:any){
    event.preventDefault();
    event.stopPropagation();
    try {
      const email = event.target.email.value;
      const password = event.target.password.value;
      const phone = event.target.phone.value;
      console.log(email, '\n' +password + '\n' + phone);
      const response = await axios.post('/api/auth/login',{
        email,
        phone,
        password
      });
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
 
  }

  return ( <div className='h-full w-full flex items-center justify-center min-h-screen bg-gray-500'>
      <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit} >
            <input type="email" name="email" placeholder="enter your email" />
            <input type="text" name="phone" placeholder="enter your number" />
            <input type="password" name="password" placeholder="password"/>
            <input type="submit" name="btn" id="submit" placeholder="submit" value={"submit"}/>
      </form>
    </div>
  )
}
