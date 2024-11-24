import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls, folder } from 'leva'
import { useGlobal } from '../hooks/GlobalContext'
import * as THREE from 'three'

export function PinkModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/pink-ballon-transformed.glb')
  const { actions } = useAnimations(animations, group)

  const {activeRef, setActiveRef, activeAsset, assetColor, setAssetColor, animation} = useGlobal()
  const [actualColor, setActualColor] = useState(null)

  const controls = useControls(
    'Pink Balloon',
    {
      Transform: folder({
        position: { 
          value: [0, 0, 0],
          step: 0.1,
        },
        scale: {
          value: 0.1,
          min: 0.1,
          max: 0.3,
          step: 0.001
        }
      })
    },
    {
      collapsed: true,
      hidden: !(group?.current?.uuid === activeRef?.current?.uuid)
    }
  )

  const position = controls?.Transform?.position || [0, 0, 0]
  const scale = controls?.Transform?.scale || 0.1

  function playAnimation() {
    Object.keys(actions).forEach((key) => {
      actions[key].paused = false;
      actions[key].play()
    })
  }

  function pauseAnimation() {
    Object.keys(actions).forEach((key) => {
      actions[key].paused = true
    })
  }

  useEffect(() => {
    if(activeAsset?.name !== 'pinkBalloon') return
    if (animation) {
      playAnimation()
    } else {
      pauseAnimation()
    }
  }, [animation, activeAsset])

  useEffect(() => {
    playAnimation()
  }, [])

  useEffect(() => {
    console.log(activeAsset)
    if(activeAsset?.name === 'pinkBalloon' ){
      setActiveRef(group)
      console.log('here')
    }

  }, [activeAsset])

  useEffect(() => {
    console.log('oink :', activeRef)
    console.log('group :', group)
  }, [activeRef, position, scale])

  useEffect(() => {
    if (materials?.redpurple && assetColor && activeAsset.name === 'pinkBalloon' ) {
      materials.redpurple.color.set(assetColor);
    }
  }, [materials, assetColor, activeAsset])

  // useEffect(() => {
  //   const initialColor = `#${materials.redpurple.color.getHexString()}`
  //   setActualColor(initialColor)
  //   setAssetColor(initialColor)
  // }, [materials])

  return (
    <group ref={group} {...props} position={position} dispose={null}  scale={scale} >
      <group name="Scene">
        <group name="particle035" position={[-7.405, -0.011, -8.317]} scale={8.15}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle036" position={[0.121, 68.636, 3.52]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle037" position={[-3.881, 65.442, 0.585]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle038" position={[-7.405, 62.248, -8.317]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle039" position={[5.768, 59.055, -2.39]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle040" position={[5.164, 83.597, -7.811]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle041" position={[-3.387, 78.807, 7.38]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle042" position={[5.768, 49.474, 3.52]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle043" position={[7.509, 46.28, 6.342]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle044" position={[2.789, 64.436, 7.38]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle045" position={[-5.747, 39.893, -8.056]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle046" position={[7.509, 36.699, -5.233]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle047" position={[-7.405, 33.506, 3.258]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle048" position={[5.768, 30.312, 3.52]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle049" position={[-6.394, 40.484, -7.811]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle050" position={[-3.387, 35.693, 1.678]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle051" position={[-5.747, 20.731, -8.056]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle052" position={[-3.881, 17.538, 0.585]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle053" position={[7.969, 21.322, 1.678]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle054" position={[5.768, 11.151, -2.39]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle055" position={[2.231, 7.957, -5.233]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle056" position={[-3.387, 6.951, 1.678]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle057" position={[7.731, 2.16, 5.678]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle058" position={[-6.394, 9.37, -7.811]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
        <group name="particle059" position={[-7.405, 3.183, 3.258]} scale={0.001}>
          <mesh name="Cube046_Cube056" geometry={nodes.Cube046_Cube056.geometry} material={materials.redpurple} />
          <mesh name="Cube046_Cube056_1" geometry={nodes.Cube046_Cube056_1.geometry} material={materials.Material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pink-ballon-transformed.glb')
