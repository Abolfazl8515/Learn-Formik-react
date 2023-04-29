import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

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
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {},
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" {...formik.getFieldProps("name")} />
          {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" {...formik.getFieldProps("email")} />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>password</label>
          <input
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label>password confirmation</label>
          <input
            name="passwordConfirm"
            type="password"
            {...formik.getFieldProps("passwordConfirm")}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <p>{formik.errors.passwordConfirm}</p>
          )}
        </div>
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
