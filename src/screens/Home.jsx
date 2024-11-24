import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { useRef, useEffect } from "react";
import { CameraHelper, DirectionalLightHelper, PointLightHelper } from "three";
import { useGlobal } from "../hooks/GlobalContext";
import Experience from "../components/Experience";

function LightHelper() {
  const light = useRef();
  const targetRef = useRef();
  const shadowRef = useRef();

  useHelper(light, DirectionalLightHelper, 2, "yellow");
  useHelper(shadowRef, CameraHelper, "cyan");

  useEffect(() => {
    if (light.current && targetRef.current) {
      light.current.target = targetRef.current; // Set the target of the light
    }
  }, []);

  return (
    <>
      <directionalLight
        intensity={7}
        ref={light}
        position={[0, 7, 0]}
        castShadow
      >
        <orthographicCamera
          attach={"shadow-camera"}
          ref={shadowRef}
          scale={3}
        />
      </directionalLight>
      <object3D ref={targetRef} position={[0, -2, -5]} /> // light will point
      here
    </>
  );
}

function PointHelper() {
  const light = useRef();
  const shadowRef = useRef();

  useHelper(light, PointLightHelper, 2, "yellow");
  useHelper(shadowRef, CameraHelper, "cyan");

  return (
    <>
      <pointLight intensity={50} ref={light} position={[0, 7, 0]} castShadow>
        <orthographicCamera
          attach={"shadow-camera"}
          ref={shadowRef}
          scale={3}
        />
      </pointLight>
    </>
  );
}

function Home() {
  const store = createXRStore();
  const { screen, activeEnv } = useGlobal();

  async function handleVR() {
    await store.enterVR();
  }

  useEffect(() => {}, [screen]);

  return (
    <>
      
      {screen && (
        <button className="btn bg-white rounded-md " onClick={() => handleVR()}>
          Enter VR
        </button>
      )}
      <Canvas shadows>
        <XR store={store}>
          //* --- fps ----------
          <Perf position="bottom-right" />
          <Experience />
          {activeEnv && (
            <Environment
              files={`/texture/${activeEnv}.hdr`}
              environmentIntensity={2}
              background
            />
          )}
          <OrbitControls />
          {/* <gridHelper /> */}
          {/* <axesHelper args={[10]} /> */}
          {/* -----------light--------- */}
          {/* <PointHelper /> */}
          <LightHelper />
          {/* <ambientLight position={[0, 10, 0]} intensity={1} /> */}
          //* postprocessing effects
          {/* <EffectComposer>
            <Bloom />
          </EffectComposer> */}
        </XR>
      </Canvas>
    </>
  );
}

export default Home;
