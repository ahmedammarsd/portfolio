type sectionProps = {
  id: string;
  children: React.ReactNode;
};
const Section = ({ id, children }: sectionProps) => {
  return (
    <section
      id={id}
      className="tw-py-10 tw-px-28 md:tw-px-6 sm:tw-px-3.5 sm:tw-py-6 tw-mt-6"
      style={{ contentVisibility: "auto" }}
    >
      {children}
    </section>
  );
};

export default Section;
