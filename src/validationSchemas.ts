import * as Yup from "yup";

const userNameValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .matches(/^[a-zA-Z][a-zA-Z0-9_]{0,19}$/, "Invalid username format")
    .required("Username is required"),
});
const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(18, "Password cannot be more than 18 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,18}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
    )
    .required("Password is required"),
});

export { userNameValidationSchema, passwordValidationSchema };
