import { useForm } from "../hooks/index.js";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export const FormLogin = () => {
  const { setUser } = useContext(UserContext);
  const { formRef, formState, onSubmit } = useForm({
    username: "",
    email: "",
  });

  onSubmit(() => {
    setUser(formState);
  });

  return (
    <form ref={formRef}>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="form-control"
        defaultValue={formState.username}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="form-control"
        defaultValue={formState.email}
      />
      <br />
      <br />
      <button type="submit" className="btn btn-primary">
        &nbsp;&nbsp;Login&nbsp;&nbsp;
      </button>
    </form>
  );
};
