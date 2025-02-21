import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="w-[100%] h-[100vh] relative justify-center items-center flex dark:bg-brandColor bg-[#f3f2f2] ">
      <div className=" w-[80%]  max-w-[1024px]  h-[600px] max-sm:h-[100svh] max-sm:w-[100%] max-sm:p-0  flex  flex-wrap justify-around   p-[30px] max-md:p-[3%] ">
        <div className="  w-[100%] flex justify-between bg ">
          <div className="w-[50%] h-full pt-[0.3%] max-sm:rounded-none max-sm:hidden rounded-tl-[20px] rounded-bl-[20px] flex flex-col justify-center items-center text-white text-[1.5rem] font-[600]  bg-[var(--color-primary)]">
            <h1 className=" text-[1.2rem]">Welcome to</h1>
            <p>Dashen Super App Dashboard</p>
          </div>

          <div className="  w-[50%] max-sm:w-full max-sm:h-full flex justify-center background  max-sm:rounded-none bg-white h-full  rounded-tr-[20px] rounded-br-[20px]">
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
