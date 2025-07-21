import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import MobileScreen from "./MobileModle";
import CanvasLoader from "./CanvaLoader";
import LaptopModel from "./LaptopModel";
import MacBocPCModel from "./MacBocPCModel";
import MacBocLabtop from "./MacBoc";
import AsusTuffLaptopModel from "./AsusTuffLaptopModel";

const CollectionModels = () => {
  return (
    <Canvas className="tw-w-full tw-h-full">
      <Suspense fullback={<CanvasLoader />}>
        {/* 1- OrbitControls */}
        <Center>
          <OrbitControls enableRotate enablePan enableZoom={true} />

          {/* Camera */}
          <PerspectiveCamera
            makeDefault
            position={[5, 5, 5]}
            args={[75, window.innerWidth / window.innerHeight, 0.1, 100]}
          />
          {/* <MacBocLabtop /> */}
          {/* <LaptopModel scale={20} /> */}
          {/* <MacBocPCModel scale={2} /> */}
          <AsusTuffLaptopModel />

          {/* 2- Lights
        <directionalLight position={[1, 1, 1]} intensity={10} /> */}
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <ambientLight intensity={1} />
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default CollectionModels;
