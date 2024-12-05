//defining main variables
const subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

//first fetch to find the project based on what was clicked and building the page
fetch('../finalproject.json')
.then(function(response){
    return response.json()
}).then(projects =>{
    console.log(projects);
    proj = projects;
    findProjectinJSON(projects);
}).catch(err =>{
    console.log(`error ${err}`);
})

function findProjectinJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if (projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i])
        }else{
            continue;
        }
    }
}

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<div><h1>${project.name}</h1><p>${project.subtitle}</p></div>`
    document.getElementById("description").innerHTML += `<p>${project.description}</p>`
}   

//second fetch, taking images to make carousel with function
fetch('../finalproject.json')
.then(function(response){
    return response.json()
    }).then(function(data) {
        console.log(data); 
        for(let i=0; i<data.projects.length; i++){
            if (data.projects[i].subdomain == subdomain){
                const images = data.projects[i].progimages; 
                funcCarousel(images); 
                break;
            }else{
                continue;
            }}
        })

function funcCarousel(images){
        for (const image of images) {
            const newImage = document.createElement('img');
            newImage.setAttribute('src', `../images/${image}`);
            thumbBar.appendChild(newImage);
            newImage.addEventListener('click', e =>{
                displayedImage.src = e.target.src;
            })
        }
    }