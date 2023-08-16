import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { FormLogin } from "../../components/index.js";

export const LoginPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <FormLogin />

      <br />
      <br />

      <pre data-testid="code-block">{JSON.stringify(user, null, 4)}</pre>
    </>
  );
};
