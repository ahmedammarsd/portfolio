import { socialMediaDataMobile } from "../data/socialMedial";

const Footer = () => {
  return (
    <div className="tw-p-10 tw-text-white tw-border-t tw-border-gray-800">
      <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
        <div className="tw-flex tw-gap-5 tw-m-5">
          {socialMediaDataMobile.map((social) => (
            <a
              key={social.name}
              target="_blank"
              href={social.link}
              aria-label=""
              className="tw-text-2xl tw-text-white hover:tw-text-light-green tw-duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="tw-text-sm tw-text-gray-600 sm:tw-text-xs">
          Created by Ahmed Ammar - © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
