import React, { useEffect } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';
import FBXObject from './FBXObject';
import Grid from './Grid';
import ImageObject from './ImageObject';
import Light from './Light';

const MyCanvas: React.FC = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  const updateEvents = new Array<() => void>();

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.set(0, 150, 300);

    const animate = () => {
      requestAnimationFrame(animate);
      updateEvents.forEach((event) => event());
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerHeight / window.innerWidth;
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  return (
    <SceneContext.Provider
      value={{
        addObject: (object) => {
          scene.add(object);
        },
        addUpdateEvent: (event) => {
          updateEvents.push(event);
        }
      }}
    >
      <Light />
      <Grid />
      <ImageObject />
      <FBXObject />
    </SceneContext.Provider>
  );
};

export default MyCanvas;
