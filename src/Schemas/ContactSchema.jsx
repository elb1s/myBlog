import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().max(15).min(2).required("Name is required!"),
  email: yup.string().email("Please enter valid email").required("Required"),
  message: yup.string().min(6).max(400).required("Required"),
});
