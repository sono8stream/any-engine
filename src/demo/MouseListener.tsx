import React, { useContext } from 'react';
import * as THREE from 'three';
import MouseContext from '../context/mouseContext';
import SceneContext from '../context/sceneContext';

const MouseListener: React.FC = ({}) => {
  const context = useContext(MouseContext);
  const sceneContext = useContext(SceneContext);
  const onTaps: { [key: string]: () => void } = {};
  context.addOnTap = (uuid: string, onTap: () => void) => {
    onTaps[uuid] = onTap;
  };
  const onClick = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    const mousePos = new THREE.Vector2();
    mousePos.x = (x / window.innerWidth) * 2 - 1;
    mousePos.y = -(y / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mousePos, sceneContext.camera);

    for (const intersection of raycaster.intersectObjects(
      sceneContext.scene.children
    )) {
      if (onTaps[intersection.object.uuid]) {
        onTaps[intersection.object.uuid]();
      }
    }
  };
  document.addEventListener('mousedown', onClick, false);
  return null;
};

export default MouseListener;
