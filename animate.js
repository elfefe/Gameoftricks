
let growinterval = null;
const animate = (img, from, to, speed) => {
    clearInterval(growinterval);

    const width = img.style.width.match(/\d+\.\d+|\d+/gm);

    img.style.width = from;
    let appliedsize = img.style.width ? parseFloat(width) : from;

    const dif = to - from;
    const step = dif * speed;

    growinterval = setInterval(() => {
        if (from < to ? appliedsize < to: appliedsize > to) {
            appliedsize += step;
            img.style.width = appliedsize + "%";
        } else {
            clearInterval(growinterval);
        }
    }, 10);
};