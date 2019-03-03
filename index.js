const recluseFile = require('./data.js')

//write a function that converts 
// - **bold***italic*%keyword%
// - %**bold keyword**%%*italic keyword*%
// - %%

// I AM A CAT.
// As yet I have no name.  

//1. write function that process paragraph
//console.log(a.split("\n\n")); 
// var b = 'ayam'
// console.log(b.charAt[0]); 

var paragraphs = recluseFile().split("\n\n");
console.log("Found ", paragraphs.length, " paragraphs.");

function processParagraph(paragraph) {
    var header = 0;
    while (paragraph.charAt(0) == "%") {
    paragraph = paragraph.slice(1);
    header++;
    }

    return {type: (header == 0 ? "p" : "h" + header),
            content: paragraph};
}

//foreach function that 
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
    action(array[i]);
}


function map(func, array) {
    var result = [];
    forEach(array, function (element) {
    result.push(func(element));
    });
    return result;
}


var paragraphs = map(processParagraph,
    recluseFile().split("\n\n"));

console.log(paragraphs);