import React, { useContext } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';
import Atlas from './Atlas';
import KeyListener from './KeyListener';
import MouseListener from './MouseListener';

const Scene2D = () => {
  const scene = new THREE.Scene();
  const updateEvents = new Array<() => void>();

  const width = window.innerWidth;
  const height = window.innerHeight;

  const camera = new THREE.OrthographicCamera(
    -width / 2,
    width / 2,
    height / 2,
    -height / 2,
    1,
    10
  );
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const context = useContext(SceneContext);
  context.scene = scene;
  context.camera = camera;
  context.addObject = (object) => {
    scene.add(object);
  };
  context.addUpdateEvent = (event) => {
    updateEvents.push(event);
  };

  document.body.appendChild(renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);
    updateEvents.forEach((event) => event());
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    const nextWidth = window.innerWidth;
    const nextHeight = window.innerHeight;

    camera.left = -nextWidth / 2;
    camera.right = nextWidth / 2;
    camera.top = nextHeight / 2;
    camera.bottom = -nextHeight / 2;
    camera.updateProjectionMatrix();

    renderer.setSize(nextWidth, nextHeight);
  });

  return (
    <>
      <KeyListener />
      <MouseListener />
      <Atlas />
    </>
  );
};

export default Scene2D;
