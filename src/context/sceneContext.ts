import React from 'react';
import * as THREE from 'three';

const SceneContext = React.createContext<{
  scene: THREE.Scene;
  camera: THREE.Camera;
  addObject: (object: THREE.Object3D) => void;
  addUpdateEvent: (event: any) => void;
}>({
  scene: new THREE.Scene(),
  camera: new THREE.Camera(),
  addObject: () => null,
  addUpdateEvent: () => null
});

export default SceneContext;
