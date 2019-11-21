import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const FieldObject: React.FC = () => {
  const ref = useRef<any>(null);
  useFrame(() => {
    if (ref) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent={true}
      />
    </mesh>
  );
};

export default FieldObject;
