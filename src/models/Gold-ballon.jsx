import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function GoldModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/gold-ballon-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.keys(actions).forEach(action => {
      actions[action].play();
    });
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="particle010" position={[7.124, -0.011, 6.302]} scale={8.246}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle011" position={[5.045, 40.475, -7.122]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle012" position={[8.205, 55.728, -2.899]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle013" position={[7.124, 34.088, 6.302]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle014" position={[-6.523, 30.895, -7.122]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle015" position={[3.075, 41.357, -8.538]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle016" position={[5.201, 36.567, -7.388]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle017" position={[5.045, 21.314, -1.406]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle018" position={[8.17, 18.12, 2.999]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle019" position={[-0.567, 22.195, -7.388]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle020" position={[-6.523, 11.733, -7.122]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle021" position={[8.17, 8.539, -2.94]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle022" position={[7.124, 5.346, 0.542]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle023" position={[-6.523, 2.152, -7.122]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle024" position={[-3.134, 52.484, -2.899]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle025" position={[-4.293, 31.925, 6.302]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle026" position={[5.045, 28.731, -1.406]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle027" position={[-2.213, 31.923, 2.999]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle028" position={[-4.293, 22.344, 6.302]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle029" position={[-6.523, 19.151, -1.406]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle030" position={[8.17, 15.957, -8.577]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle031" position={[5.201, 18.951, -1.687]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle032" position={[5.045, 9.57, -1.406]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle033" position={[8.205, 7.971, -7.009]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
        <group name="particle034" position={[-0.567, 4.58, 4.187]} scale={0.001}>
          <mesh name="Cube054_Cube064" geometry={nodes.Cube054_Cube064.geometry} material={materials.Material} />
          <mesh name="Cube054_Cube064_1" geometry={nodes.Cube054_Cube064_1.geometry} material={materials.gold} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gold-ballon-transformed.glb')