import { useFormik } from "formik";
import { personalInformaionSchema } from "../schema/formsShema";

import TostifyPop, { errorPop, successPop } from "../components/TostifyPop";
import Formfeild from "../components/Formfield";

export default function EditPersonalInfoModal({ user, onClose, onUpdate }) {
  const initialValues = {
    name: user.name || "",
    email: user.email || "",
    profession: user.profession || "",
    age: user.age || "",
    phone: user.phone || "",
    gender: user.gender || "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: personalInformaionSchema,
      onSubmit: async (values) => {
        try {
          const allFilled = Object.values(values).every((v) => v !== "");
          if (!allFilled) {
            errorPop("Please provide all fields.");
            return;
          }

          await onUpdate(values); // trigger the update function passed from parent
          successPop("Information updated successfully!");
          onClose(); // close modal after success
        } catch (error) {
          errorPop("Something went wrong!");
          console.error(error);
        }
      },
    });

  return (
    <>
      <TostifyPop />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 font-bold text-5xl"
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Edit Your Information
          </h2>
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <Formfeild
              touch={touched.name}
              error={errors.name}
              label={"Name"}
              name={"name"}
              value={values.name}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Formfeild
              touch={touched.email}
              error={errors.email}
              label={"Email"}
              name={"email"}
              value={values.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Formfeild
              touch={touched.phone}
              error={errors.phone}
              label={"Phone"}
              name={"phone"}
              value={values.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Formfeild
              touch={touched.profession}
              error={errors.profession}
              label={"Profession"}
              name={"profession"}
              type={"text"}
              value={values.profession}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Formfeild
              touch={touched.gender}
              error={errors.gender}
              label={"Gender"}
              name={"gender"}
              type={"text"}
              value={values.gender}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-customgreen hover:bg-secondary text-white text-2xl font-semibold py-4 rounded-md transition-all"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
