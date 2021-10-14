// Author Information
    // Team Name: AntEaters
        // Clemente Solorio : clem@csu.fullerton.edu
        // Farnam Lname : email
        // Ramon Lname : email

/* 
    This file contains the code for the 5 sort algorithms used in this program.
    This file is loaded inside of index.html and used inside of cs-sketch.js to draw the
    output of the algorithms.
*/

var sorted_string = "";

function mergesort(string)
{
    var N = string.length;
    var mid = Math.floor(N/2);
    if (N > 1) 
    {
        let left_half = string.slice(0, mid); // split the string
        //console.log(`Left Half: ${left_half}`);
        
        let right_half = string.slice(mid, N);
        //console.log(`Right Half: ${right_half}`);
        
        let sorted_left = mergesort(left_half);
        let sorted_right = mergesort(right_half);
        return merge(sorted_left, sorted_right);
    } else { return string;}
}

function merge(stringA, stringB)
{
    console.log("\n\nTHE TWO STRINGS ARE " + stringA + " AND " + stringB);
    var stringOutput = "";

    while(stringA.length && stringB.length)
    {
        console.log("Comparing " + stringA[0] + " and " + stringB[0]);
        if (stringA[0] < stringB[0]) {
            console.log(`${stringA[0]} goes before ${stringB[0]}`);
            stringOutput = stringOutput + stringA[0]; // add the first character of this string to the string.
            stringA = stringA.slice(1); // remove the first character of this string.
            //console.log(`Current StringOutput: ${stringOutput}`);
        } else {
            console.log(`${stringB[0]} goes before ${stringA[0]}`);
            stringOutput = stringOutput + stringB[0]; // add the first character of this string to the string.
            stringB = stringB.slice(1);
            //console.log(`Current StringOutput: ${stringOutput}`);
        }
    }
    
    // if there are any chars left in the strings.
    while(stringA.length) {
        stringOutput = stringOutput + stringA[0]; // add the first character of this string to the string.
        stringA = stringA.slice(1);
        //console.log(`Current StringOutput: ${stringOutput}`);
    }
    
    while(stringB.length) {
        stringOutput = stringOutput + stringB[0]; // add the first character of this string to the string.
        stringB = stringB.slice(1);
        //console.log(`Current StringOutput: ${stringOutput}`);
    }
    console.log("\nCURRENT STRING OUTPUT " + stringOutput);
    return stringOutput;
}

/*
var unsorted_str = "hqeubnltrz";
var sorted_str = mergesort(unsorted_str);
console.log("FINAL SORTED STRING: " + sorted_str);
*/