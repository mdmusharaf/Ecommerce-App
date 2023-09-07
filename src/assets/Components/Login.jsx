import { LoginButton } from "./Buttons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("*Required"),
    password: yup.string().min(5).required("*Required"),
  });
  // const uniqueKey = localStorage.getItem("uniqueKey");
  // console.log(uniqueKey);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      // const storedData = localStorage.getItem(`users${uniqueKey}`);
      // console.log(storedData);
      // const regData = storedData ? JSON.parse(storedData) : {};
      // console.log(regData);
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      console.log(existingUsers);
      const matchingUser = existingUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      console.log(matchingUser);
      if (matchingUser) {
        toast.success("Logged in successfully", {
          position: "top-right",
        });
        localStorage.setItem("loggedIN", true);
        navigate("/");
      } else {
        toast.error("Invalid email or password ", {
          position: "top-right",
        });
      }
    },
  });
  // console.log(formik.values.email);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-sm m-8">
          <h1 className=" text-center pt-10 text-2xl font-semibold text-black">
            Login
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className="mx-10 w-[450px]  my-6">
            <div className=" pb-4 ">
              <label htmlFor="email" className="pb-2 block text-base font-bold">
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
            <div className=" pt-4 pb-12 ">
              <label
                htmlFor="password"
                className="pb-2  block text-base font-bold">
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

            <div className="flex justify-center">
              <LoginButton />
            </div>

            <div className="text-center">
              <hr className="inline-block bg-gray-500 my-5 w-20 h-[2px]" />
            </div>
            <div className="text-center">
              <span className="text-gray-500"> Dont have an Account?</span>
              <Link to="/register" className="text-black font-semibold">
                Register Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
