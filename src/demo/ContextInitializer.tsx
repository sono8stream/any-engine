import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';

const ContextInitializer: React.FC<{
  scene: THREE.Scene;
  updateEvents: Array<() => void>;
}> = ({ scene, updateEvents }) => {
  const context = useContext(SceneContext);
  useEffect(() => {
    context.addObject = (object) => {
      scene.add(object);
    };
    context.addUpdateEvent = (event) => {
      updateEvents.push(event);
    };
    console.log('initializer');
  }, []);

  return null;
};

export default ContextInitializer;
