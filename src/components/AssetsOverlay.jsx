import React, { useEffect, useState } from "react";
import { useGlobal } from "../hooks/GlobalContext";
import { HexColorPicker } from "react-colorful";
import ActiveOverlay from "./ActiveOverlay";

const AssetsOverlay = () => {
  const {
    screen,
    setSelectedOverlay,
    selectedOverlay,
    activeAsset,
    setText,
    text,
    setAnimation
  } = useGlobal();

  function handleSelectedOverlay(data) {
    setSelectedOverlay(data);
  }

  useEffect(() => {}, [selectedOverlay]);

  const [data, setData] = useState(text.value);
  const [font, setFont] = useState(text.font);

  return (
    <>
      {screen && (
        <div className="asset-overlay z-10 fixed left-0 h-full shadow-md flex">
          <div className="asset-top flex flex-col gap-3 items-start border-e-2 px-2 border-slate-200 py-12 bg-slate-100 ">
            <button
              onClick={() => handleSelectedOverlay("scene")}
              className={`py-2 px-3 text-sm text-left border-2 rounded-md ${
                selectedOverlay === "scene"
                  ? " border-blue-300"
                  : "border-gray-100"
              } `}
            >
              Scene
              <img className="h-12 w-12" src="/images/scene-1.png" alt="" />
            </button>
            <button
              onClick={() => handleSelectedOverlay("assets")}
              className={`py-2 px-3 text-sm text-left border-2 rounded-md ${
                selectedOverlay === "assets"
                  ? " border-blue-300"
                  : "border-gray-100"
              } `}
            >
              Assets
              <img className="h-12 w-12" src="/images/scene-1.png" alt="" />
            </button>
            <button
              onClick={() => handleSelectedOverlay("env")}
              className={`py-2 px-3 text-sm text-left border-2 rounded-md ${
                selectedOverlay === "env"
                  ? " border-blue-300"
                  : "border-gray-100"
              } `}
            >
              Env..
              <img className="h-12 w-12" src="/images/scene-1.png" alt="" />
            </button>
          </div>

          {selectedOverlay && <ActiveOverlay />}

          {selectedOverlay === "assets" && (
            <>
              <div className="texture-overlay bg-slate-400 py-12 px-3 flex flex-col transition-all ">
                {activeAsset?.texture.map((text, index) => (
                  <>
                    <button
                      key={index}
                      className={`p-1 rounded-md shadow-sm border-2 ${
                        activeAsset?.texture === text
                          ? " border-blue-400"
                          : "border-gray-100"
                      } `}
                    >
                      {text}
                    </button>
                  </>
                ))}
              </div>
            </>
          )}

          {/* -------------------------text input----------------------  */}
          <div className=" z-10 p-5 flex flex-col gap-3 h-fit fixed left-[250px] ">
            <div className="flex gap-3">
              <input
                onChange={(e) => setData(e.target.value)}
                value={data}
                className="px-2 py-1 rounded-md focus:outline-none"
                type="text"
              />
              <button
                onClick={() => setText({ font: font, value: data })}
                className="px-5 py-2 bg-slate-300 rounded-md font-medium "
              >
                Apply
              </button>
            </div>
            <div>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="px-2 py-1 rounded-md focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="halo-dek-regular">halo-dek-regular</option>
                <option value="good-old-3d">good-Old-3D</option>
                <option value="good-old-dos">good-old-dos</option>
                <option value="good-old-outline">good-old-outline</option>
                <option value="good-old-distort">good-old-distort</option>
                <option value="good-old-smooth">good-old-smooth</option>
              </select>
            </div>
          </div>

          <div className=" fixed z-10 top-5 right-[300px]">
             <button onClick={()=>setAnimation((prev)=>!prev)} className="px-5 py-2 bg-white rounded-md " >Play/Pause</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AssetsOverlay;
