import React, { useEffect, useState } from 'react'
import Leftsidebar from '../components/Leftsidebar'
import Navbar from '../components/Navbar'
import Formfeild from '../components/Formfield'
import { useFormik } from 'formik';
import { createMealSchema, personalInformaionSchema } from '../schema/formsShema';
import { Link } from 'react-router-dom';
import { getPreviousDate } from '../helpers/getPrevioudDate';
import { useDispatch, useSelector } from 'react-redux';
import { addDailyFitnessAndMealsDataAsync, clearDietAndMealApiMessage, selectDietAndMealApiMessage } from '../features/fitnesAndDiet/fitnessAndDietSlice';
import TostifyPop, { errorPop, successPop } from '../components/TostifyPop';


const initialValues = {
    name: '',
    description: '',
    serving_size: 0,
    protein: 0,
    calories: 0,
    carbohydrates: 0,
    fiber: 0,
    fat: 0,
    cholesterol: 0,
    sugar: 0
};
function Createmeal() {
    const [mealType, setmealType] = useState('breakfast');
    const dispatch = useDispatch();
    const requestStatus = useSelector(selectDietAndMealApiMessage);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: createMealSchema,
        onSubmit: async ({
            name,
            description,
            serving_size,
            protein,
            calories,
            carbohydrates,
            fiber,
            fat,
            cholesterol,
            sugar
        }, action) => {
            try {

                if (values.name || values.email || values.profession || values.age || values.phone || values.gender) {
                    const date = getPreviousDate(0);
                    const data = {
                        mealType,
                        date,
                        _id: '',
                        meal: {
                            name,
                            description,
                            images: '',
                            nutrients: {
                                serving_size,
                                protein,
                                calories,
                                carbohydrates,
                                fiber,
                                fat,
                                cholesterol,
                                sugar
                            }
                        }
                    };
                    dispatch(addDailyFitnessAndMealsDataAsync(data));
                    return;
                }
                console.log('provide all field')
            } catch (error) {
                console.log(error);
            }
        }
    });

    useEffect(() => {
        if (requestStatus.success) {
            successPop(requestStatus.success)
            dispatch(clearDietAndMealApiMessage());
            return;
        }
        errorPop(requestStatus.error)
        dispatch(clearDietAndMealApiMessage());
    }, [requestStatus])
    return (
        <div className=" w-full h-[100dvh] pl-[180px] max-md:pl-0 relative ">
            <Navbar />
            <TostifyPop />
            <Leftsidebar />
            <div className=' h-full w-full flex flex-1 flex-col justify-center px-6 py-12  bg-offwhite overflow-auto max-md:py-[70px]'>
                <div className="sm:mx-auto sm:w-full sm:max-w-5xl">
                    <h2 className="mt-10 text-center text-5xl text-black font-bold ">
                        Provide meal information
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full w-full sm:max-w-5xl">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <Formfeild
                            touch={touched.name}
                            error={errors.name}
                            label={"Name"}
                            name={"name"}
                            value={values.name}
                            type={"text"}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                        />
                        <Formfeild
                            touch={touched.description}
                            error={errors.description}
                            label={"Description"}
                            name={"description"}
                            value={values.description}
                            type={"text"}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                        />
                        <div className="flex gap-5">
                            <Formfeild
                                touch={touched.serving_size}
                                error={errors.serving_size}
                                label={"Serving Size in gm"}
                                name={"serving_size"}
                                type={"number"}
                                value={values.serving_size}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                            <Formfeild
                                touch={touched.protein}
                                error={errors.protein}
                                label={"Protein"}
                                name={"protein"}
                                value={values.protein}
                                type={"number"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="flex gap-5">
                            <Formfeild
                                touch={touched.calories}
                                error={errors.calories}
                                label={"Calories"}
                                name={"calories"}
                                value={values.calories}
                                handleBlur={handleBlur}
                                type={"number"}
                                handleChange={handleChange}
                            />
                            <Formfeild
                                touch={touched.carbohydrates}
                                error={errors.carbohydrates}
                                label={"Carbohydrates"}
                                name={"carbohydrates"}
                                value={values.carbohydrates}
                                type={"number"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="flex gap-5">
                            <Formfeild
                                touch={touched.fiber}
                                error={errors.fiber}
                                label={"Fiber"}
                                name={"fiber"}
                                type={"number"}
                                value={values.fiber}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                            <Formfeild
                                touch={touched.fat}
                                error={errors.fat}
                                label={"Fat"}
                                name={"fat"}
                                type={"number"}
                                value={values.fat}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="flex gap-5">
                            <Formfeild
                                touch={touched.cholesterol}
                                error={errors.cholesterol}
                                label={"Cholesterol"}
                                name={"cholesterol"}
                                type={"number"}
                                value={values.cholesterol}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                            <Formfeild
                                touch={touched.sugar}
                                error={errors.sugar}
                                label={"Sugar"}
                                name={"sugar"}
                                type={"number"}
                                value={values.sugar}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                        </div>
                        <div>
                            <div className=' flex gap-6 h-min w-full'>
                                <select id="" className='h-18 w-full px-4 text-left text-3xl font-normal  font-body outline-none shadow-md' value={mealType} onChange={(e) => { setmealType(e.target.value) }} >
                                    <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'breakfast'} >Break fast</option>
                                    <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'lunch'}>Lunch</option>
                                    <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'dinner'}>Dinner</option>
                                    <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'snackAm'}>Snack am</option>
                                    <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'snackPm'}>Snack pm</option>

                                </select>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-3xl font-semibold leading-6 text-white shadow-xl hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 transition-all"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-2xl text-gray-500">
                        Go back to {" "}
                        <Link to="/my-profile" className="font-semibold leading-6 text-primary hover:text-green-700">
                            Home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Createmeal