import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "./CanvaLoader";

import MobileModel from "./MobileModel";
import LaptopModel from "./LaptopModel";
import Button from "../shared/Button";

const CollectionModels = ({
  image,
  imageMobile,
  projectType,
}: {
  image: string;
  imageMobile: string;
  projectType: "web" | "mobile" | "desktop";
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (projectType === "mobile") setIsMobile(true);
  }, []);

  return (
    <>
      <div className="tw-flex tw-gap-2 tw-w-full tw-justify-center tw-my-2">
        <Button
          isTransparent={true}
          type="button"
          name="Mobile"
          onClick={() => {
            // To Avoid Rendering The Same Component when user make double click
            if (!isMobile) setIsMobile(true);
          }}
          className={`${
            isMobile
              ? ""
              : "tw-text-white tw-border-gray-200 hover:tw-border-transparent"
          }`}
        />
        <Button
          isTransparent={true}
          type="button"
          name="Laptop"
          disabled={projectType === "mobile"}
          className={`${
            !isMobile
              ? ""
              : "tw-text-white tw-border-gray-200 hover:tw-border-transparent"
          } 
          ${projectType === "mobile" ? "tw-opacity-40" : ""}
          `}
          onClick={() => {
            if (projectType === "mobile") return;
            if (isMobile) setIsMobile(false);
          }}
        />
      </div>
      <div className="tw-w-full tw-h-full tw-aspect-square tw-overflow-hidden">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            {/* 1- OrbitControls */}
            <Center>
              <OrbitControls enableRotate enablePan enableZoom={false} />

              {/* Camera */}
              <PerspectiveCamera
                makeDefault
                // position={[0, 0, 5]}
                // args={[75, window.innerWidth / window.innerHeight, 0.1, 100]}
                position={[0, 0, 6]}
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
              />
              {isMobile || projectType === "mobile" ? (
                <MobileModel
                  image={imageMobile}
                  position={[0, -4, 0]}
                  scale={0.075}
                  rotation={[0, 0, 0]}
                />
              ) : (
                <LaptopModel
                  image={image}
                  position={[0, -11, 0]}
                  scale={[3, 3, 3]}
                  rotation={[0, 0, 0]}
                />
              )}

              {/* 2- Lights
        <directionalLight position={[1, 1, 1]} intensity={10} /> */}
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              <ambientLight intensity={1} />
            </Center>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default CollectionModels;
