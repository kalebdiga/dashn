import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Logo2 from "./../../../assets/Dashen_Bank.png";
import { Toaster, useToast } from "../../../component/toast/Toast";
import { useTimerContext } from "../../../context/TimerContext";
import { userNameValidationSchema } from "../../../validationSchemas";
import { useRequestOtp } from "./apiHandeler";

const GetOtp = () => {
  const navigate = useNavigate();
  const { setIsTimerExpired, setTimer, isTimerExpired } = useTimerContext();
  const { showToast, toasts } = useToast();

  const handleSubmit = useRequestOtp();

  return (
    <div className="w-full py-4 flex justify-center items-center flex-col">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-textColor font-medium text-lg">
          <img src={Logo2} alt="Logo" className="w-12" />
        </h1>
        <h1 className="text-textColor font-medium text-lg">Login</h1>
        <p>Welcome to Dashen Bank dashboard!</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-col gap-2 mt-6">
          <Formik
            initialValues={{ username: "" }}
            validationSchema={userNameValidationSchema}
            onSubmit={(values) =>
              handleSubmit(
                values,
                navigate,
                setTimer,
                setIsTimerExpired,
                showToast
              )
            }
          >
            <Form>
              <label
                htmlFor="username"
                className="block text-sm text-textColor mb-1"
              >
                Username
              </label>
              <div className="relative">
                <Field
                  name="username"
                  type="text"
                  placeholder="Enter here..."
                  className="w-full h-10 p-2 border rounded-md"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-xs text-red-600"
                />
                <button
                  type="submit"
                  className={`absolute right-2 top-1.5 px-4 py-1 rounded-md text-sm 
                    ${
                      isTimerExpired
                        ? "bg-primary text-white cursor-pointer"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  disabled={!isTimerExpired}
                >
                  Get OTP
                </button>
              </div>
            </Form>
          </Formik>
          <Outlet />
          <Toaster toasts={toasts} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(GetOtp);
