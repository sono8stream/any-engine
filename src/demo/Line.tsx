import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';

const Line: React.FC = () => {
  const context = useContext(SceneContext);
  const geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-100, 100, 0),
    new THREE.Vector3(100, 100, 0)
  );
  const line = new THREE.Line(
    geometry,
    new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 100 })
  );
  context.addObject(line);
  return null;
};

export default Line;
