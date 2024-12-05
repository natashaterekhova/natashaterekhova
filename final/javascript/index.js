let proj;

//fetch to start building the project on the main page
fetch('finalproject.json')
.then(function(response){
    return response.json()
}).then(projects =>{
    console.log(projects);
    proj = projects;
    parseData(projects);
}).catch(err =>{
    console.log(`error ${err}`);
})

//function that sets up the main HTML of each project based on JSON data
function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `
        <a href="projects/${data.projects[i].subdomain}.html">
        <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src= images/${data.projects[i].mainimg}></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        </div></div>
        </a>`;
    }
}

//button code:
for(button of document.querySelectorAll("#buttons button")){
    button.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if (button == "reset"){
        for(let i=0;i<proj.projects.length;i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    } else if (button != undefined){
        for(let i=0; i<proj.projects.length; i++){
            if (proj.projects[i].category.includes(button)==true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }else{
        console.log("error, button value is undefined");
    }
}