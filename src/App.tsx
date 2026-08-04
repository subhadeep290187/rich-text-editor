import { useRef } from 'react';
import Controller from './Views/Controllers/Controller';
import Editor from './Views/Editor/Editor';
import './App.css';

function App() {
  const htmlRef = useRef<HTMLDivElement>(null!);
  const defaultValue = "Rich Text Editor";
  return (
    <div className="rich-text-editor">
      <Controller htmlRef={htmlRef} />
      <Editor htmlRef={htmlRef} defaultValue={defaultValue} />
    </div>
  )
}

export default App
