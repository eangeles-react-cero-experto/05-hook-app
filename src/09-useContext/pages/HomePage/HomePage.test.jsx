import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage.jsx";
import { UserContext } from "../../context/UserContext.jsx";

describe("Test HomePage", () => {
  const user = {
    username: "John Due",
    email: "john@email.com",
  };

  it("should match with snapshot", () => {
    const { container } = render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preElement = screen.getByTestId("code-block");
    expect(preElement.innerHTML).toEqual("null");
  });

  it("should render the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preElement = screen.getByTestId("code-block");
    expect(screen.findByText(user.username)).toBeTruthy();
    expect(screen.findByText(user.email)).toBeTruthy();
  });
});
