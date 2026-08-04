import Button from '../Button/Button';
import { SVGS } from '../../../assert/svgs';
import { CLICK_VALUES } from '../../../Constants/click.const';
import './AdvanceControls.css';
import {
  handleFontSizeChange,
  handleOrderedListClick,
  handleUnorderedListClick,
} from '../../../Utils/advance.click';
import DropDown from '../DropDown/DropDown';
import Color from '../Color/Color';
const data = [
  { value: '10', label: '10pt' },
  { value: '12', label: '12pt' },
  { value: '14', label: '14pt' },
  { value: '16', label: '16pt' },
  { value: '18', label: '18pt' },
  { value: '20', label: '20pt' },
];
const AdvanceControls = ({
  htmlRef,
}: {
  htmlRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="advance-controls">
      <Button
        SVG={SVGS.orderedList}
        dataSetClick={CLICK_VALUES.ORDERED_LIST}
        onClick={() => handleOrderedListClick(htmlRef.current)}
      />
      <Button
        SVG={SVGS.unorderedList}
        dataSetClick={CLICK_VALUES.UNORDERED_LIST}
        onClick={() => handleUnorderedListClick(htmlRef.current)}
      />
      <DropDown
        changeHandler={(value) => handleFontSizeChange(value, htmlRef.current)}
        list={data}
      />
      <Color />
    </div>
  );
};

export default AdvanceControls;
