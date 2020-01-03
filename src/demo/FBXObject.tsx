import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import { Material } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import SceneContext from '../context/sceneContext';

const FBXObject: React.FC = () => {
  const context = useContext(SceneContext);
  useEffect(() => {
    new FBXLoader().load('./Samba Dancing.fbx', (object) => {
      const mixer = new THREE.AnimationMixer(object);
      mixer.clipAction((object as any).animations[0]).play();
      object.traverse((child) => {
        if ((child as any).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      context.addObject(object);
      context.addUpdateEvent(() => {
        if (mixer) {
          mixer.update(0.01);
        }
      });
    });
  }, []);
  return null;
};

export default FBXObject;
