import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';

const ImageObject: React.FC = () => {
  const context = useContext(SceneContext);
  const logo = './sample/5c289afb9a1575862e893a21_01. Royal Heath.jpg';
  new THREE.TextureLoader().load(logo, (texture) => {
    texture.minFilter = THREE.LinearFilter;
    const width = texture.image.width;
    const height = texture.image.height;
    console.log([width, height]);
    const material = new THREE.SpriteMaterial({
      map: texture,
      color: 0xffffff
    });
    const sprite = new THREE.Sprite(material);
    sprite.center.set(0.5, 0.5);
    sprite.scale.set(width, height, 1);
    context.addObject(sprite);
    sprite.position.set(0, 0, 0);
  });
  return null;
};

export default ImageObject;
