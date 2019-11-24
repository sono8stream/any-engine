import React, { useContext, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FieldContext from '../context/fieldContext';

const SpriteObject: React.FC = () => {
  const ref = useRef<any>(null);
  const texture = new THREE.TextureLoader().load('./logo.png');
  const fieldContext = useContext(FieldContext);
  useEffect(() => {
    fieldContext.fieldData.variables.additional = 10;
    console.log(fieldContext.fieldData.variables);
  }, [fieldContext]);

  return (
    <mesh
      ref={ref}
      onClick={() => {
        if (fieldContext.setFieldData) {
          fieldContext.fieldData.variables.additional++;
          fieldContext.setFieldData({ ...fieldContext.fieldData });
        }
        console.log(fieldContext.fieldData.variables);
      }}
    >
      <planeGeometry attach="geometry" args={[5, 5]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default SpriteObject;
