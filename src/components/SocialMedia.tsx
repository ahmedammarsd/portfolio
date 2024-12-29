import { socialMediaData } from "../data/socialMedial";

const SocialMedia = () => {
  // operator system
  //const os = navigator.userAgent;

  return (
    <div className="tw-absolute tw-bottom-20 tw-left-20 xs:tw-left-14 tw-flex tw-items-center tw-flex-col md:tw-flex-row-reverse  ">
      {socialMediaData.map((social) => (
        <a
          target="_blank"
          key={social.name}
          href={social.link}
          className="tw-text-white tw-p-2 tw-m-1 tw-text-4xl md:tw-text-2xl tw-inline-block hover:tw-text-light-green tw-duration-200"
        >
          {social.icon}
        </a>
      ))}
      <div className="tw-w-[1px] md:tw-w-[60px] tw-h-[60px] md:tw-h-[1px] tw-bg-white tw-mt-4 md:tw-mt-0" />
    </div>
  );
};

export default SocialMedia;
