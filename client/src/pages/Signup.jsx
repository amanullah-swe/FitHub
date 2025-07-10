import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logo } from "../assets";
import Formfeild from "../components/Formfield";
import TostifyPop, { successPop, errorPop } from "../components/TostifyPop";
import { signupSchema } from "../schema/formsShema";
import { apiPost } from "../apis/api_functions";
import { baseUrl } from "../app/constant";
import { API_ENDPOINTS } from "../apis/api_end_point";

export default function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
    profession: "",
    age: "",
    phone: "",
    gender: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: async (formValues) => {
        if (formValues.password !== formValues.confirmPassword) {
          errorPop("Passwords do not match");
          return;
        }

        try {
          const res = await apiPost(API_ENDPOINTS.AUTH.REGISTER, formValues);

          successPop(res?.message || "Signup successful");

          setTimeout(() => {
            navigate("/signin");
          }, 1000);
        } catch (err) {
          console.error("Signup error:", err);
          const message = err?.error || "Signup failed";
          errorPop(message);
        }
      },
    });

  return (
    <>
      <TostifyPop />
      <div className="flex min-h-[100dvh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-offwhite">
        <div className="sm:mx-auto sm:w-full sm:max-w-5xl">
          <img
            className="mx-auto h-40 w-40"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-5xl font-bold">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-5xl">
          <form
            className="space-y-3"
            onSubmit={handleSubmit}
          >
            <Formfeild
              {...fieldProps(
                "Name",
                "name",
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              )}
            />
            <Formfeild
              {...fieldProps(
                "Email",
                "email",
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              )}
            />
            <Formfeild
              {...fieldProps(
                "Phone",
                "phone",
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              )}
            />
            <Formfeild
              {...fieldProps(
                "Profession",
                "profession",
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              )}
            />
            <div className="flex justify-between gap-6">
              <Formfeild
                {...fieldProps(
                  "Age",
                  "age",
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur
                )}
              />
              <Formfeild
                {...fieldProps(
                  "Gender",
                  "gender",
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur
                )}
              />
            </div>
            <Formfeild
              {...fieldProps(
                "Password",
                "password",
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              )}
            />
            <Formfeild
              {...fieldProps(
                "Confirm Password",
                "confirmPassword",
                values,
                errors,
                touched,
                handleChange,
                handleBlur
              )}
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-2xl font-semibold text-white shadow-xl hover:bg-secondary hover:text-primary transition-all"
            >
              Sign up
            </button>
          </form>

          <p className="mt-10 text-center text-2xl text-gray-500">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-primary hover:text-green-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

// Helper to reduce repetition
function fieldProps(
  label,
  name,
  values,
  errors,
  touched,
  handleChange,
  handleBlur
) {
  return {
    label,
    name,
    value: values[name],
    error: errors[name],
    touch: touched[name],
    handleChange,
    handleBlur,
  };
}
