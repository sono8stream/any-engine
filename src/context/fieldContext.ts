import React, { useState } from 'react';
import FieldData from '../types/fieldData';

const FieldContext = React.createContext<{
  fieldData: FieldData;
  publishMessage: (name: string, value: any) => void;
  updateVariable: (name: string, value: any) => void;
}>({
  fieldData: {
    variables: {},
    messages: {}
  },
  publishMessage: () => {
    return;
  },
  updateVariable: () => {
    return;
  }
});

export default FieldContext;

export const FieldProvider = FieldContext.Provider;
