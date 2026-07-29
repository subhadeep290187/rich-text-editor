
export function handleBoldClick(): void {
    handleGenericClick('strong');

}

export function handleItalicClick(): void {
    handleGenericClick('em');
}

export function handleUnderlineClick(): void {
    handleGenericClick('u');
}
export function handleStrikeClick(): void {
    handleGenericClick('s');
}

function handleGenericClick(tagName: string): void {
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
