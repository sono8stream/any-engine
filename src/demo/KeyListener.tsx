import React, { useContext } from 'react';
import KeyContext from '../context/keyContext';

const KeyListener: React.FC = () => {
  const context = useContext(KeyContext);
  const keyStates: { [key: string]: boolean } = {};
  context.getKey = (keyName) => keyStates[keyName];
  window.addEventListener('keydown', (event) => {
    keyStates[event.key] = true;
  });
  window.addEventListener('keyup', (event) => {
    keyStates[event.key] = false;
  });
  return null;
};

export default KeyListener;
