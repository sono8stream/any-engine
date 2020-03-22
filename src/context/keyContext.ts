import React from 'react';

const KeyContext = React.createContext<{
  getKey: (keyName: string) => boolean;
}>({ getKey: () => false });

export default KeyContext;
