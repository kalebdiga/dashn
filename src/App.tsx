import "./App.css";
import Login from "./pages/authorization/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./pages/authorization/Auth";
import Otp from "./pages/authorization/verifyotp/Otp";
import GetOtp from "./pages/authorization/getotp/GetOtp";

function App() {
  const token = useSelector((state: any) => state.auth.token);

  return (
    <>
      <div className=" relative">
        <Routes>
          <Route
            path="/Dashboard"
            element={token === "yes" ? <Dashboard /> : <Navigate to={"/"} />}
          />

          <Route
            path="/"
            element={token !== "yes" ? <Auth /> : <Navigate to="/Dashboard" />}
          >
            <Route element={<Login />} index />
            <Route path="login" element={<Login />} />

            <Route path="otp" element={<GetOtp />}>
              <Route path="verify-otp" element={<Otp />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
