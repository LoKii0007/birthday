import "./App.css";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { BirtdayModel } from "./models/Model";
import { Environment } from "@react-three/drei";
import { PerfHeadless, usePerf } from "r3f-perf";
import { PinkModel } from "./models/Pink-ballon";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { GoldModel } from "./models/Gold-ballon";
import { TransModel } from "./models/Trans-heart";

function App() {
  const store = createXRStore();

  async function handleVR() {
    const vr = await store.enterVR();
    console.log("vr : ", vr);
  }

  // const PerfHook = () => {
  //   const [gl, log, getReport] = usePerf()
  //   return <PerfHeadless />
  // }

  return (
    <>
      <button className="btn" onClick={() => handleVR()}>
        Enter VR
      </button>
      <Canvas>
        <XR store={store}>
          <group position-z={-5} scale={3} >
            <PinkModel position-z={-10} />
            <BirtdayModel />
            <GoldModel/>
            <TransModel />
          </group>
          <Environment files={"./nebula-7.hdr"} background />
          <directionalLight position={[0, 10, 0]} intensity={5} castShadow />

          //* postprocessing effects

          <EffectComposer>
            <Bloom />
          </EffectComposer>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
