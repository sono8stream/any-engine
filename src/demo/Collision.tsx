import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import CollisionContext from '../context/collisionContext';
import SceneContext from '../context/sceneContext';
import Line from './Line';
import MoveLine from './MoveLine';

const Collision: React.FC = () => {
  const objects = Array<THREE.Object3D>();
  const context = useContext(SceneContext);
  return (
    <CollisionContext.Provider
      value={{
        addObject: (object) => {
          objects.push(object);
        }
      }}
    >
      <Line />
      <MoveLine />
    </CollisionContext.Provider>
  );
};

export default Collision;
