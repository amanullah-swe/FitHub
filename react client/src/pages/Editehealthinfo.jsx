import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import Formfeild from '../components/Formfield';
import { Link } from 'react-router-dom';

const initialValues = {

    height: {
        value: "",
        unit: ""
    },
    weight: {
        value: '',
        unit: ""
    },
    fitnessGoals: [],
    medicalConditions: [],
    preferredWorkouts: [],
    dietaryPreferences: [],
};

const workoutType = ['yoga', 'cardio', 'weight', 'traning', 'strenght', 'training']
const dietaryPreferences = ['none vage']
const EditeHealthinfo = () => (
    <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
            console.log(values);
        }}
    >
        {({ values, handleBlur, handleChange }) => (
            <Form className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-offwhite">
                <div className="sm:mx-auto sm:w-full sm:max-w-5xl mt-16">
                    <h2 className="mt-10 text-center text-5xl text-black font-bold leading-9 tracking-tigh">
                        Change Information as you like
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full w-full sm:max-w-5xl">
                    <div className='flex gap-4'>
                        <Formfeild label={"Weight"} name={"weight.value"} type={"number"} value={values.weight.value} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Unit"} name={"weight.unit"} type={"text"} value={values.weight.unit} handleBlur={handleBlur} handleChange={handleChange} />
                    </div>
                    <div className='flex gap-4'>
                        <Formfeild label={"Height"} name={"height.value"} type={"number"} value={values.height.value} handleBlur={handleBlur} handleChange={handleChange} />
                        <Formfeild label={"Unit"} name={"height.unit"} type={"text"} value={values.height.unit} handleBlur={handleBlur} handleChange={handleChange} />
                    </div>
                    <ArrayField name={"fitnessGoals"} values={values} dropdwonlist={workoutType} label={'Fitness Goals'} />
                    <ArrayField name={"medicalConditions"} values={values} dropdwonlist={dietaryPreferences} label={'medicalConditions'} />
                    <ArrayField name={"dietaryPreferences"} values={values} dropdwonlist={dietaryPreferences} label={'dietary Preferences'} />
                    <ArrayField name={"preferredWorkouts"} values={values} dropdwonlist={dietaryPreferences} label={'preferred Workouts'} />
                    <ArrayField name={"dietaryPreferences"} values={values} dropdwonlist={dietaryPreferences} label={'Dietary Preferences'} />
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-3xl font-semibold leading-6 text-white shadow-xl hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 transition-all">
                            save
                        </button>
                    </div>
                    <p className="mt-10 text-center text-2xl text-gray-500">
                        Go back to {" "}
                        <Link to="/my-profile" className="font-semibold leading-6 text-primary hover:text-green-700">
                            Profile
                        </Link>
                    </p>
                </div>
            </Form>
        )}
    </Formik>
);

export default EditeHealthinfo;

const ArrayField = ({ name, values, dropdwonlist, label }) => {

    const [newValue, setNewValue] = useState(dropdwonlist[0]);
    const [view, setView] = useState('h-[50px]')

    const handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setNewValue(e.target.value);
    }
    return (<FieldArray name={name} >
        {({ insert, remove, push }) => (
            <>
                <div className='flex justify-between'>
                    <label className="block text-2xl font-semibold leading-10 mt-4">
                        {label}
                    </label>
                    <button onClick={() => setView((prev) => prev == 'h-[200px]' ? "h-[50px]" : 'h-[200px]')}>veiw</button>
                </div>
                <div className='flex w-full gap-8 mb-4'>
                    <div className={`px-4 text-left text-3xl font-normal leading-8 font-body outline-none shadow-md w-full border flex flex-col ${view} p-3 overflow-auto`}>
                        {values[name].length > 0 &&
                            values[name].map((item, index) => (
                                <div className=" text-3xl font-normal leading-8 font-body px-4 py-4 my-4  border justify-between flex gap-1 p-2 w-full" key={index}>
                                    <p>{item}</p>
                                    <div className="col">
                                        <button
                                            type="button"
                                            className='bg-customgreen w-16 h-16 flex justify-center items-center text-white text-5xl rounded-full shadow'
                                            onClick={() => remove(index)}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <select className=' w-[250px] max-sm:w-[100px] h-[50px] px-4 text-left text-3xl font-normal leading-8 font-body outline-none shadow-md' onChange={handleChange}>
                        {dropdwonlist.map((item, index) => (
                            <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4 ' key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className='w-1/4 flex justify-center items-center'>
                        <button
                            type="button"
                            className='bg-customgreen w-16 h-16 flex justify-center items-center text-white text-5xl rounded-full shadow'
                            onClick={(e) => { e.stopPropagation(); e.preventDefault(); push(newValue) }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </>
        )
        }
    </FieldArray >)
}