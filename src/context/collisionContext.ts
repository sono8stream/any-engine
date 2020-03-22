import React from 'react';

const CollisionContext = React.createContext<{
  addObject: (object: THREE.Object3D) => void;
}>({ addObject: () => null });

export default CollisionContext;
