const RadioBtn = ({ label, value, formik }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        name="gender"
        type="radio"
        checked={formik.values.gender === "0"}
        onChange={formik.handleChange}
      />
    </div>
  );
};

export default RadioBtn;
