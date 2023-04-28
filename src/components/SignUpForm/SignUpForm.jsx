import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

let validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 character or bigger"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {},
    validationSchema,
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
