document.getElementById("head1").addEventListener("click", function(e){
    alert("clicked on h1");
    document.getElementById("p1").style.fontWeight = "bold";
})

document.getElementById("image").addEventListener("mouseenter", function(e){
    document.getElementById("image").src ="/img/chris.jpg";
})

document.getElementById("image").addEventListener("mouseleave", function(e){
    document.getElementById("image").src ="/img/avalanchelogo.jpg";  
})
