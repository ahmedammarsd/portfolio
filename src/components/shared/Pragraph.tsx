type pragraphTextProp = {
  children: React.ReactNode;
  marginTop?: boolean;
  center?: boolean;
  isSmaller?: boolean;
};
const Pragraph = ({
  children,
  marginTop = true,
  center = false,
  isSmaller = false,
}: pragraphTextProp) => {
  return (
    <p
      className={`tw-text-middle-grey sm:tw-leading-6 
        ${marginTop ? "tw-mt-6" : "tw-mt-0"}
      ${center ? "tw-text-center" : ""}
      ${
        isSmaller
          ? "tw-text-xl md:tw-text-[12px] sm:tw-text-sm"
          : "tw-text-2xl md:tw-text-[19px] sm:tw-text-[17px]"
      }
      `}
    >
      {children}
    </p>
  );
};

export default Pragraph;
