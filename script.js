//MAIN VARIABLES
const color_picker = document.getElementById("chosen_color");
const color_range = document.getElementById("color_palette");
const hex_code = document.getElementById("hex_code");
const input_range = document.getElementById("color_range");

//START THE COLOR PICKER FROM BLACK (#0000) AND 0, 0
var chosen_color = "#000000";
var clr_range = 0;
var input_range = 0;

//EVENTS
color_picker.addEventListener("input", updateColor());
color_range.addEventListener("input", updateColorSlider());

//FUNCTION TO UPDATE THE COLOR AND RELATED ELEMENTS
function updateColor() {
    chosen_color = color_picker.value;
    color_range.style.backgroundColor = chosen_color;
    hex_code.textContent = chosen_color;
}

//FUNCTION TO UPDATE THE COLOR RANGE AND COLOR_PICKER VALUE
function updateColorSlider() {
    input_range = color_range.value;
    clr_range = Math.floor(input_range * 2.55); //CONVERTING THE RANGE (0-255) TO COLOR VALUE
    chosen_color = `rgb(${clr_range}, ${clr_range}, ${clr_range})`;
    color_picker.value = chosen_color;
    color_range.style.backgroundColor = chosen_color;
    hex_code.textContent = chosen_color;
}