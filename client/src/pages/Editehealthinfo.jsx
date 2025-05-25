import React, { useEffect, useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import Formfeild from "../components/Formfield";
import { healthInformaionSchema } from "../schema/formsShema";
import TostifyPop, { errorPop, successPop } from "../components/TostifyPop";

const prefferdworkoutArray = [
  "yoga",
  "cardio",
  "weight training",
  "strength training",
];
const medicalConditionsArray = [
  "Heart Issues",
  "BP Issues",
  "Kidney Stones",
  "Bone Loss",
  "Digestive Issues",
  "Heart Disease",
  "Diabetes",
  "Obesity",
  "Anemia",
  "Depression",
  "Anxiety",
  "Muscle Loss",
];
const dietaryPreferencesArray = [
  "Vegetarian",
  "Non-Vegetarian",
  "Vegan",
  "Pescatarian",
  "Semi-Vegetarian",
  "Omnivorous",
];
const fitnessGoalsArray = [
  "Fat Loss",
  "Muscle Building",
  "Cutting",
  "Bulking",
  "Calisthenics",
];

const EditeHealthinfo = ({ user, onSubmit, onClose }) => {
  const initialValues = {
    height: {
      value: user.height?.value || 0,
      unit: user.height?.unit || "feet",
    },
    weight: {
      value: user.weight?.value || 0,
      unit: user.weight?.unit || "Killogram",
    },
    age: user.age || 0,
    proteinGoal: user.proteinGoal || 0,
    caloriesGoal: user.caloriesGoal || 0,
    fitnessGoals: user.fitnessGoals || [],
    medicalConditions: user.medicalConditions || [],
    preferredWorkouts: user.preferredWorkouts || [],
    dietaryPreferences: user.dietaryPreferences || [],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={healthInformaionSchema}
      onSubmit={async (values, actions) => {
        try {
          await onSubmit(values);
          successPop("Health information updated successfully!");
          if (onClose) onClose();
        } catch (error) {
          errorPop("Something went wrong. Please try again.");
        }
      }}
    >
      {({ values, handleBlur, handleChange, touched, errors }) => (
        <>
          <TostifyPop />
          <Form className="flex relative flex-1 flex-col justify-center px-6 py-12 bg-offwhite ">
            <h2 className="text-center text-5xl font-bold text-black mb-10">
              Edit Health Information
            </h2>

            {onClose && (
              <div className="text-center mt-4">
                <button
                  onClick={onClose}
                  type="button"
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 font-bold text-5xl"
                >
                  &times;
                </button>
              </div>
            )}

            <div className="flex gap-4 mb-4">
              <Formfeild
                label="Calories Goal"
                name="caloriesGoal"
                value={values.caloriesGoal}
                error={errors.caloriesGoal}
                touch={touched.caloriesGoal}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Formfeild
                label="Protein Goal"
                name="proteinGoal"
                value={values.proteinGoal}
                error={errors.proteinGoal}
                touch={touched.proteinGoal}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Formfeild
                label="Age"
                name="age"
                type="number"
                value={values.age}
                error={errors.age}
                touch={touched.age}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <div className="flex gap-4 mb-4">
              <Formfeild
                label="Weight"
                name="weight.value"
                value={values.weight?.value}
                error={errors.weight?.value}
                touch={touched.weight?.value}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Formfeild
                label="Unit"
                name="weight.unit"
                value={values.weight?.unit}
                error={errors.weight?.unit}
                touch={touched.weight?.unit}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <div className="flex gap-4 mb-4">
              <Formfeild
                label="Height"
                name="height.value"
                type="number"
                value={values.height?.value}
                error={errors.height?.value}
                touch={touched.height?.value}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Formfeild
                label="Unit"
                name="height.unit"
                value={values.height?.unit}
                error={errors.height?.unit}
                touch={touched.height?.unit}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <ArrayField
              name="fitnessGoals"
              values={values}
              dropdwonlist={fitnessGoalsArray}
              label="Fitness Goals"
            />
            <ArrayField
              name="medicalConditions"
              values={values}
              dropdwonlist={medicalConditionsArray}
              label="Medical Conditions"
            />
            <ArrayField
              name="dietaryPreferences"
              values={values}
              dropdwonlist={dietaryPreferencesArray}
              label="Dietary Preferences"
            />
            <ArrayField
              name="preferredWorkouts"
              values={values}
              dropdwonlist={prefferdworkoutArray}
              label="Preferred Workouts"
            />

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-6 text-3xl font-semibold text-white bg-customgreen rounded-md shadow hover:bg-secondary hover:text-primary transition-all"
              >
                Save
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default EditeHealthinfo;

const ArrayField = ({ name, values, dropdwonlist, label }) => {
  const [newValue, setNewValue] = useState(dropdwonlist[0]);
  const [view, setView] = useState("h-[50px]");

  const handleChange = (e) => {
    e.preventDefault();
    setNewValue(e.target.value);
  };

  return (
    <FieldArray name={name}>
      {({ insert, remove, push }) => (
        <div className=" gap-6 w-full">
          <label className="text-2xl font-semibold">{label}</label>
          <div className="flex flex-row gap-8">
            <select
              value={newValue}
              onChange={handleChange}
              className="h-12 w-48 shadow-md border p-2"
            >
              {dropdwonlist.map((item, index) => (
                <option
                  key={index}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => push(newValue)}
              className="bg-customgreen text-white w-10 h-10 rounded-full"
            >
              +
            </button>

            <div className=" ml-auto">
              <button
                type="button"
                onClick={() =>
                  setView(view === "h-[200px]" ? "h-[50px]" : "h-[200px]")
                }
                className="text-primary underline"
              >
                View
              </button>
            </div>
          </div>

          <div className={`border shadow-md p-4 w-full overflow-auto ${view}`}>
            {values[name]?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2 border p-2"
              >
                <p>{item}</p>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white w-10 h-10 rounded-full"
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </FieldArray>
  );
};

export { ArrayField };
