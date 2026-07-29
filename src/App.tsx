import './App.css';
import Controller from './Views/Controllers/Controller';
import Editor from './Views/Editor/Editor';
function App() {
  return (
    <div className="rich-text-editor">
      <Controller />
      <Editor />
    </div>
  )
}

export default App
