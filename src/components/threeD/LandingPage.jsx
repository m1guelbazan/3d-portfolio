import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

import React from "react";

const LandingPage = () => {
    return <div className="relative">
        <Canvas className="bg-[#101010]" style={{height: "100vh"}}> 
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <Sphere></Sphere>
        </Canvas>
    </div>;
};

export default LandingPage;