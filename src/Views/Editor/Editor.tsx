import './Editor.css'
function Editor() {
    return (
       <div contentEditable={true} className='editor-canvas' id='editor'>
        Rich Text Editor
       </div>
    );
}

export default Editor;