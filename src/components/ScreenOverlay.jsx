import React, { useEffect, useState } from 'react'
import { useGlobal } from '../hooks/GlobalContext'
import { SCREENS} from '../static/data'

const ScreenOverlay = () => {

  const {setScreen} = useGlobal()
  const [selectOverlay, setSelectOverlay] = useState(true)

  function handleScreen(data){
    setScreen(data)
    setSelectOverlay(false)
  }

  // useEffect(()=>{

  // }, [SCREENS])

  return (
    <>
      <div className={`screen-overlay z-10 h-screen w-screen fixed bg-gray-100 flex items-center ${!selectOverlay && 'hidden'} `}>
         <div className="select flex items-center justify-around w-full h-full ">
          {SCREENS?.map((screen, index)=>(
            <>
              <button key={index} onClick={()=> handleScreen(screen)} className="h-[300px] w-[25%] bg-red-200 ">
                <img className='h-full w-full' src={`/images/${screen.image}`} alt="" />
              </button>
            </>
          ))}
         </div>
      </div>
    </>
  )
}

export default ScreenOverlay