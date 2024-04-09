import getTextWidth from "./getTextWidth.js";

const changeTextWidth = (select) => {

    const selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
        const selectedOption = select.options[selectedIndex];
        const textWidth = getTextWidth(selectedOption.textContent, window.getComputedStyle(selectedOption).font);
        select.style.width = `${textWidth}px`;
    }
}
export default changeTextWidth