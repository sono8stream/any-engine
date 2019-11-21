import React, { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import * as ts from 'typescript';
import ScriptTag from './component/scriptTag';
import Field from './demo/Field';

const App: React.FC = () => {
  useEffect(() => {
    const source = "const x : string = 'string';console.log(x);";
    const result = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS }
    });
    eval(result.outputText);
  }, []);
  return (
    <div className="App">
      <ScriptTag src="./testScript.js" />
      <Field />
    </div>
  );
};

export default App;
