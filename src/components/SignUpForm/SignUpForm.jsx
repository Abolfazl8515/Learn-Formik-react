import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "../common/Input";
import RadioBtn from "../common/radioBtn";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  gender: "",
};

const radioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

let validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 character or bigger"),
  passwordConfirm: Yup.string()
    .required("password confirm is required")
    .oneOf([Yup.ref("password"), null], "password does not match"),
  gender: Yup.string().required("Gender is required"),
});

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(null);
  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit: (values) => {},
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  console.log(formik.values);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/1")
      .then((res) => setFormValues(res.data));
  }, []);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} />
        <Input label="Password" name="password" formik={formik} />
        <Input
          label="Password confirmation"
          name="passwordConfirm"
          formik={formik}
        />
        {radioOptions.map((r) => (
          <RadioBtn
            label={r.label}
            value={r.value}
            formik={formik}
            key={r.value}
          />
        ))}
        <div>
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
