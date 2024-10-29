let my_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!";

//how to interact with the DOM
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked on h1");
    document.getElementById("paragraph").innerHTML = "this is this";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src ="/img/chris.jpg"
})

console.log(document.getElementById("my_head").innerHTML);