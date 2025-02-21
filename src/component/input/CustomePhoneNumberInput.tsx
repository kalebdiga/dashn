import React from "react";
import Flag from "./../../assets/Flag_of_Ethiopia.svg";
import { CustomPhoneNumberInputProps } from "../../type";

export const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputProps> = ({
  type = "phone",
  name,
  value,
  id,
  handleInput,
  countryCode = "+251",
  flag = (
    <img src={Flag} width={35} height={85} alt="Flag" className="h-[20px]" />
  ),
  placeholder = "XXXXXXXXX",
  maxLength = 9,
  error,

  label,
  width = "100%",
  height = "40px",
}) => {
  return (
    <div className="w-full max-md:w-full relative">
      <label
        htmlFor="phone_number"
        className="block text-sm text-black dark:text-[#d7d7d7]"
      >
        {label}
      </label>

      <div
        className="flex items-center bg-white border border-gray-300 rounded-lg p-2 relative text-[0.875rem] h-[40px] mt-[1%] "
        style={{
          border: error ? "1px solid red" : "1px solid #E5E5E5",
          width: width,
        }}
      >
        {countryCode && (
          <span className="pl-[9%] w-[22%] max-md:w-[25%] ">
            {countryCode}-
          </span>
        )}

        {flag && (
          <span className="absolute inset-y-0 left-[1%] flex items-center">
            {flag}
          </span>
        )}

        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={handleInput}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full outline-none bg-[white]  pl-[1px]"
          style={{ height: height }}
        />
      </div>
    </div>
  );
};
