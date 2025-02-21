import { logout } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className=" w-full h-[100vh] flex items-center justify-center ">
      <button
        type="submit"
        className="w-[10%] bg-[var(--color-primary)] h-[43.53px] max-sm:h-[38px] max-md:w-[70%] hover:bg-gradient-to-r hover:from-[#006869] hover:to-cyan-500 mx-auto rounded-lg gap-8 max-sm:w-[90%] singup"
        style={{
          color: "white",
        }}
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
}

export default Dashboard;
