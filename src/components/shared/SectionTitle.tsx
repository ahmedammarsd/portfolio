type sectionTitleProp = {
  title: string;
};

const SectionTitle = ({ title }: sectionTitleProp) => {
  return (
    <div className="tw-flex tw-items-center tw-mb-16 md:tw-mb-8 tw-gap-4">
      <h2 className="tw-text-white tw-font-bold tw-text-5xl md:tw-text-3xl tw-capitalize">
        {title}
      </h2>
      <div className="tw-h-[1px] tw-w-[70%] sm:tw-w-full tw-bg-white" />
    </div>
  );
};

export default SectionTitle;
