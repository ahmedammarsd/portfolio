import Marquee from "react-fast-marquee";

const ReactMarquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false}>
      {children}
    </Marquee>
  );
};

export default ReactMarquee;
