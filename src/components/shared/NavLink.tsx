type navLink = {
  name: string;
  to: string;
  onClick?: () => void;
};

const NavLink = ({ name, to, onClick }: navLink) => {
  return (
    <li
      className="tw-text-white tw-text-xl lg:tw-text-[17px] sm:tw-text-sm tw-mx-4 lg:tw-mx-2 sm:tw-mx-0 hover:tw-text-light-green tw-transition-all tw-duration-200
     md:tw-inline-block  md:tw-w-full md:tw-py-2 tw-px-2 md:tw-px-1 md:tw-rounded-sm
    "
    >
      <a
        href={`#${to}`}
        onClick={onClick}
        className=" md:tw-w-full md:tw-inline-block md:tw-py-2 md:tw-px-3 md:tw-bg-gray-900 hover:md:tw-bg-gray-800 md:tw-rounded-md tw-capitalize"
      >
        {name}
      </a>
    </li>
  );
};

export default NavLink;
