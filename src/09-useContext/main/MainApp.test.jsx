import { render, screen } from "@testing-library/react";
import { MainApp } from "./MainApp.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Test MainApp", () => {
  it("should match with snapshoot", () => {
    const { container } = render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render the HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  it("should render the LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>,
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });

  it("should render the AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>,
    );

    expect(screen.getByText("AboutPage")).toBeTruthy();
  });
});
