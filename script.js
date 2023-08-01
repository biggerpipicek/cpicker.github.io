//MAIN VARIABLES
var color_picker = document.getElementById("colorPicker");
var color_palette = document.getElementById("colorPalette");
var hex_code = document.getElementById("hexCode");
var color_slider = document.getElementById("colorSlider");

//START THE COLOR PICKER FROM BLACK (#0000) AND 0, 0
var chosen_color = "#000000";
var color_range = 0;
var input_range = 0;

//EVENTS
color_picker.addEventListener("input", updateColor);
color_slider.addEventListener("input", updateColorSlider);

//FUNCTION TO UPDATE THE COLOR AND RELATED ELEMENTS
function updateColor() {
    chosen_color = color_picker.value;
    color_palette.style.backgroundColor = chosen_color;
    hex_code.textContent = chosen_color;
}

//FUNCTION TO UPDATE THE COLOR RANGE AND COLOR_PICKER VALUE
function updateColorSlider() {
    inp_range = color_slider.value;
    color_range = Math.floor(inp_range * 2.55); //CONVERTING THE RANGE (0-255) TO COLOR VALUE
    chosen_color = `rgb(${color_range}, ${color_range}, ${color_range})`;
    color_picker.value = chosen_color;
    color_palette.style.backgroundColor = chosen_color;
    hex_code.textContent = chosen_color;
}