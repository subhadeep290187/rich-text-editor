import './Editor.css'
function Editor() {
    return (
       <div contentEditable={true} className='rich-text-container'>
        Hello Vite + React1!
       </div>
    );
}

export default Editor;