import React, { useContext, useEffect, useRef } from 'react';
import * as THREE from 'three';
import typescript from 'typescript';
import FieldContext from '../context/fieldContext';

const SpriteObject: React.FC = () => {
  const ref = useRef<any>(null);
  const texture = new THREE.TextureLoader().load('./logo.png');
  const fieldContext = useContext(FieldContext);
  const events = { onClick: () => 0 };
  const loadEvents = async () => {
    const response = await fetch('http://localhost:3000/events/eventDemo.ts');
    const tsCode = await response.text();
    const jsCode = typescript.transpileModule(tsCode, {
      compilerOptions: { module: typescript.ModuleKind.CommonJS }
    }).outputText;
    let x = 0;
    x += 10;
    const func = new Function('React', jsCode + 'return Loader();');
    const res = func(React);
    console.log(func);
    console.log(res);
  };

  useEffect(() => {
    fieldContext.fieldData.variables.additional = 10;
    console.log(fieldContext.fieldData.variables);
    loadEvents();
  }, [fieldContext]);

  return (
    <mesh
      ref={ref}
      onClick={() => {
        console.log(events.onClick());
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
