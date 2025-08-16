import React from 'react';
import './Controller.css'
function Controller() {
    const handleClick = (event: React.MouseEvent<HTMLDivElement> ) => {
        const targetElement = event.target as HTMLElement;
        console.log(targetElement.dataset.btnClick);        
    }
    return (
        <div className='controllers' onClick={(event)=>handleClick(event)}>
            <button className='btn' data-btn-click='b'>B</button>
            <button className='btn' data-btn-click='i'>I</button>
            <button className='btn' data-btn-click='u'>U</button>
        </div>
    );
}

export default Controller;