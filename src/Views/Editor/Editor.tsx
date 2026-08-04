import { useEffect } from 'react';
import './Editor.css';

function Editor({
  htmlRef,
  defaultValue,
}: {
  htmlRef: React.RefObject<HTMLDivElement | null>;
  defaultValue?: string;
}) {
  useEffect(() => {
    if (htmlRef.current) {
      htmlRef.current.innerText = defaultValue ?? '';
    }
  }, [defaultValue, htmlRef]);

  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning
      className="editor-canvas"
      id="editor"
      ref={htmlRef}
    />
  );
}

export default Editor;
