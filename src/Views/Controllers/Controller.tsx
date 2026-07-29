import React from 'react';
import { Click } from '../../Constants/click.const';
import './Controller.css';
import { handleBoldClick, handleItalicClick, handleUnderlineClick } from '../../Utils/generic.click';
function Controller() {
    const handleClick = (event: React.MouseEvent<HTMLDivElement> ) => {
        const target = event.target as HTMLElement;
        const btnClick = target.getAttribute('data-btn-click');
        if (!btnClick) return;
        switch(btnClick) {
            case Click.BOLD:
                handleBoldClick();
                break;
            case Click.ITALIC:
                handleItalicClick();
                break;
            case Click.UNDERLINE:
                handleUnderlineClick();
                break;
            default:
                break;
        }    
    }
    return (
        <div className='controllers' onClick={(event)=>handleClick(event)}>
            <button className='btn' data-btn-click={Click.BOLD}>B</button>
            <button className='btn' data-btn-click={Click.ITALIC}>I</button>
            <button className='btn' data-btn-click={Click.UNDERLINE}>U</button>
        </div>
    );
}

export default Controller;