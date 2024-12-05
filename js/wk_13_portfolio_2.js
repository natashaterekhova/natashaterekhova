let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('/classnotes/project13.json')
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
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`
}