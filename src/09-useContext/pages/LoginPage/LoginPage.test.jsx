import { render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage.jsx";
import { UserContext } from "../../context/UserContext.jsx";

describe("Test LoginPage", () => {
  const user = {
    username: "John Due",
    email: "john@email.com",
  };

  it("should match with snapshot", () => {
    const { container } = render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const preElement = screen.getByTestId("code-block");
    expect(preElement.innerHTML).toEqual("null");
  });

  it("should render the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const preElement = screen.getByTestId("code-block");
    expect(preElement.innerHTML).toContain(user.username);
    expect(preElement.innerHTML).toContain(user.email);
  });
});
