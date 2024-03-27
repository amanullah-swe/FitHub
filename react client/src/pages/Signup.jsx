import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { authRegisterAsync, selectRegesterStatus } from '../features/user/userSlice';
import Formfeild from '../components/Formfield';
import { logo } from '../assets';
export default function signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const apiCallStatus = useSelector(selectRegesterStatus);
    const initialValues = {
        name: '',
        email: '',
        confirmPassword: '',
        password: '',
        profession: '',
        age: '',
        phone: '',
        gender: '',
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values, action) => {
            try {
                if (values.password != values.confirmPassword) return;
                dispatch(authRegisterAsync(values));
                if (apiCallStatus.status == 'idl') {
                    action.resetForm();
                    setTimeout(() => {
                        navigate('/signin', { replace: true })
                    }, 3000)
                    return;
                }
                console.log(apiCallStatus);
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-offwhite">
                <div className="sm:mx-auto sm:w-full sm:max-w-5xl">
                    <img
                        className="mx-auto h-40 w-40"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tigh">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-5xl">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <Formfeild label={"Name"} name={"name"} type={"text"} value={values.name} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Email"} name={"email"} type={"email"} value={values.email} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Phone"} name={"phone"} type={"number"} value={values.phone} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Profession"} name={"profession"} type={"text"} value={values.profession} handleBlur={handleBlur} handleChange={handleChange} />
                        <div className='flex justify-between gap-6'>
                            <Formfeild label={"Age"} name={"age"} type={"text"} value={values.age} handleBlur={handleBlur} handleChange={handleChange} />
                            <Formfeild label={"gender"} name={"gender"} type={"text"} value={values.gender} handleBlur={handleBlur} handleChange={handleChange} />
                        </div>
                        <Formfeild label={"Password"} name={"password"} type={"password"} value={values.password} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Confirm password"} name={"confirmPassword"} type={"password"} value={values.confirmPassword} handleBlur={handleBlur} handleChange={handleChange} />
                        <div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-2xl font-semibold leading-6 text-white shadow-xl hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 transition-all">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-2xl text-gray-500">
                        Already have a Account{" "}
                        <Link to="/signin" className="font-semibold leading-6 text-primary hover:text-green-700">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
