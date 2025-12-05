import * as Yup from "yup";


const userSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name at least 2 characters long")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(12, "Password must be at least 12 characters long")
        .matches(/[a-zA-Z]/, "Password must contain letters, numbers, special characters")
        .required("Password is required"),
});

export { userSchema };