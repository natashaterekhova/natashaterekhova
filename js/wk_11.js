hello("Natasha");

function hello(name){
    alert("hello " + name);
}

function even(n){
    if(n%2 ==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(even(20));
console.log(even(1));

let text = ["one", "two", "three"];

function buildText(arr){
    for(let i=0; i<arr.lenght;i++){
        console.log(arr[i]);
        paragraph += arr[i] +" ";
    }
    document.getElementById("my_para").innerHTML = paragraph;
    console.log(paragraph);
}

document.getElementById("button_1").addEventListener("click");

buildText(text);