import Image from "./Image";
import { RegisterButton } from "./Buttons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const nav = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("*Required"),
    username: yup.string().min(5).required("*Required"),
    password: yup.string().min(5).required("*Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password must Match")
      .required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      // const uniqueKey = new Date().getTime().toString();
      // console.log(uniqueKey);

      const exist = JSON.parse(localStorage.getItem("users")) || [];
      console.log(exist);
      const users = {
        email: values.email,
        password: values.password,
      };
      exist.push(users);
      localStorage.setItem("users", JSON.stringify(exist));

      toast.success("user registered successfully", {
        position: "top-right",
      });

      nav("/login");
    },
  });
  return (
    <>
      <div className="bg-white shadow-md  rounded-sm m-8 grid  md:grid-cols-2">
        <form onSubmit={formik.handleSubmit} className="mx-10 my-6">
          <h1 className="text-2xl font-semibold text-black">Register Here</h1>
          <div className="pt-6 pb-2">
            <label
              htmlFor="username"
              className="pb-4 block text-base font-semibold">
              Username
            </label>

            <input
              type="text"
              value={formik.values.username}
              className={`border-2 w-full p-2 rounded-md border-gray-500 ${
                formik.errors.username ? "border-red-600" : ""
              } `}
              placeholder="Enter Username"
              id="username"
              onChange={formik.handleChange}
            />
            {formik.errors.username ? (
              <p className="text-red-600">{formik.errors.username}</p>
            ) : (
              ""
            )}
          </div>
          <div className=" py-2 ">
            <label
              htmlFor="email"
              className="pb-2 block text-base font-semibold">
              Email
            </label>
            <input
              type="email"
              value={formik.values.email}
              className={`border-2 w-full p-2 rounded-md border-gray-500 ${
                formik.errors.email ? "border-red-600" : ""
              } `}
              placeholder="Enter Email"
              id="email"
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <p className="text-red-600">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className=" py-2 ">
            <label
              htmlFor="password"
              className="pb-2 block text-base font-semibold">
              Password
            </label>
            <input
              type="password"
              value={formik.values.password}
              className={`border-2 w-full p-2 rounded-md border-gray-500 ${
                formik.errors.password ? "border-red-600" : ""
              } `}
              placeholder="Enter Password"
              id="password"
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <p className="text-red-600">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className=" py-2 pb-6 ">
            <label
              htmlFor="confirmPassword"
              className="pb-2 block text-base font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              value={formik.values.confirmPassword}
              className={`border-2 w-full p-2 rounded-md border-gray-500 ${
                formik.errors.confirmPassword ? "border-red-600" : ""
              } `}
              placeholder="confirm Password"
              id="confirmPassword"
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword ? (
              <p className="text-red-600">{formik.errors.confirmPassword}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex pb-5 justify-center">
            <RegisterButton disabled={formik.isSubmitting} />
          </div>
          <div className="text-center">
            <Link
              className="text-base text-gray-600 text-center font-semibold"
              to="/login">
              Already A user?{" "}
              <span className="font-semibold text-black">Login here</span>
            </Link>
          </div>
        </form>
        <Image />
      </div>
    </>
  );
}

export default Register;
