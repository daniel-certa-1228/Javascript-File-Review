"use strict";
console.log("main_2.js");

function numLoader() {
    return new Promise((resolve, reject) => {
        let textfile_2 = new XMLHttpRequest;
        textfile_2.open("GET", "test_2.txt", true);
        textfile_2.send();
        textfile_2.onreadystatechange = function(){
            if(textfile_2.status == 200 && textfile_2.readyState == 4){
                let testText_2 = textfile_2.responseText;
                let splitText_2 = testText_2.split(/,|\n/).map(Number);
                resolve(splitText_2);
            }
        };
    })
}

function numOutput(target_div, num_array) {
    target_div.innerHTML = "";
    num_array.forEach(element => {
        target_div.innerHTML += `The number ${element}.<br>`;
    });
}

// Output To DOM
let numDiv = document.getElementById("numbers");

function doIt_nums() {
    numLoader()
    .then((result) => {
        return result;
    })
    .then((result) => {
        numOutput(numDiv, result);
    })
}
doIt_nums();
