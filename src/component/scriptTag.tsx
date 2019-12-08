import React, { useEffect } from 'react';

interface Props {
  src: string;
}

const ScriptTag: React.FC<Props> = (props) => {
  // const { src } = props;
  const id = Math.random().toString();
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://firebasestorage.googleapis.com/v0/b/sono-portal.appspot.com/o/testScript.js?alt=media&token=23058651-db90-4b6f-8f51-51ff04c54baf';
    // script.async = true;
    script.type = 'module';
    const dom = document.getElementById(id);
    if (dom != null) {
      dom.replaceWith(script);
    }
  });
  return <div id={id} />;
};

export default ScriptTag;
