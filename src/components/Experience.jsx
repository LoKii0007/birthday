import React, { useEffect } from "react";
import { GoldModel } from "../models/Gold-ballon";
import { TransModel } from "../models/Trans-heart";
import { BirtdayModel } from "../models/Model";
import { PinkModel } from "../models/Pink-ballon";
import { useGlobal } from "../hooks/GlobalContext";
import { Text3D } from "@react-three/drei"

const Experience = () => {
  const { screen, setText, text } = useGlobal();

  useEffect(() => {}, [screen, text]);

  return (
    <>
      {screen?.name === "scene-1" && (
        <group position-z={-5} scale={3} position-y={-2}>

          <Text3D font={`/fonts/${text.font}.json`} scale={0.1} position={[-0.25,1,0]} >
            {text.value}
            {/* <meshNormalMaterial /> */}
            <meshStandardMaterial color="red" />
          </Text3D>

          <PinkModel position-z={0} scale={0.15} />
          <BirtdayModel />
          <GoldModel position-z={0.3} scale={0.15} />
          <TransModel position-z={0.3} scale={0.15} />
        </group>
      )}

      {screen?.name === "scene-2" && (
        <group position-z={-5} scale={3} position-y={-2}>
          <PinkModel position-z={0} scale={0.15} />
          <BirtdayModel />
          <GoldModel position-z={0.3} scale={0.15} />
          <TransModel position-z={0.3} scale={0.15} />
        </group>
      )}
    </>
  );
};

export default Experience;
