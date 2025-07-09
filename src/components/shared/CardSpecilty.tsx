import { special } from "../../types/types";
import Pragraph from "./Pragraph";

const CardSpecilty = ({ title, description, icon, image }: special) => {
  return (
    <div
      className={`tw-flex tw-flex-col tw-items-center tw-gap-3 tw-w-[30%] lg:tw-w-[50%] md:tw-w-full tw-my-3 tw-mx-3 tw-relative
      tw-p-6 md:tw-p-4 
     tw-rounded-lg tw-border-[0.1px] tw-border-light-green hover:tw-bg-[#1122402e]
     tw-h-[350px] sm:tw-h-[270px] tw-shadow-sm tw-shadow-gray-800
      tw-overflow-hidden
     `}
    >
      <img
        src={image}
        className="tw-absolute tw-top-0 tw-w-full tw-h-full tw-object-cover -tw-z-1 tw-opacity-10"
        alt={title}
        loading="lazy"
      />
      <div className="tw-text-light-green tw-text-6xl sm:tw-text-5xl tw-mb-3 sm:tw-mb-2 tw-rounded-md">
        {icon}
      </div>
      <h2 className="tw-text-white tw-text-2xl sm:tw-text-lg tw-whitespace-nowrap">
        {title}
      </h2>
      <Pragraph marginTop={true} center isSmaller={true}>
        {description}
      </Pragraph>
    </div>
  );
};

export default CardSpecilty;
