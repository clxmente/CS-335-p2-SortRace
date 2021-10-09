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
var g_canvas = { cell_size:20, wid:88, hgt:50 }; // JS Global var, w canvas size info.
var colors = {
    "Insertion": "#AC92EB", // Purple
    "Selection": "#6CA2EA", // blue
    "Poresort": "#B5D33D",  // green
    "Mergesort": "#FFCE54", // yellow
    "Quicksort": "#ED5564"  // red
};

// five algs; 16 char each, 2 spaces bt algs
// 16 + 2 + 16 + 2 + 16 + 2 + 16 + 2 + 16 = 88

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height); // Make a P5 canvas.
    draw_grid(20, 320, 'white', 'yellow');

    draw_headers(); // draw the headers for each algorithm
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

    draw_pass(stringInput, 0, "all"); // draw the first iteration (inputted string) on all algs

    // this is just a demonstration on how to draw a pass for an alg
    draw_pass(stringInput, 1, "insertion");
    draw_pass(stringInput, 2, "selection");
    draw_pass(stringInput, 3, "poresort");
    draw_pass(stringInput, 4, "mergesort");
    draw_pass(stringInput, 5, "quicksort");
}

// Function to pad or truncate the string as needed.
function format(msg) 
{
    if (msg.length == 16) return msg;
    
    if (msg.length > 16) {return (msg.substring(0,16));} // return only the first 16 characters if longer.
    
    if (msg.length < 16) {
        return ((msg + "000000000000000").substring(0,16));
    }
}

// Functino to draw the title of each algorithm.
function draw_headers() 
{
    stroke(0);
    textSize(17);

    // Insertion Sort header
    alg_header("Insertion Sort", 6, colors.Insertion);

    // Selection Sort header
    alg_header("Selection Sort", 366, colors.Selection);

    // Gold's Poresort header
    alg_header("Gold's Poresort", 723, colors.Poresort);

    // Mergesort header
    alg_header("Mergesort", 1083, colors.Mergesort);

    // Quicksort header
    alg_header("Quicksort", 1445, colors.Quicksort);
}

// Function to draw 1 pass of an algorithm iteration.
function draw_pass(msg, pass, algName)
{
    switch(algName) 
    {
        case "all": // draw the 0th pass for all algorithms (base string)
            alg_pass(msg, 6, pass, "white");

            alg_pass(msg, 366, pass, "white");

            alg_pass(msg, 723, pass, "white");

            alg_pass(msg, 1083, pass, "white");

            alg_pass(msg, 1445, pass, "white");
            break;

        case "insertion":
            alg_pass(msg, 6, pass, colors.Insertion);
            break;

        case "selection":
            alg_pass(msg, 366, pass, colors.Selection);
            break;

        case "poresort":
            alg_pass(msg, 723, pass, colors.Poresort);
            break;

        case "mergesort":
            alg_pass(msg, 1083, pass, colors.Mergesort);
            break;

        case "quicksort":
            alg_pass(msg, 1445, pass, colors.Quicksort);
            break;
    }
}

// Function to draw the header name for an algorithm
function alg_header(algName, x_cord, color)
{
    fill(color);
    for (i in algName)
    {
        text(algName[i], (x_cord+(i*20)), 16);
    }
}

// Function to draw a msg, for an algorithm on a row decided by "pass".
function alg_pass(msg, x_cord, pass, color)
{
    fill(color);
    for (i in msg)
    {
        text(msg[i], (x_cord+(i*20)), 36+(pass*20));
    }
}
