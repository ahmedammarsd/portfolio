import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";
import yqen from "../assets/open_source_collaborate/yqen.png";

const OpenSourceCollaborate = () => {
  return (
    <Section id="Open Source Collaborate">
      <SectionTitle title="Open Source Collaborate" />
      <div className="tw-flex tw-gap-3">
        <div
          className="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-cursor-pointer tw-group"
          onClick={() =>
            window.open("https://github.com/yaqiin/boycott", "_blank")
          }
        >
          <img
            src={yqen}
            alt="yqen project"
            loading="lazy"
            width={70}
            height={70}
          />
          <h3 className="tw-text-white group-hover:tw-text-light-green">
            Yqen
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default OpenSourceCollaborate;
