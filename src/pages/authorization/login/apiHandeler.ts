import { Dispatch } from "redux";
import { setToken, setUser } from "../../../store/auth/authSlice";
import { ApiError } from "../../../type";
import { useLoginMutation } from "../../../Slices/api/apiSlice";

export const triggerToast = (showToast: any, message: string) => {
  showToast(message, "error", 5000, "topRight", "#f7727d", "#eb091c");
};

export const handleLogin = (
  dispatch: Dispatch,
  userData: string,
  token: string
) => {
  dispatch(setUser(userData));
  dispatch(setToken(token));
};

export const useSubmitLogin = () => {
  const [submitLogin] = useLoginMutation();

  const handleSubmit = async (
    values: { password: string },
    accesstoken: string | null,
    dispatch: Dispatch,
    showToast: any
  ) => {
    try {
      const response = await submitLogin({
        body: values,
        accesstoken,
      }).unwrap();
      handleLogin(dispatch, JSON.stringify(response), "yes");
    } catch (error) {
      const errorMessage =
        (error as ApiError)?.data?.message || "Something went wrong";
      triggerToast(showToast, errorMessage);
    }
  };

  return handleSubmit;
};
