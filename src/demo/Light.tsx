import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';

const Light: React.FC = () => {
  const context = useContext(SceneContext);
  useEffect(() => {
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 200, 100);
    light.castShadow = true;
    light.shadow.camera.top = 180;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -120;
    light.shadow.camera.right = 120;
    context.addObject(light);

    const light2 = new THREE.HemisphereLight(0xffffff, 0x444444);
    light2.position.set(0, 200, 0);
    context.addObject(light2);
  }, []);
  return null;
};

export default Light;
