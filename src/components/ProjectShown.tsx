import TextContainer from "./shared/TextContainer";

const ProjectShown = () => {
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-w-full md:tw-flex-col tw-gap-2 tw-mt-7">
      {/* 3D Model */}
      <div className="tw-w-[50%] tw-shadow-md tw-rounded-md tw-h-[400px]">
        d
      </div>
      {/* 3D Model */}
      {/* Project Details */}
      <div className="tw-w-[50%] tw-shadow-md tw-rounded-md tw-h-[400px] tw-flex tw-flex-col tw-p-5 tw-gap-5">
        {/* Title Project */}
        <h3 className="tw-text-white tw-text-xl md:tw-text-lg tw-font-bold">
          Project Title
        </h3>
        {/* Title Project */}
        {/* Description */}
        <p className="tw-text-middle-grey tw-text-[16px] sm:tw-text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptates at, assumenda ullam vero laborum maxime aliquam consequatur
          similique illo iure repellat architecto, eum non, odio officiis optio
          soluta exercitationem!
        </p>
        {/* Description */}
        {/* Stack */}
        <div>
          <h4 className="tw-text-white tw-text-lg md:tw-text-[16px] tw-font-bold tw-mb-3">
            Technology Used
          </h4>
          {<TextContainer text="Flutter" />}
          <TextContainer text="Flutter" />
          <TextContainer text="Flutter" />
          <TextContainer text="Flutter" />
        </div>
        {/* End Stack */}
        {/* Features */}
        {/* End Features */}
        {/* Links -- Here it will be with icons and every link for example like github has a link it will be like active
            or not active it will be visible but not clickable and little of opacity */}
        {/* Links */}
      </div>
      {/* Project Details */}
    </div>
  );
};

export default ProjectShown;
