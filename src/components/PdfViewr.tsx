import { useState } from "react";
import Button from "./shared/Button";
import { IoMdClose } from "react-icons/io";

const PdfViewr = () => {
  const [showPdf, setShowPdf] = useState(false);
  return (
    <>
      <Button
        type="button"
        name="My Resume"
        isTransparent={true}
        onClick={() => setShowPdf(true)}
      />
      {showPdf && (
        <div
          className="tw-w-[100%] tw-h-screen tw-absolute tw-top-0 tw-left-0 tw-z-50"
          style={{ contentVisibility: "auto" }}
        >
          <button
            className="tw-absolute tw-top-5 tw-right-5 tw-bg-white hover:tw-text-red-400 tw-duration-200 tw-rounded-full tw-text-xl"
            onClick={() => setShowPdf(false)}
          >
            <IoMdClose />
          </button>
          <div className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-w-[100%]">
            <iframe
              src="/Front_End__Ahmed_Ammar.pdf"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default PdfViewr;
