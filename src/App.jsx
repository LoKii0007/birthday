import "./App.css";
import { Canvas } from "@react-three/fiber";
import { createXRStore, XR } from "@react-three/xr";
import { BirtdayModel } from "./models/Model";
import { Environment } from "@react-three/drei";

function App() {
  const store = createXRStore();

  async function handleVR(){
    const vr = await store.enterVR()
    console.log('vr : ',vr)
  }

  return (
    <>
      <button onClick={() => handleVR()}>Enter VR</button>
      <Canvas>
        <XR store={store}>
          <Environment files={"./nebula-7.hdr"} background />
          <BirtdayModel />
          <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
