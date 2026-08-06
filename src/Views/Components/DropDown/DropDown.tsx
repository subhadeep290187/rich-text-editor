import { CLICK_VALUES } from '../../../Constants/click.const';
import './DropDown.css';

const DropDown = ({changeHandler, list, defaultValue}: {changeHandler: (value: string) => void; list: { value: string; label: string }[]; defaultValue?: string}) => {
  return (
    <div className="dropdown">
      <select
        className="font-size-select"
        data-set-click={CLICK_VALUES.FONT_SIZE}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
        //  value={defaultValue || 'Size'}
      >
        <option value="" disabled selected hidden>
          {defaultValue || 'Select'}
        </option>
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
