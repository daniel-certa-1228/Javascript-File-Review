"use strict";
// console.log("main.js");

// TEXT FILE 1
function loader() {
    return new Promise(function(resolve, reject) {
        let textFile = new XMLHttpRequest();
        textFile.open("GET", "test.txt", true);
        textFile.send();
        textFile.onreadystatechange = function(){
            if(textFile.status == 200 && textFile.readyState == 4){
                let testText_1 = textFile.responseText;
                let splitText = testText_1.split("\n");
                resolve(splitText);
            }
        };
    });
};

function output (input_array, target_div) {
    target_div.innerHTML = "";
    input_array.forEach((line) => {
        target_div.innerHTML += `${line}<br>`;
    });
};

//OUTPUT TO DOM
let sonnetDiv = document.getElementById("sonnet");

function doIt() {
    loader()
    .then((text_array) => {
        return(text_array)
    })
    .then((the_text) => {
        output(the_text, sonnetDiv);
    })
}
doIt();
