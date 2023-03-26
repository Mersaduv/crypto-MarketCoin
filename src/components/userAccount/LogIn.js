// react icon
import { FaGoogle } from "react-icons/fa";

// formik
import { useFormik } from "formik";
import * as Yup from "yup";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      accepted: false,
    },
    validateOnMount: true,
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
      accepted: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    }),
  });

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
