
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
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const commonAncestorElement =
      container instanceof Element ? container : container.parentElement;
    const boldElement = commonAncestorElement?.closest(tagName) ?? null;
    if (boldElement) {
    // unbold the selected text by removing <strong> or <b> tags
      const parent = boldElement.parentNode;
      if (parent) {
        const firstChild = boldElement.firstChild;
        if (firstChild) {
          parent.replaceChild(firstChild, boldElement);
        }
        while (boldElement.firstChild && parent) {
          parent.insertBefore(boldElement.firstChild, boldElement);
        }
        parent?.removeChild(boldElement);
      }
    } else {
        // Bold the selected text by wrapping it in <strong> tags
      const strongElement = document.createElement(tagName);
      range.surroundContents(strongElement);
    }
    selection.removeAllRanges();
  }
}
