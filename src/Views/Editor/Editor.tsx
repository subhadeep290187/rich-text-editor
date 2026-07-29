import './Editor.css'
function Editor() {
    return (
       <div contentEditable={true} className='rich-text-container' id='editor'>
        Rich Text Editor
       </div>
    );
}

export default Editor;