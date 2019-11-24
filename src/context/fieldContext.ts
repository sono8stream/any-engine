import React, { useState } from 'react';
import FieldData from '../types/fieldData';

const FieldContext = React.createContext<{
  fieldData: FieldData;
  setFieldData: React.Dispatch<React.SetStateAction<FieldData>> | null;
}>({
  fieldData: {
    variables: {},
    messages: {}
  },
  setFieldData: null
});

export default FieldContext;

export const FieldProvider = FieldContext.Provider;
