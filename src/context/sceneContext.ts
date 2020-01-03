import React from 'react';

const SceneContext = React.createContext<{
  addObject: (object: THREE.Object3D) => void;
  addUpdateEvent: (event: any) => void;
}>({ addObject: () => null, addUpdateEvent: () => null });

export default SceneContext;
