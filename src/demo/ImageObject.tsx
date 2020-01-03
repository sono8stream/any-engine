import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';

const ImageObject: React.FC = () => {
  const context = useContext(SceneContext);

  useEffect(() => {
    const texture = new THREE.TextureLoader().load('./logo.png');
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(1, 0, 0);
    context.addObject(sprite);
  }, []);
  return null;
};

export default ImageObject;
