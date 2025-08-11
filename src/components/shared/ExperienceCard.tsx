import { memo } from "react";
import { experienceType } from "../../types/types";
import { IoLocationSharp } from "react-icons/io5";

type experienceProp = {
  data: experienceType;
};
const ExperienceCard = ({ data }: experienceProp) => {
  return (
    <div className="tw-py-7 tw-px-7 md:tw-px-3 tw-mb-5 tw-border-b tw-border-gray-800 tw-duration-300 tw-rounded-sm">
      {/* Position And Company */}
      <div>
        <h2 className="sub-title">
          {data.positionTitel}
          <span className="tw-text-light-green">
            {" "}
            {data?.nameOfCampany == "Freelance"
              ? ""
              : `@ ${data.nameOfCampany}`}
          </span>
        </h2>
      </div>
      {/* Position And Company */}
      <div className="tw-flex tw-justify-between tw-flex-wrap">
        {/* Date Start And End  */}
        <div className="tw-text-white tw-mt-2 tw-text-xl md:tw-text-[18px] sm:tw-text-[14px] ">
          <span>{data?.dateOfStart}</span> -{" "}
          <span>{data?.isPresent ? "Present" : data?.dateOfEnd}</span>
        </div>
        {/* Date Start And End  */}
        {/* Location  */}
        <div className="tw-flex tw-gap-1 tw-items-center tw-text-white tw-mt-2 tw-text-xl md:tw-text-[18px] sm:tw-text-[14px]">
          <span className="tw-text-light-green">
            <IoLocationSharp />
          </span>{" "}
          <span>{data.location}</span>
        </div>
        {/* Location  */}
      </div>

      {/* Details About Work  */}
      <div className="tw-mt-7 tw-px-5 sm:tw-mt-4">
        <ul className="tw-text-middle-grey tw-list-item tw-list-disc tw-text-xl md:tw-text-[16px] sm:tw-text-sm">
          {data?.moreDetails?.map((detail, index) => (
            <li key={index} className="tw-mt-2">
              {detail}
            </li>
          ))}
        </ul>
      </div>
      {/* Details About Work  */}
    </div>
  );
};

export default memo(ExperienceCard);
// I added memo to stop re-rendering the component when change in main component that in it.
//   and have state that change when toggle it for show menu of experinces
