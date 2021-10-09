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
    "Insertion": "#AC92EB",
    "Selection": "#6CA2EA",
    "Poresort": "#B5D33D",
    "Mergesort": "#FFCE54",
    "Quicksort": "#ED5564"
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
    // Insertion Sort header
    let title = " Insertion Sort ";
    stroke(0);
    fill(colors.Insertion); // insertion sort purple
    textSize(17);

    for (i in title)
    {
        text(title[i], (6+(i*20)), 16);
    }

    // Selection Sort header
    title = " Selection Sort ";
    fill(colors.Selection); // Selection sort blue
    
    for (i in title)
    {
        text(title[i], (366+(i*20)), 16);
    }

    // Gold's Poresort header
    title = "Gold's Poresort";
    fill(colors.Poresort); // Poresort green

    for (i in title)
    {
        text(title[i], (723+(i*20)), 16);
    }

    // Mergesort header
    title = "Mergesort";
    fill(colors.Mergesort); // Mergesort yellow

    for (i in title)
    {
        text(title[i], (1083+(i*20)), 16);
    }

    // Quicksort header
    title = "Quicksort";
    fill(colors.Quicksort); // Quicksort red

    for (i in title)
    {
        text(title[i], (1445+(i*20)), 16);
    }
}

function draw_pass(msg, pass, algName)
{
    switch(algName) {
        case "all":
            fill(colors.Insertion);
            for (i in msg)
            {
                text(msg[i], 6+(i*20), 36);
            }

            fill(colors.Selection);
            for (i in msg)
            {
                text(msg[i], (366+(i*20)), 36);
            }

            fill(colors.Poresort);
            for (i in msg)
            {
                text(msg[i], (723+(i*20)), 36);
            }

            fill(colors.Mergesort);
            for (i in msg)
            {
                text(msg[i], (1083+(i*20)), 36);
            }

            fill(colors.Quicksort);
            for (i in msg)
            {
                text(msg[i], (1445+(i*20)), 36);
            }
            break;

        case "insertion":
            fill(colors.Insertion);
            for (i in msg)
            {
                text(msg[i], 6+(i*20), 36+(pass*20));
            }
            break;

        case "selection":
            fill(colors.Selection);
            for (i in msg)
            {
                text(msg[i], (366+(i*20)), 36+(pass*20));
            }
            break;

        case "poresort":
            fill(colors.Poresort);
            for (i in msg)
            {
                text(msg[i], (723+(i*20)), 36+(pass*20));
            }
            break;

        case "mergesort":
            fill(colors.Mergesort);
            for (i in msg)
            {
                text(msg[i], (1083+(i*20)), 36+(pass*20));
            }
            break;

        case "quicksort":
            fill(colors.Quicksort);
            for (i in msg)
            {
                text(msg[i], (1445+(i*20)), 36+(pass*20));
            }
            break;
    }
}
