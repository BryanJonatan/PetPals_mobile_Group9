
import React from "react";
import InputField from "../InputField";
import { useUsers } from "../../../context/users/UsersContext";

const LoginInputField = () => {
  const { userLogin, setUserLogin } = useUsers();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUserLogin(name, value);
  };

  return (
    <>
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        value={userLogin.email}
        onChange={handleInputChange}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        value={userLogin.password}
        onChange={handleInputChange}
      />
    </>
  );
};

export default LoginInputField;
