import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function TransModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/trans-heart-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.keys(actions).forEach(action => {
      actions[action].play();
    });
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="particle060" position={[1.281, -0.211, 5.848]} scale={10.63}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle061" position={[2.222, 55.675, 6.369]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle062" position={[-2.239, 52.482, -8.566]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle063" position={[-0.067, 49.288, 4.626]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle064" position={[7.501, 46.095, -5.206]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle065" position={[-2.239, 42.901, -8.566]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle066" position={[-4.721, 59.367, -5.727]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle067" position={[-0.641, 54.576, 3.773]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle068" position={[-7.834, 33.32, 3.01]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle069" position={[6.725, 44.996, -5.727]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle070" position={[7.501, 26.933, 0.613]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle071" position={[-2.239, 23.739, -8.566]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle072" position={[1.281, 30.624, 5.848]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle073" position={[5.14, 25.834, 3.773]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle074" position={[8.195, 21.043, -3.756]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle075" position={[1.281, 16.253, -5.727]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle076" position={[-3.889, 7.772, 0.613]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle077" position={[8.195, 6.672, -3.756]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle078" position={[-5.912, 1.384, -6.95]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle079" position={[2.222, 19.151, -5.206]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle080" position={[8.195, 23.741, -3.756]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle081" position={[-5.912, 12.764, 4.626]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle082" position={[5.14, 14.16, -2.124]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle083" position={[3.063, 9.37, 7.819]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
        <group name="particle084" position={[5.614, 3.183, -1.225]} scale={0.001}>
          <mesh name="Cube038_Cube048" geometry={nodes.Cube038_Cube048.geometry} material={materials.transparent} />
          <mesh name="Cube038_Cube048_1" geometry={nodes.Cube038_Cube048_1.geometry} material={materials.Material} />
          <mesh name="Cube038_Cube048_2" geometry={nodes.Cube038_Cube048_2.geometry} material={materials['yellow.003']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/trans-heart-transformed.glb')