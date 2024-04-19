import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { authLoginAsync, clearRequestStatus, selectRequestStatus } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Formfeild from "../components/Formfield";
import { logo } from "../assets";
import { ToastContainer, Zoom, toast } from "react-toastify";
import TostifyPop, { errorPop, successPop } from "../components/TostifyPop";
export default function signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const requestStatus = useSelector(selectRequestStatus);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(authLoginAsync({ email, password }));
    }
    useEffect(() => {
        if (requestStatus.success) {
            console.log(requestStatus);
            successPop(requestStatus.success)
            dispatch(clearRequestStatus());
            setTimeout(() => {
                navigate('/home')
            }, 1000)
            return;
        }
        console.log(requestStatus.error);
        errorPop(requestStatus.error)
        dispatch(clearRequestStatus());
    }, [requestStatus])




    return (
        <div className="flex flex-1 flex-col justify-center h-full min-h-screen px-6 py-12 lg:px-8 bg-offwhite">
            <TostifyPop />
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

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl mb-32">
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
