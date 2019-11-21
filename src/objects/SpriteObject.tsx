import React, { useRef } from 'react';
import * as THREE from 'three';

const SpriteObject: React.FC = () => {
  const ref = useRef<any>(null);
  const texture = new THREE.TextureLoader().load('Image URL');

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[5, 5]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default SpriteObject;
