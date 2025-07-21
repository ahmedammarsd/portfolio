const TextContainer = ({
  text,
  icon,
  className,
}: {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`tw-bg-transparent-black-5 tw-backdrop-blur-md tw-text-white tw-py-1 tw-px-2 tw-rounded-md tw-m-1 tw-capitalize tw-text-sm ${className}`}
    >
      {text ?? text}
      {icon ?? icon}
    </span>
  );
};

export default TextContainer;
