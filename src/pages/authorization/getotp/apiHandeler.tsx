import { NavigateFunction } from "react-router-dom";
import { ApiError } from "../../../type";
import { useGetOtpMutation } from "../../../Slices/api/apiSlice";

export const triggerToast = (showToast: any, message: string) => {
  showToast(message, "error", 3000, "topRight", "#f7727d", "#eb091c");
};

export const useRequestOtp = () => {
  const [createItem] = useGetOtpMutation();

  const handleOtpRequest = async (
    values: { username: string },
    navigate: NavigateFunction,
    setTimer: (time: number) => void,
    setIsTimerExpired: (state: boolean) => void,
    showToast: any
  ) => {
    try {
      const response = await createItem(values).unwrap();
      navigate("/otp/verify-otp", {
        state: {
          otpCode: response.otpcode,
          accesstoken: response.accesstoken,
        },
      });
      setTimer(120);
      setIsTimerExpired(false);
    } catch (error) {
      const errorMessage =
        (error as ApiError)?.data?.message || "Something went wrong";
      triggerToast(showToast, errorMessage);
    }
  };

  return handleOtpRequest;
};
