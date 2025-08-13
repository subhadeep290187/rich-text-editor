import React from 'react';

function Editor() {
    return (
       <div contentEditable={true} className='rich-text-container'>
        Hello Vite + React!
       </div>
    );
}

export default Editor;