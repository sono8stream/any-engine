import React, { useContext, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import FieldContext from '../context/fieldContext';
import SpriteObject from '../objects/SpriteObject';
import FieldData from '../types/fieldData';

const Field: React.FC = () => {
  const [fieldData, setFieldData] = useState<FieldData>({
    variables: { additional: 10 },
    messages: {}
  });
  const fieldContext = useContext(FieldContext);
  fieldContext.fieldData = fieldData;

  useEffect(() => {
    fieldContext.publishMessage = (name: string, value: any) => {
      setFieldData({ ...fieldData, messages: { [name]: value } });
    };
    fieldContext.updateVariable = (name: string, value: any) => {
      setFieldData({ ...fieldData, variables: { [name]: value } });
    };
  }, []);

  return (
    <Canvas>
      <SpriteObject />
    </Canvas>
  );
};

export default Field;
