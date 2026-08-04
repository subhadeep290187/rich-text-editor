import './Editor.css'
function Editor({htmlRef, defaultValue}: {htmlRef: React.RefObject<HTMLDivElement>; defaultValue?: string}) {
    return (
       <div contentEditable={true} className='editor-canvas' id='editor' ref={htmlRef}>
        {defaultValue}
       </div>
    );
}

export default Editor;