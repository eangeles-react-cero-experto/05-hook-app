import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../context/UserContext.jsx'
import { FormLogin } from './FormLogin.jsx'
// import { useForm } from "../../hooks/index.js";

// jest.mock("../../hooks/index.js");

describe("Test FormLogin", () => {
  const user = {
    username: "John Due",
    email: "john@email.com",
  };

  // useForm.mockReturnValue({
  //   formRef: null,
  //   formState: user,
  //   onSubmit: jest.fn(),
  // });

  beforeEach(() => jest.clearAllMocks());

  it("should match with snapshot", () => {
    const { container } = render(
      <UserContext.Provider value={{ user }}>
        <FormLogin />
      </UserContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should call setUser when button is pressed", () => {
    const mockSetUser = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: mockSetUser }}>
        <FormLogin></FormLogin>
      </UserContext.Provider>,
    );

    const loginButtonElement = screen.getByText("Login");
    fireEvent.click(loginButtonElement);

    expect(mockSetUser).toHaveBeenCalledTimes(1);
    // expect(mockSetUser).toHaveBeenCalledWith(user);
  });
});
