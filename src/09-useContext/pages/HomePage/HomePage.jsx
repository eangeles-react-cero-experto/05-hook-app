import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>
        HomePage <small>{user?.username}</small>
      </h1>
      <hr />

      <pre data-testid="code-block">{JSON.stringify(user, null, 4)}</pre>
    </>
  );
};
