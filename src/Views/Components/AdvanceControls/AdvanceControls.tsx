import Button from '../Button/Button';
import { SVGS } from '../../../assert/svgs';
import { CLICK_VALUES } from '../../../Constants/click.const';
import './AdvanceControls.css';
import {
    handleHighlightColorChange,
  handleOrderedListClick,
  handleTextColorChange,
  handleUnorderedListClick,
} from '../../../Utils/advance.click';
import Color from '../Color/Color';

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
      <Color changeHandler={(color) => handleHighlightColorChange(color, htmlRef.current)} iconType="highlighter" />
      <Color changeHandler={(color) => handleTextColorChange(color, htmlRef.current)} iconType="textColor" />
    </div>
  );
};

export default AdvanceControls;
