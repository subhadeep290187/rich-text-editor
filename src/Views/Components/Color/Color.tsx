import { SVGS } from '../../../assert/svgs';
import './Color.css';

const Color = () => {
  return (
    <div className="color-picker-wrapper">
        <label className="color-picker-wrapper">
          <input type="color" id="colorPicker" value="#4A90E2" />
          <span dangerouslySetInnerHTML={{ __html: SVGS.highlighter }} />
        </label>
      </div>
  );
};

export default Color;
