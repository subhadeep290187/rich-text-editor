export const handleOrderedListClick = (elm: HTMLElement | null) => {
    handleAdvanceClick('insertOrderedList', elm);
}

export const handleUnorderedListClick = (elm: HTMLElement | null) => {
    handleAdvanceClick('insertUnorderedList', elm);
}

const handleAdvanceClick = (command: string, elm: HTMLElement | null) => {
    const editor = elm;

    if (!editor) {
        return;
    }

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
        return;
    }

    const range = selection.getRangeAt(0);
    const listTag = command === 'insertOrderedList' ? 'ol' : command === 'insertUnorderedList' ? 'ul' : null;

    if (!listTag) {
        return;
    }

    const list = document.createElement(listTag);
    const listItem = document.createElement('li');
    const fragment = range.extractContents();

    if (fragment.childNodes.length > 0) {
        listItem.appendChild(fragment);
    } else {
        listItem.innerHTML = '&nbsp;';
    }

    list.appendChild(listItem);
    range.insertNode(list);
    selection.removeAllRanges();

    const newRange = document.createRange();
    newRange.selectNodeContents(listItem);
    newRange.collapse(false);
    selection.addRange(newRange);
    editor.focus();
}

export const handleFontSizeChange = (size: string, elm: HTMLElement | null) => {
    const editor = elm;

    if (!editor) {
        return;
    }

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
        return;
    }

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) {
        const paragraph = document.createElement('p');
        paragraph.style.fontSize = `${size}px`;
        paragraph.innerHTML = '&nbsp;';
        range.insertNode(paragraph);
        editor.focus();
        return;
    }

    const span = document.createElement('span');
    span.style.fontSize = `${size}px`;
    span.appendChild(range.extractContents());
    range.insertNode(span);

    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    newRange.collapse(false);
    selection.addRange(newRange);
    editor.focus();
}
