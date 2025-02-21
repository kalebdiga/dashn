import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Logo2 from "./../../../assets/Dashen_Bank.png";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Toaster, useToast } from "../../../component/toast/Toast";
import { passwordValidationSchema } from "../../../validationSchemas";
import { useSubmitLogin } from "./apiHandeler";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accesstoken = location.state?.accesstoken || null;

  const dispatch = useDispatch();
  const { showToast, toasts } = useToast();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = useSubmitLogin();

  useEffect(() => {
    if (!accesstoken) navigate("/otp");
  }, [accesstoken, navigate]);

  return (
    <>
      <div className="w-full py-4 flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center mb-6">
          <h1 className="text-textColor font-medium text-lg">
            <img src={Logo2} alt="Logo" className="w-12" />
          </h1>
          <h1 className="text-textColor font-medium text-lg">Login</h1>
          <p>Welcome to Dashen Bank dashboard!</p>
        </div>

        <Formik
          initialValues={{ password: "" }}
          validationSchema={passwordValidationSchema}
          onSubmit={(values) =>
            handleSubmit(values, accesstoken, dispatch, showToast)
          }
        >
          <Form className="w-full flex flex-col justify-center items-center">
            <div className="w-4/5 flex flex-col gap-2">
              <label
                htmlFor="password"
                className="block text-sm text-textColor"
              >
                Enter PIN
              </label>
              <div className="relative">
                <Field
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="*********"
                  className="w-full h-10 p-2 border rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-textColor"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
                </span>
              </div>

              <div className="w-full mt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] h-11 rounded-lg text-white hover:bg-gradient-to-r from-[#006869] to-cyan-500"
                >
                  Sign In
                </button>
              </div>

              <div className="w-full flex justify-end mt-2">
                <p className="text-sm">
                  <Link to="/signup" className="text-brandColor">
                    Forget PIN?
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      <Toaster toasts={toasts} />
    </>
  );
};

export default Login;
