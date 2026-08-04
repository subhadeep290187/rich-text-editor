import { useRef } from 'react';
import Controller from './Views/Controllers/Controller';
import Editor from './Views/Editor/Editor';
import './App.css';

function App() {
  const htmlRef = useRef<HTMLDivElement>(null!);
  let defaultValue = "Rich Text Editor";
  if (process.env.NODE_ENV === 'development') {
    console.log(process.env.NODE_ENV)
     defaultValue = "Rich Text Editor";
  }
  return (
    <div className="rich-text-editor">
      <Controller htmlRef={htmlRef} />
      <Editor htmlRef={htmlRef} defaultValue={defaultValue} />
    </div>
  )
}

export default App
