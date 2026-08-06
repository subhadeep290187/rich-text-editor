import GenericControls from '../Components/GenericControls/GenericControls';
import AdvanceControls from '../Components/AdvanceControls/AdvanceControls';
import './Controller.css';
import DropDown from '../Components/DropDown/DropDown';
import { handleFontSizeChange } from '../../Utils/advance.click';

const data = [
  { value: '10', label: '10pt' },
  { value: '12', label: '12pt' },
  { value: '14', label: '14pt' },
  { value: '16', label: '16pt' },
  { value: '18', label: '18pt' },
  { value: '20', label: '20pt' },
];

function Controller({ htmlRef }: { htmlRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="controllers floating-menu">
      <DropDown
        changeHandler={(value) => handleFontSizeChange(value, htmlRef.current)}
        list={data}
        defaultValue="Size"
      />
      <GenericControls htmlRef={htmlRef} />
      <AdvanceControls htmlRef={htmlRef} />
    </div>
  );
}

export default Controller;
