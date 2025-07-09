import { RiMenu3Fill } from "react-icons/ri";
import { navLinks } from "../data/navLinks";
import useScreenSize from "../hooks/useScreenSizeHook";
import Button from "./shared/Button";
import NavLink from "./shared/NavLink";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import useScrollYSizeHook from "../hooks/useScrollYSizeHook";

// =============== Desktop Navbar ===========
const NavDesktop = () => {
  return (
    <>
      <ul className="tw-flex tw-items-center">
        {/* Links  */}
        {navLinks.map((link) => (
          <NavLink key={link.name} name={link.name} to={link.to} />
        ))}
      </ul>
      {/* Button Component  */}
      <Button type="button" name="Resume" isTransparent={true} />
    </>
  );
};

// =============== Mobile Navbar ===========
type propNavMobile = {
  showNav: boolean;
  onClick: () => void;
};
const NavMobile = ({ showNav, onClick }: propNavMobile) => {
  return (
    <div
      className={`tw-w-full tw-h-[100dvh] tw-bg-transparent-black tw-fixed tw-top-[70px] tw-right-0 tw-duration-500 tw-z-10
      ${showNav ? "tw-translate-x-[0]" : "tw-translate-x-[100%]"}
      `}
    >
      <div className="tw-flex tw-flex-col tw-justify-between tw-bg-dark-one tw-w-[80%] tw-float-end tw-h-[calc(100%-80px)] tw-px-4 tw-py-5 tw-border-l-2 tw-border-gray-800">
        {/* Links  */}
        <ul className="tw-flex tw-items-start tw-flex-col tw-gap-[0.5px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              to={link.to}
              onClick={onClick}
            />
          ))}
        </ul>
        {/* Button Component  */}
        <Button type="button" name="Resume" isTransparent={true} />
      </div>
    </div>
  );
};
const Navbar = () => {
  // Get Screen Size
  const screenSize = useScreenSize();
  // Get ScrollY
  const scrollY = useScrollYSizeHook();
  // Control On Links in mobile navbar to show and hidden
  const [showNav, setShowNav] = useState(false);
  // Function That Control on show and hidden navbar in mobile screen
  const handleShowNav = () => setShowNav((prev) => !prev);

  return (
    // == Main Container ==
    <nav
      id="#"
      className={`tw-flex tw-fixed tw-bg-dark-one tw-z-9 tw-w-full tw-items-center tw-justify-around md:tw-justify-between md:tw-px-6 sm:tw-px-4 tw-h-[90px] md:tw-h-[70px]
        tw-border-b-[0.5px] tw-shadow-sm
        ${
          scrollY != 0
            ? "tw-shadow-gray-900 tw-border-gray-800 tw-backdrop-blur-md tw-bg-transparent-black"
            : "tw-border-transparent tw-shadow-transparent "
        }
        `}
    >
      {/* First div For Logo Or Name */}
      <div>
        <a
          href="/#"
          className="tw-text-light-green tw-text-5xl lg:tw-text-4xl md:tw-text-3xl tw-font-bold tw-cursor-pointer sm:tw-text-xl"
        >
          AHMED
        </a>
      </div>
      {/* Second Div For Links in desktop and mobile style */}
      <div className="tw-flex tw-items-center tw-gap-4 lg:tw-gap-2">
        {/* Desktop Nav*/}
        {screenSize.width > 767 ? (
          <NavDesktop />
        ) : (
          <>
            {/* Mobile Nav*/}
            <div
              className=" tw-text-2xl tw-text-light-green"
              onClick={handleShowNav}
            >
              {showNav ? <IoMdClose /> : <RiMenu3Fill />}
            </div>
            <NavMobile showNav={showNav} onClick={handleShowNav} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
