import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleFormApp = () => {
  const [formState, setFormState] = useState({
    username: "eangeles",
    email: "edward@gmail.com",
  });
  const { username, email } = formState;

  const onInputChanged = (event) => {
    const {
      target: { name, value },
    } = event;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("component is mounted");
  }, []);

  useEffect(() => {
    // console.log("formState changed!");
  }, [formState]);

  return (
    <>
      <h1>Simple Form</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChanged}
      />
      <input
        type="text"
        className="form-control mt-3"
        placeholder="username@email.com"
        name="email"
        value={email}
        onChange={onInputChanged}
      />

      <br />
      {username === "eangeles" && <Message />}
    </>
  );
};
