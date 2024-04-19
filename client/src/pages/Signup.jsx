import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { authRegisterAsync, selectRegesterStatus } from '../features/user/userSlice';
import Formfeild from '../components/Formfield';
import { logo } from '../assets';
import { signupSchema } from '../schema/formsShema';
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
        validationSchema: signupSchema,
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
                        <Formfeild label={"Name"} name={"name"} value={values.name} error={errors.name} touch={touched.name} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Email"} name={"email"} value={values.email} error={errors.email} touch={touched.email} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Phone"} name={"phone"} value={values.phone} error={errors.phone} touch={touched.phone} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Profession"} name={"profession"} value={values.profession} error={errors.profession} touch={touched.profession} handleBlur={handleBlur} handleChange={handleChange} />
                        <div className='flex justify-between gap-6'>
                            <Formfeild label={"Age"} name={"age"} value={values.age} error={errors.age} touch={touched.age} handleBlur={handleBlur} handleChange={handleChange} />
                            <Formfeild label={"gender"} name={"gender"} value={values.gender} error={errors.gender} touch={touched.gender} handleBlur={handleBlur} handleChange={handleChange} />
                        </div>
                        <Formfeild label={"Password"} name={"password"} value={values.password} error={errors.password} touch={touched.password} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Confirm password"} name={"confirmPassword"} value={values.confirmPassword} error={errors.confirmPassword} touch={touched.confirmPassword} handleBlur={handleBlur} handleChange={handleChange} />
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
