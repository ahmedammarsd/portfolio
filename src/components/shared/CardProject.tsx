import { projectType } from "../../types/types";
import TextContainer from "./TextContainer";

type cardProjectProps = {
  data: projectType;
};
const CardProject = ({
  data: { image, title, description, stack, status, category },
}: cardProjectProps) => {
  return (
    <div className="tw-flex tw-items-start tw-mx-5 tw-justify-end tw-w-[400px] md:tw-w-[350px] tw-h-[250px] md:tw-h-[200px] tw-flex-col tw-group tw-gap-3 tw-rounded-md tw-overflow-hidden tw-relative">
      <div className="tw-absolute tw-right-2 tw-top-2 tw-flex tw-gap-1 tw-items-center tw-text-gray-400 tw-text-xs tw-p-2 tw-px-5 tw-bg-transparent-black-5 tw-rounded-lg">
        <span
          className={`${
            status == "online"
              ? "tw-bg-green-600 tw-animate-pulse"
              : "tw-bg-red-600"
          } tw-w-2 tw-h-2 tw-rounded-full`}
        />
        {status}
      </div>
      <span className="tw-absolute tw-top-2 tw-left-2 tw-bg-transparent-black-5 tw-backdrop-blur-md tw-text-white tw-py-1 tw-px-2 tw-rounded-md tw-m-1 tw-capitalize tw-text-sm">
        {category}
      </span>
      <div className="tw-bg-transparent-black-5 tw-absolute tw-w-full tw-h-full tw-backdrop-blur-[2px] tw-z-[-1] group-hover:tw-backdrop-blur-[0px] tw-duration-500" />
      <img
        src={image}
        loading="lazy"
        alt={title}
        className="tw-w-full tw-h-full tw-object-cover tw-absolute tw-top-0 tw-left-0 tw-z-[-2]"
      />

      <div className="tw-p-3 tw-flex tw-flex-col tw-gap-2">
        <h3 className="tw-text-white tw-text-xl md:tw-text-lg ">{title}</h3>
        <p className="tw-text-gray-200 sm:tw-text-sm">
          {description.slice(0, 100)}
        </p>
        <div className="tw-flex tw-flex-wrap tw-gap-2">
          {
            // stack.length > 3
            stack.slice(0, 3).map((item) => {
              return <TextContainer key={item} text={item} />;
            })
          }
          {stack.length > 3 ? (
            <TextContainer text={`+${stack.length - 3}`} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
