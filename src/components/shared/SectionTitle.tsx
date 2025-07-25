import { memo } from "react";

type sectionTitleProp = {
  title: string;
};

const SectionTitle = ({ title }: sectionTitleProp) => {
  return (
    <div className="tw-flex tw-items-center tw-mb-16 md:tw-mb-8 tw-gap-4">
      <h2 className="tw-text-white tw-font-bold tw-text-3xl md:tw-text-2xl tw-capitalize tw-whitespace-nowrap">
        {title}
      </h2>
      <div className="tw-h-[0.1px] tw-w-full sm:tw-w-full tw-bg-white" />
    </div>
  );
};

export default memo(SectionTitle);
