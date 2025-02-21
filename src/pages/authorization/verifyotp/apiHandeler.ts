import { NavigateFunction } from "react-router-dom";
import { useVerifyOtpMutation } from "../../../Slices/api/apiSlice";

export const triggerToast = (showToast: any, message: string) => {
  showToast(message, "error", 3000, "topRight", "#f7727d", "#eb091c");
};

export const useVerifyOtpHandler = () => {
  const [verifyOtp] = useVerifyOtpMutation();

  const handleOtpVerification = async (
    token: string,
    otp: string,
    navigate: NavigateFunction,
    showToast: any
  ) => {
    try {
      const response = await verifyOtp({ otp, token }).unwrap();
      navigate("/login", {
        state: { accesstoken: response.accesstoken },
      });
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong";
      triggerToast(showToast, errorMessage);
    }
  };

  return handleOtpVerification;
};
