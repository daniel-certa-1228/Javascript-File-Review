"use strict";
console.log("main.js");

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
                // console.log(splitText);
                resolve(splitText);
            }
        };
    });
};

function output (input_array, target_div) {
    target_div.innerHTML = "";
    input_array.forEach((line) => {
        console.log(line);
        target_div.innerHTML += `${line}\n`;
    });
};

let sonnetDiv = document.getElementById("sonnet");

function doIt() {
    loader()
    .then((text_array) => {
        console.log(text_array);
        return(text_array)
    })
    .then((the_text) => {
        the_text.forEach(function(line) {
            sonnetDiv.innerHTML += `${line}<br>`;
        })
    })
}
doIt();

// TEXT FILE 2



