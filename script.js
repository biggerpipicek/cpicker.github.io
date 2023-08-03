//THIS CODE IS FROM DEVELOPER.MOZILLA.ORG, BUT I CHANGED WHERE AND HOW THE COLOR SHOULD BE DISPLAYED
let color_picker;
const def_color = "#000000";

window.addEventListener("load", startup, false);

//THIS FUNCTION SETS A DEF COLOR
function startup() {
    color_picker = document.querySelector("#color_picker");
    color_picker.value = def_color;
    color_picker.addEventListener("input", updateFirst, false);
    color_picker.addEventListener("change", updateAll, false);
    color_picker.select();
}

function updateFirst(event) {
    const display_color = document.querySelector("#chosen_color");
    if (display_color) {
        display_color.style.backgroundColor = event.target.value;
        const hex_code = document.querySelector("#hex_code");
        hex_code.textContent = event.target.value;
    }
}

function copy() {
    const hex_code_copy = document.querySelector("#hex_code").textContent;
    navigator.clipboard.writeText(hex_code_copy);
}