import GenericControls from '../Components/GenericControls/GenericControls';
import AdvanceControls from '../Components/AdvanceControls/AdvanceControls';
import './Controller.css';

function Controller({htmlRef}: {htmlRef: React.RefObject<HTMLDivElement>}) {
    
    return (
        <div className='controllers floating-menu'>
           <GenericControls htmlRef={htmlRef} />
           <AdvanceControls htmlRef={htmlRef} />
        </div>
    );
}

export default Controller;