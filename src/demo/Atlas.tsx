import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';
import KeyContext from '../context/keyContext';
import SceneContext from '../context/sceneContext';
import MouseContext from '../context/mouseContext';

const Atlas: React.FC = () => {
  const context = useContext(SceneContext);
  const keyContext = useContext(KeyContext);
  const mouseContext = useContext(MouseContext);
  let pat = 0;

  const texture = new THREE.TextureLoader().load('./m_castle.png');
  const material = new THREE.SpriteMaterial({
    map: texture,
    color: 0xffffff
  });
  const sprite = new THREE.Sprite(material);
  texture.repeat.set(0.125, 0.04);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  sprite.scale.set(64, 64, 1);
  sprite.position.set(0, 0, 1);
  context.addObject(sprite);
  context.addUpdateEvent(() => {
    if (keyContext.getKey('ArrowUp')) {
      pat++;
      texture.offset.x = 0.125 * (pat % 4);
      texture.offset.y = 0.04 * Math.round(pat / 4);
      texture.needsUpdate = true;
      console.log('up');
    }
    if (keyContext.getKey('ArrowDown')) {
      pat--;
      texture.offset.x = 0.125 * (pat % 4);
      texture.offset.y = 0.04 * Math.round(pat / 4);
      texture.needsUpdate = true;
      console.log('down');
    }
  });

  mouseContext.addOnTap(sprite.uuid, () => {
    pat++;
    texture.offset.x = 0.125 * (pat % 4);
    texture.offset.y = 0.04 * Math.round(pat / 4);
    texture.needsUpdate = true;
    console.log('up');
  });

  return null;
};

export default Atlas;
