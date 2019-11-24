import React, { useContext, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import FieldContext from '../context/fieldContext';
import SpriteObject from '../objects/SpriteObject';
import FieldData from '../types/fieldData';

const Field: React.FC = () => {
  const [fieldData, setFieldData] = useState<FieldData>({
    variables: {},
    messages: {}
  });
  const fieldContext = useContext(FieldContext);
  useEffect(() => {
    fieldContext.fieldData = fieldData;
    fieldContext.setFieldData = setFieldData;
    console.log(fieldContext);
  }, []);
  return (
    <Canvas>
      <SpriteObject />
    </Canvas>
  );
};

export default Field;
