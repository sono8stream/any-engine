import React, { useEffect, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { Group } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const UnityChan: React.FC = () => {
  const url = 'Samba Dancing.fbx';
  const [obj, setObj] = useState<Group>();
  let hoge: any = null;
  useEffect(() => {
    new FBXLoader().load(url, (model) => {
      setObj(model);
      hoge = model;
    });
  }, []);
  // const obj2 = useLoader(FBXLoader, url);
  // console.log(obj2);
  if (obj) {
    console.log(obj);
    return <primitive visible={true} object={obj} position={[0, 0, 0]} />;
  }
  return null;
};

export default UnityChan;
