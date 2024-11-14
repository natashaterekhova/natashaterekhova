let myData = {};

function fetchData(){
    randomNum = Math.floor(Math.random() * 3000) + 1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${randomNum}/info.0.json`)

    .then(res => {
        if (res.ok){
            return res.json();
        }else{
            console.log(res);
        }  
    })

    .then(res => {
        myData = res;
        console.log(myData);

        //title
        document.getElementById("title").innerHTML = myData.title;

        //displaying the comic
        document.getElementById("comic").src = myData.img;

        //alt text
        document.getElementById("comic").alt = myData.alt;

        //date
        document.getElementById("date").innerHTML = myData.month + "/" + myData.day + "/" + myData.year;
    })

    .catch(error => {console.log(error), alert("error")})

}

document.getElementById("generate").addEventListener("click", e => {fetchData()});