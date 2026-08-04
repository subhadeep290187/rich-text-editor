import { CLICK_VALUES } from '../../../Constants/click.const';
import { handleBoldClick, handleItalicClick, handleStrikeClick, handleUnderlineClick } from '../../../Utils/generic.click';
import Button from '../Button/Button';

const GenericControls = ({
  htmlRef,
}: {
  htmlRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="generic-controls">
      <Button label="B" className="bold" dataSetClick={CLICK_VALUES.BOLD} onClick={()=>handleBoldClick(htmlRef.current)} />
      <Button label="I" className="italic" dataSetClick={CLICK_VALUES.ITALIC} onClick={()=>handleItalicClick(htmlRef.current)} />
      <Button label="U" className="underline" dataSetClick={CLICK_VALUES.UNDERLINE} onClick={()=>handleUnderlineClick(htmlRef.current)} />
      <Button label="S" className="strike" dataSetClick={CLICK_VALUES.STRIKE} onClick={()=>handleStrikeClick(htmlRef.current)} />
    </div>
  );
};

export default GenericControls;
