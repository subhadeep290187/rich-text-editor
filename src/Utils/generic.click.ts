
export function handleBoldClick(elm: HTMLElement | null): void {
    handleGenericClick('strong', elm);
}

export function handleItalicClick(elm: HTMLElement | null): void {
    handleGenericClick('em', elm);
}

export function handleUnderlineClick(elm: HTMLElement | null): void {
    handleGenericClick('u', elm);
}
export function handleStrikeClick(elm: HTMLElement | null): void {
    handleGenericClick('s', elm);
}

function handleGenericClick(tagName: string, elm?: HTMLElement | null): void {
  const editor = elm;

  if (!editor) {
    return;
  }

  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return;
  }

  const range = selection.getRangeAt(0);
  const container = range.commonAncestorContainer;
  const commonAncestorElement =
    container instanceof Element ? container : container.parentElement;
  const existingElement = commonAncestorElement?.closest(tagName) ?? null;

  if (existingElement?.parentNode) {
    existingElement.replaceWith(...Array.from(existingElement.childNodes));
  } else {
    const wrapper = document.createElement(tagName);
    range.surroundContents(wrapper);
  }

  selection.removeAllRanges();
  editor.focus();
}
