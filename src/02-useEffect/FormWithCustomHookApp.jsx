import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHookApp = () => {
  const { formState, onInputChanged, onFormReseted } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>FormWithCustomHook</h1>

      <hr />

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        className="form-control"
        value={username}
        onChange={onInputChanged}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="form-control mt-2"
        value={email}
        onChange={onInputChanged}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="form-control mt-2"
        value={password}
        onChange={onInputChanged}
      />

      <br />

      <button className="btn btn-primary" onClick={onFormReseted}>
        Reset
      </button>
    </>
  );
};
