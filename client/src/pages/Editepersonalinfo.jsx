import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { authRegisterAsync, clearRequestStatus, selectRegesterStatus, selectRequestStatus, selectUser, updateUserPesonalInfromationAsync } from '../features/user/userSlice';
import Formfeild from "../components/Formfield"
import { personalInformaionSchema } from '../schema/formsShema';
import TostifyPop, { errorPop, successPop } from '../components/TostifyPop';
import { useEffect } from 'react';
export default function Editepersonalinfo() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const apiCallStatus = useSelector(selectRegesterStatus);
    const requestStatus = useSelector(selectRequestStatus);
    const user = useSelector(selectUser);
    const initialValues = {
        name: user.name,
        email: user.email,
        profession: user.profession,
        age: user.age,
        phone: user.phone,
        gender: user.gender,
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: personalInformaionSchema,
        onSubmit: async (values, action) => {
            try {

                if (values.name || values.email || values.profession || values.age || values.phone || values.gender) {
                    dispatch(updateUserPesonalInfromationAsync(values));
                    return;
                }
                errorPop('provide all field')
            } catch (error) {
                console.log(error);
            }
        }
    });

    useEffect(() => {
        if (requestStatus.success) {
            successPop(requestStatus.success)
            dispatch(clearRequestStatus());
            setTimeout(() => {
                navigate('/my-profile')
            }, 1500)
            return;
        }
        errorPop(requestStatus.error)
        dispatch(clearRequestStatus());
    }, [requestStatus])

    return (
        <>
            <TostifyPop />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-offwhite">
                <div className="sm:mx-auto sm:w-full sm:max-w-5xl">
                    <h2 className="mt-10 text-center text-5xl text-black font-bold leading-9 tracking-tigh">
                        Change Information as you like
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full w-full sm:max-w-5xl">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <Formfeild touch={touched.name} error={errors.name} label={"Name"} name={"name"} value={values.name} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild touch={touched.email} error={errors.email} label={"Email"} name={"email"} value={values.email} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild touch={touched.phone} error={errors.phone} label={"Phone"} name={"phone"} value={values.phone} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild touch={touched.profession} error={errors.profession} label={"Profession"} name={"profession"} type={"text"} value={values.profession} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild touch={touched.gender} error={errors.gender} label={"gender"} name={"gender"} type={"text"} value={values.gender} handleBlur={handleBlur} handleChange={handleChange} />

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-3xl font-semibold leading-6 text-white shadow-xl hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 transition-all">
                                save
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-2xl text-gray-500">
                        Go back to {" "}
                        <Link to="/my-profile" className="font-semibold leading-6 text-primary hover:text-green-700">
                            Profile
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}