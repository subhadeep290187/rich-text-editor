import { SVGS } from '../../../assert/svgs';
import './Color.css';

const Color = ({changeHandler, iconType}: { changeHandler: (color: string) => void; iconType: 'highlighter' | 'textColor' }) => {
  return (
    <div className="color-picker-wrapper">
        <label className="color-picker-wrapper-lbl">
          <input type="color" id="colorPicker" value="#4A90E2" onChange={(e) => changeHandler(e.target.value)} />
          <span dangerouslySetInnerHTML={{ __html: SVGS[iconType] }} />
        </label>
      </div>
  );
};

export default Color;
