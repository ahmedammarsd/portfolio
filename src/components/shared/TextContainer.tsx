const TextContainer = ({ text }: { text: string }) => {
  return (
    <span className="tw-bg-transparent-black-5 tw-backdrop-blur-md tw-text-white tw-py-1 tw-px-2 tw-rounded-md tw-m-1 tw-capitalize tw-text-sm">
      {text}
    </span>
  );
};

export default TextContainer;
