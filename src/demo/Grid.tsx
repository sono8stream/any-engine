import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import { Material } from 'three';
import SceneContext from '../context/sceneContext';

const Grid: React.FC = () => {
  const context = useContext(SceneContext);
  const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
  (grid.material as Material).opacity = 0.2;
  (grid.material as Material).transparent = true;
  context.addObject(grid);
  return null;
};

export default Grid;
