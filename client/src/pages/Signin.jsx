import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Formfeild from "../components/Formfield";
import { logo } from "../assets";
import TostifyPop, { errorPop, successPop } from "../components/TostifyPop";
import { apiPost } from "../apis/api_functions"; // Update the path as per your project structure
import { API_ENDPOINTS } from "../apis/api_end_point";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialEmail = params.get("email") || "";
  const initialPassword = params.get("password") || "";

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [loading, setLoading] = useState(false);

  const handleSubmite = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!email || !password) {
      errorPop("Please provide both email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await apiPost(API_ENDPOINTS.AUTH.LOGIN, { email, password }); // Adjust your endpoint accordingly
      successPop("Login successful!");

      // Save token or user ID if needed
      localStorage.setItem("isLogin", true);
      // You can also store user info like ID: localStorage.setItem("userId", res.user._id);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      errorPop(err.error || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center h-full min-h-[100dvh] px-6 py-12 lg:px-8 bg-offwhite">
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
        <form
          className="space-y-10"
          onSubmit={handleSubmite}
        >
          <Formfeild
            name={"email"}
            type={"email"}
            label={"Email"}
            value={email}
            handleBlur={() => {}}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Formfeild
            name={"password"}
            type={"password"}
            label={"Password"}
            value={password}
            handleBlur={() => {}}
            handleChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-customgreen px-12 py-6 text-2xl font-semibold leading-6 text-white shadow-xl hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 transition-all"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-2xl text-gray-500">
          Create an Account?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-primary hover:text-green-700"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
