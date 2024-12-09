//establishing variables for the accordian and slideshow
var acc = document.getElementsByClassName("accordion");
var i;
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));


//for loop for accordion
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//carousel
fetch('finalproject.json')
.then(function(response){
    return response.json()
    }).then(function(data) {
        console.log(data); 
        for(let i=0; i<data.aboutme.length; i++){
            if (data.aboutme[i].subdomain == subdomain){
                const images1 = data.aboutme[i].images;
                funcCarousel(images1); 
                break;
            }else{
                continue;
            }}
        })

function funcCarousel(images){
        for (const image of images) {
            const newImage = document.createElement('img');
            newImage.setAttribute('src', `images/${image}`);
            thumbBar.appendChild(newImage);
            newImage.addEventListener('click', e =>{
                displayedImage.src = e.target.src;
            })
        }
    }