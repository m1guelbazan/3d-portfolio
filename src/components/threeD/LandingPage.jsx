import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

import React, { useRef } from "react";
import { pointsInner } from "../utils";

const LandingPage = () => {
    return (
        <div className="relative">
            <Canvas className="bg-[#101010]" style={{height: "100vh"}}> 
                <OrbitControls></OrbitControls>
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle/>
            </Canvas>
        </div>
    );
};

const PointCircle = () => {
    const ref = useRef();

    useFrame(({clock}) => {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    });
    return (
        <group ref={ref}>
            {pointsInner.map(point => <Point key={point.idx} position={point.position} color={point.color} />)}
        </group>
    );
};

const Point = ({ position, color}) => {
    return (
        <Sphere position={position} args={[0.1, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};

export default LandingPage;