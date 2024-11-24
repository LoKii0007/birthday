import { createContext, useContext, useState } from "react";
import { SCREENS } from "../static/data";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [screen, setScreen] = useState(null);
  const [activeAsset, setActiveAsset] = useState(SCREENS[0].assets[0])
  const [activeRef, setActiveRef] = useState(null)
  const [assetColor, setAssetColor] = useState(null)
  const [selectedOverlay, setSelectedOverlay] = useState(null)
  const [activeEnv, setActiveEnv] = useState(SCREENS[0].bg[0])
  const [text, setText] = useState({value : 'hello', font : 'halo-dek-regular'})
  const [animation, setAnimation] = useState(false)

  return (
    <GlobalContext.Provider value={{animation, setAnimation, text, setText, screen, setScreen, activeAsset, setActiveAsset, activeRef, setActiveRef, assetColor, setAssetColor, selectedOverlay, setSelectedOverlay, activeEnv, setActiveEnv }}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Something went wrong. Please try again");
  }
  return context;
}
