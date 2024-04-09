function getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    const totalWidth = metrics.width + 30;
    return totalWidth;
}
export default getTextWidth