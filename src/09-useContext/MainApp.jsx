import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage } from "./pages/index.js";
import { Navbar } from "./components/index.js";
import { UserProvider } from "./context/UserProvider.jsx";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"login"} element={<LoginPage />}></Route>

        <Route path={"*"} element={<Navigate to={"about"} />} />
      </Routes>
    </UserProvider>
  );
};
