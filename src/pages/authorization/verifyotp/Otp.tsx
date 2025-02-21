import * as React from "react";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTimerContext } from "../../../context/TimerContext";
import { Toaster, useToast } from "../../../component/toast/Toast";
import { useVerifyOtpHandler } from "./apiHandeler";

const Otp: React.FC = () => {
  const navigate = useNavigate();
  const { showToast, toasts } = useToast();
  const location = useLocation();
  const { otpCode, accesstoken } = location.state;
  const { timer, isTimerExpired } = useTimerContext();
  const handleSubmit = useVerifyOtpHandler();

  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));
  const otp = otpCode?.split("") || Array(6).fill("");

  return (
    <div className="w-full py-2 rounded-lg flex justify-center flex-col">
      <div className="flex justify-center items-center w-72 h-12 mx-auto mb-4">
        {otp.map((value: string, index: number) => (
          <div className=" flex justify-center items-center">
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              readOnly
              type="text"
              maxLength={1}
              className={`otp-input border rounded-[8px] xsm:text-2xl text-3xl xsm:w-[30.6px] xsm:h-[43px] w-[48.86px] h-[51px] mx-[8px] mt-[20px] max-md:w-[45px] text-center focus:outline-none ${
                otp.length === 6 && !otp.includes("")
                  ? "text-primary border-primary bg-gray-200 "
                  : ""
              }`}
              value={value}
            />
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600">
        The code will expire in{" "}
        <span className={`font-bold ${timer < 30 ? "text-red-500" : ""}`}>
          {`${Math.floor(timer / 60)}:${(timer % 60)
            .toString()
            .padStart(2, "0")}`}
        </span>{" "}
        minutes.
      </p>

      <div className="flex justify-center mt-4">
        <button
          className={`w-3/4 h-10 rounded-lg text-white ${
            isTimerExpired ? "bg-gray-300 cursor-not-allowed" : "bg-primary"
          }`}
          onClick={() =>
            handleSubmit(accesstoken, otpCode, navigate, showToast)
          }
          disabled={isTimerExpired}
        >
          Next
        </button>
      </div>

      <p className="text-center mt-3 text-gray-600">
        Back to{" "}
        <Link
          to="/"
          className="text-primary"
          onClick={() => localStorage.clear()}
        >
          Login
        </Link>
      </p>

      <Toaster toasts={toasts} />
    </div>
  );
};

export default Otp;
