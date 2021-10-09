// Author Information
    // Team Name: AntEaters
        // Clemente Solorio : clem@csu.fullerton.edu
        // Farnam Lname : email
        // Ramon Lname : email

//TODO: Header information (author, description)

// File Information
    // File Name: cs-sketch.js
    /*
        This file contains etc etc
    */

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:64, hgt:48 }; // JS Global var, w canvas size info.

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height); // Make a P5 canvas.
    draw_grid(10, 50, 'white', 'yellow');
}

// Callback to get Input-box data.
function retrieve_input()
{
    var stringInput = document.getElementById("sortInput").value; // Retrieve the inputted string.

    // Display an error message and exit func if no msg.
    var error = document.getElementById("msgError");
    if (stringInput.length == 0) {
        error.textContent = "Please enter a message.";
        error.style.color = "red";
        return; // exit function
    } else {error.textContent = "";} // get rid of text if msg fixed

    console.log("Inputted String: " + stringInput);
    stringInput = format(stringInput); // pad or truncate string as needed
    console.log("Formatted String: " + stringInput);
}

// Function to pad or truncate the string as needed.
function format(msg) {
    if (msg.length == 16) return;
    
    if (msg.length > 16) {return (msg.substring(0,16));} // return only the first 16 characters if longer.
    
    if (msg.length < 16) {
        return ((msg + "000000000000000").substring(0,16));
    }
}