// react icon
import { FaGoogle } from "react-icons/fa";
import { toast, useToast } from "react-toastify";
// formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthState } from "@/src/context/AuthProvider";
import { useContext, useEffect } from "react";
import Cookies from 'js-cookie';

const LogIn = ({ setProfileModal }) => {
  const { state, setState } = useContext(AuthState)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      accepted: false,
    },
    validateOnMount: true,

    onSubmit: async (values) => {
      const { email, password, accepted } = values;
      if (accepted) {
        Cookies.set('email', email);
        Cookies.set('password', password);
      }
      if (email === state.data.email && password === state.data.password) {
        console.log(state);

        // Login successful
        setState({ data: state.data, register: true })
        toast.success(`${state.data.name}  خوشآمدی`);

        setProfileModal(false)
        console.log(state.register);
      } else {
        // Login failed
        toast.error("دوباره تلاش کنید!");
      }
    },

    //-------------------------   
    // If you want to set up data, this service is ready

    // onSubmit: async (values) => {
    //   const { email, password } = values;
    //   const valueUser = {
    //     email,
    //     password,
    //   };

    //   try {
    //     const { data } = await loginForm(valueUser);
    //     toast.success(`welcome ${data.name} !`);
    //     setAuth(data);
    //     Navigates(redirect);
    //   } catch (error) {
    //     toast.error(error.response.data.message);
    //   }
    // }
    //----------------------------
  });

  useEffect(() => {
    const email = Cookies.get('email');
    const password = Cookies.get('password');

    if (email && password) {
      // Pre-fill the email and password fields
      formik.setValues({
        ...formik.values,
        email,
        password,
        accepted: true, // Check the "Remember Me" checkbox
      });
    }
  }, []); // Run this effect only once, on component mount

  return (
    <div className="z-30">
      <form onSubmit={formik.handleSubmit} className="mt-10 pb-5">
        <div className="mb-3">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 py-3 border rounded-md outline-none bg-gray-50 
          focus:bg-white  text-[14px] ${formik.touched.email && formik.errors.email && "border-red-500"
              }`}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 py-3 border  rounded-md outline-none bg-gray-50 
          focus:bg-white  text-[14px] ${formik.touched.password &&
              formik.errors.password &&
              "border-red-500"
              }`}
          />
        </div>

        <div className="mb-4">
          <div className="form-control text-start">
            <label
              htmlFor="accepted"
              className="label cursor-pointer flex items-center"
            >
              <input
                type="checkbox"
                name="accepted"
                id="accepted"
                className="checkbox w-4 h-4 cursor-pointer"
                value={formik.values.accepted}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="label-text mr-2 text-gray-500 dark:text-gray-500">
                من را بخاطر بسپار
              </span>
            </label>
          </div>
        </div>

        <div className="items-center  gap-2 mt-3 sm:flex">
          <button
            type="button"
            className="flex justify-center items-center gap-2 w-full mt-2 p-2.5 text-[14px] 
          flex-1 text-blue-500 rounded-md outline-none border ring-offset-2 ring-blue-500 
          focus:ring-2 dark:bg-gray-300"
          >
            Continue with <FaGoogle size={17} />
          </button>

          <button
            type="submit"
            className={`w-full mt-2 p-2.5 flex-1 text-white bg-blue-500 rounded-md
            outline-none ring-offset-2 ring-indigo-600 focus:ring-2 ${!formik.isValid && "cursor-not-allowed"
              }`}
          >
            logIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
