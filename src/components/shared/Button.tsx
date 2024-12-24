import { propsButton } from "../../types/types";

const Button = ({ type, name, isTransparent }: propsButton) => {
  return (
    <button
      type={type}
      className={`${
        isTransparent
          ? "tw-bg-transparent tw-text-light-green hover:tw-bg-light-two-green hover:tw-text-black"
          : "tw-bg-light-green tw-text-black hover:tw-bg-transparent hover:tw-text-light-green"
      }  tw-px-5 lg:tw-px-3 tw-py-2.5 lg:tw-py-2 tw-rounded-md tw-text-2xl lg:tw-text-[18px] tw-border tw-border-light-green tw-transition-colors tw-duration-500`}
    >
      {name}
    </button>
  );
};

export default Button;
