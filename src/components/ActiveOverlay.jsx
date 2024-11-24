import React, { useEffect } from "react";
import { SCREENS } from "../static/data";
import { useGlobal } from "../hooks/GlobalContext";
import { HexColorPicker } from "react-colorful";

const ActiveOverlay = () => {
  const { selectedOverlay, screen, setScreen, setActiveEnv, setAssetColor, setActiveAsset, activeAsset, activeEnv } = useGlobal();

  function handleScreen(data) {
    setScreen(data);
    setActiveEnv(data.bg[0])
    setActiveAsset(data.assets[0])
  }

  function handleEnv(data) {
    setActiveEnv(data);
  }

  function handleAsset(asset) {
    setActiveAsset(asset);
  }

  useEffect(() => {}, [selectedOverlay, screen, activeAsset, activeEnv]);

  return (
    <>
      <div className="active-overlay h-full px-3 z-10 py-12 bg-slate-100 ">
        {selectedOverlay === "scene" && (
          <div className="flex flex-col h-full gap-6 py-7 transition-all ">
            {SCREENS?.map((data, index) => (
              <>
                <button
                  key={index}
                  onClick={() => handleScreen(data)}
                  className={`h-12 w-12 p-1 rounded-md shadow-sm border-2  ${screen.name === data.name ? ' border-blue-400' : 'border-gray-100'} `}
                >
                  <img
                    className="h-full w-full"
                    src={`/images/${data.image}`}
                    alt=""
                  />
                </button>
              </>
            ))}
          </div>
        )}

        {selectedOverlay === "assets" && (
          <div className="flex flex-col py-7 gap-6 transition-all ">
            {screen?.assets?.map((asset, index) => (
              <>
                <button
                  onClick={() => handleAsset(asset)}
                  key={index}
                  className={`p-1 rounded-md shadow-sm border-2 ${activeAsset?.name === asset.name ? ' border-blue-400' : 'border-gray-100'} `}
                >
                  <img
                    className="h-12 w-12"
                    src={`/images/${asset.img}`}
                    alt=""
                  />
                </button>
              </>
            ))}
          </div>
        )}

        {selectedOverlay === "env" && (
          <div className="flex flex-col py-7 gap-6 transition-all ">
            {screen?.bg.map((text, index) => (
              <>
                <button
                  onClick={() => handleEnv(text)}
                  key={index}
                  className={`p-1 rounded-md shadow-sm border-2 ${activeEnv === text ? ' border-blue-400' : 'border-gray-100'} `}
                >
                  <img
                    className="h-12 w-12"
                    src={`/images/scene-1.png`}
                    alt=""
                  />
                </button>
              </>
            ))}
          </div>
        )}
      </div>

      <div className="fixed z-10 top-5 right-5">
        <HexColorPicker
          // color={as}
          onChange={setAssetColor}
          className="w-48"
        />
      </div>
    </>
  );
};

export default ActiveOverlay;
