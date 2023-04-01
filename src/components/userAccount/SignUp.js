// react icon
import { FaGoogle } from "react-icons/fa";
import { toast, useToast } from "react-toastify";

// formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthState } from "@/src/context/AuthProvider";

const SignUp = ({ setProfileModal }) => {
  const { state, setState } = useContext(AuthState)
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      accepted: false,
    },
    // If needed, the naked note will be added with text, but not used in this component
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is Required!")
        .max(15, "Name must be less than 15 characters."),
      email: Yup.string()
        .required("Email is Required!")
        .email("Invalid E-mail adress."),
      password: Yup.string()
        .required("Password is Required!")
        .min(8, "Password must be more than 8 characters."),
      confirmPassword: Yup.string()
        .required("Confirm Password is Required!")
        .oneOf([Yup.ref("password"), ""], "Password must match."),
      accepted: Yup.bool().oneOf(
        [true],
        "برای ثبت نام باید تمام قوانین سایت  را تایید کنید !"
      ),
    }),
    validateOnMount: true,
    onSubmit: async (values) => {
      const { name, email, password, accepted } = values;
      const valueUser = {
        name,
        email,
        password,
        accepted
      };
      console.log(valueUser);
      try {
        // If you want to set up data, this service is ready
        // const response = await signupForm(valueUser);
        // toast.success(`your registred ${response.data.name} !`);
        // ------------------------------------
        setState({ data: valueUser, register: false });
        toast.success(`عزیز با موفقیت ثبت نام شدید ${valueUser.name} !`)
        // router.refresh();
        setProfileModal(false)
      } catch (error) {
        // if (error.response && error.response.data) {
        //   toast.error(error.response.data.message);
        // }
        toast.error("دوباره تلاش کنید !!")
      }
    },
  });

  return (
    <div className="z-30">
      <form onSubmit={formik.handleSubmit} className="mt-10 pb-5">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 py-3 border  rounded-md outline-none bg-gray-50 
    focus:bg-white  text-[14px] ${formik.touched.name && formik.errors.name && "border-red-500"
              }`}
          />
        </div>

        <div className="mb-4">
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

        <div className="mb-5">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 py-3 border rounded-md outline-none bg-gray-50 
            focus:bg-white  text-[14px] ${formik.touched.confirmPassword &&
              formik.errors.confirmPassword &&
              "border-red-500"
              }`}
          />
        </div>

        <div className="mb-4">
          <div className="form-control text-start">
            <label className="label cursor-pointer flex items-center">
              <input
                type="checkbox"
                name="accepted"
                id="accepted"
                className="checkbox w-4 h-4 cursor-pointer"
                value={formik.values.accepted}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="label-text text-xs font-bold mr-2 text-gray-500 dark:text-gray-600">
                من موافقت می کنم برای دریافت به روز اطلاعات از مارکت کریپتو
              </span>
            </label>
          </div>
          {formik.touched.accepted && formik.errors.accepted ? (
            <p
              style={{
                fontSize: "8px",
                width: "max-content",
                color: "red",
                padding: "5px",
                margin: "0",
                marginTop: "5px",
              }}
            >
              {formik.errors.accepted}
            </p>
          ) : null}
        </div>

        <div className="items-center gap-2 mt-3">
          <button
            type="submit"
            className={`w-full mt-2 p-2.5 flex-1 text-white bg-blue-500 rounded-md
                     outline-none ring-offset-2 ring-indigo-600 focus:ring-2 ${!formik.isValid && "cursor-not-allowed"
              }`}
          >
            ایجاد حساب
          </button>

          <button
            type="button"
            className="flex justify-center items-center gap-2 w-full mt-2 p-2.5 text-[14px] flex-1
                     text-blue-500 rounded-md outline-none border ring-offset-2 ring-blue-500 focus:ring-2 dark:bg-gray-300"
          >
            Continue with
            <FaGoogle size={17} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
