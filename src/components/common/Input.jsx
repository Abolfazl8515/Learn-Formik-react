const Input = ({ label, name, type = "text", formik }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} {...formik.getFieldProps(name)} />
      {formik.errors[name] && formik.touched[name] && (
        <p>{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
