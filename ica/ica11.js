function tellFortune(numChild, partnerName, location, job){
    return("You will be a " + job + " in " + location + " and married to " + partnerName + " with " + numChild + " kids.");
}

document.getElementById("my_para").innerHTML = tellFortune("3", "Steve", "Portugal", "designer") + tellFortune("18", "Caroline", "Denver", "electrician") + tellFortune("0", "Albert", "Virginia", "coder") + calculateDogAge(7);

function calculateDogAge(puppyage){
    dogYear = puppyage*7;
    return("Your dog is " + dogYear + " years old in dog years!");
}


