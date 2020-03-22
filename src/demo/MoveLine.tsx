import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import KeyContext from '../context/keyContext';
import SceneContext from '../context/sceneContext';

const MoveLine: React.FC = () => {
  const context = useContext(SceneContext);
  const keyContext = useContext(KeyContext);
  useEffect(() => {
    const geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3(-50, 0, 0),
      new THREE.Vector3(50, 5, 0)
    );
    const line = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({ color: 0x009900, linewidth: 1 })
    );
    context.addObject(line);
    context.addUpdateEvent(() => {
      if (keyContext.getKey('ArrowUp')) {
        line.position.y += 0.1;
      }
      if (keyContext.getKey('ArrowRight')) {
        line.position.x += 0.1;
      }
      if (keyContext.getKey('ArrowDown')) {
        line.position.y -= 0.1;
      }
      if (keyContext.getKey('ArrowLeft')) {
        line.position.x -= 0.1;
      }
    });
  }, []);
  return null;
};

export default MoveLine;
