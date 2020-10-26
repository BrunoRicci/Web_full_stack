'use strict'




// h.style.borderRadius = "5px";
// h.style.border = "solid black 2px";
// h.style.opacity = "75%";

var all_divs = document.getElementsByTagName("div");
console.log("all divs:", all_divs);

var p = document.createElement("p");
p.append(document.createTextNode("hello"));


var box = document.getElementById("mybox");
console.log(box);

/* 
for (let value in all_divs) {
    // debugger;
    console.log("values",all_divs[value]);
    
    var p = document.createElement("p");
    var txt = document.createTextNode(all_divs[value]);       //Put current value of the array.
    console.log(typeof(txt));
    p.appendChild(txt);
    
    // console.log(document.querySelector("#mybox").appendChild(p));
    
} */