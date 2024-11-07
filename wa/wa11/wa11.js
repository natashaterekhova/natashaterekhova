const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.JPG','pic3.JPG', 'pic4.jpg', 'pic5.JPG'];

/* Declaring the alternative text for each image file */

const alt = {
    'pic1.jpg' : 'Ben the cat sleeping peacefully while it is snowing',
    'pic2.jpg' : 'Ben the cat on a window sill',
    'pic3.jpg' : 'The beans of Ben the cat',
    'pic4.jpg' : 'Ben the cat in a box',
    'pic5.jpg' : 'Ben the cat upclose'
  }

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class')
    if (btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else if (btnClass === "light"){
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}
)