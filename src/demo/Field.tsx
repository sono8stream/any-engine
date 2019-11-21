import React from 'react';
import { Canvas } from 'react-three-fiber';
import SpriteObject from '../objects/SpriteObject';
import scene from '../scenes/test_scene.json';

const Field: React.FC = () => {
  console.log(scene.objects);
  return (
    <Canvas>
      <SpriteObject />
    </Canvas>
  );
};

export default Field;
