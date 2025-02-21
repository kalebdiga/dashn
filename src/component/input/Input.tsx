import { InputProps } from "../../type";

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="font-sans font-[400] text-[0.88rem] my-[1%] ">
      <h1
        className={
          " h-[26px] text-textColor font-[500]   text-[0.877rem]  dark:text-primary max-md:text-[0.875rem] font-sans "
        }
      >
        {props.header}
      </h1>

      <div className=" relative ">
        <span
          className={` absolute inset-y-0 left-0 pl-3 pt-[12px] flex items-center text-textColor `}
        >
          {props.icon}
        </span>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.handleInput}
          style={{
            height: props.height,
            paddingLeft: props.pl,
            border: props.borders,
          }}
          className={`w-[${props.width}] max-lg:w-[100%]  h-[40px] border-[1px] rounded-md text-black font-sans font-[400] text-[0.88rem]  outline-[#E5E5E5] max-md:text-[0.875rem]  border-[#E5E5E5]  pl-[12px]  max-sm:w-[100%] `}
          placeholder={props.placeHolder}
        />

        <>{props.iconTwo}</>
      </div>
    </div>
  );
};
