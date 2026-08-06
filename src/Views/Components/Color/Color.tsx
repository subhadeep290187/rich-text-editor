import { useState } from 'react';
import { SVGS } from '../../../assert/svgs';
import { COLORS } from '../../../Constants/click.const';
import './Color.css';

const Color = ({
  changeHandler,
  iconType,
}: {
  changeHandler: (color: string) => void;
  iconType: 'highlighter' | 'textColor';
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="color-picker-wrapper" onClick={() => setIsOpen((prev) => !prev)}>
        <span dangerouslySetInnerHTML={{ __html: SVGS[iconType] }} />
      </button>
      {isOpen && (
        <div className="color-palette">
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={(event) => {
                event.stopPropagation();
                changeHandler(color);
                setIsOpen(false);
              }}
              aria-label={`Select ${color}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Color;
