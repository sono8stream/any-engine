import React from 'react';

const MouseContext = React.createContext<{
  addOnTap: (uuid: string, onTap: () => void) => void;
}>({
  addOnTap: () => {
    return;
  }
});

export default MouseContext;
