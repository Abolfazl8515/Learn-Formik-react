import { useState } from "react";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>password</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
