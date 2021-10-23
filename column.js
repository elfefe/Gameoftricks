const column = () => {
    const buttons = Array.from(document.getElementsByClassName('buttonHolder'));
    const buttonSound = document.getElementById('buttonAudio');
    buttonSound.muted = true;
    buttons.forEach((button, index) => {
        const child = button.children[0];
        button.onmouseover = () => {
            button.style.cursor = "pointer";
        };
        button.onmouseout = () => {
            child.style.color = "black";
        };
    });
    console.log(buttons);
};