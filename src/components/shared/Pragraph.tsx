type pragraphTextProp = {
  children: React.ReactNode;
  marginTop?: boolean;
};
const Pragraph = ({ children, marginTop = true }: pragraphTextProp) => {
  return (
    <p
      className={`tw-text-middle-grey tw-text-2xl md:tw-text-[19px] sm:tw-text-[17px] sm:tw-leading-6 ${
        marginTop ? "tw-mt-6" : "tw-mt-0"
      }`}
    >
      {children}
    </p>
  );
};

export default Pragraph;
