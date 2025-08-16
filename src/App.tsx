import './App.css';
import Controller from './Views/Controllers/Controller';
import Editor from './Views/Editor/Editor';
function App() {
  return (
    <div style={{ padding: '20px', width:'200px' }}>
      <Controller />
      <Editor />
    </div>
  )
}

export default App
