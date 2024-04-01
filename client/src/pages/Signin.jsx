import { useState } from "react"
import { useDispatch } from 'react-redux'
import { authLoginAsync } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Formfeild from "../components/Formfield";
import { logo } from "../assets";
export default function signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("i got click");
        dispatch(authLoginAsync({ email, password }));
        setTimeout(() => {
            navigate('/home')
        }, 3000)

    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-offwhite">
            <div className="sm:mx-auto sm:w-full sm:max-w-5xl">
                <img
                    className="mx-auto h-40 w-40"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tigh">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">
                <form className="space-y-10" onSubmit={handleSubmite}>
                    <Formfeild name={"email"} type={"email"} label={'Email'} value={email} handleBlur={() => { }} handleChange={(e) => setEmail(e.target.value)} />
                    <Formfeild name={"password"} type={"password"} label={'password'} value={password} handleBlur={() => { }} handleChange={(e) => setPassword(e.target.value)} />

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-2xl font-semibold leading-6 text-white shadow-xl hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 transition-all">
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-2xl text-gray-500">
                    Create a Account?{' '}
                    <Link to="/signup" className="font-semibold leading-6 text-primary hover:text-green-700">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>)
}
