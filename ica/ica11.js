function tellFortune(numChild, partnerName, location, job){
    return("You will be a " + job + " in " + location + " and married to " + partnerName + " with " + numChild + " kids.");
}

console.log(tellFortune("3", "Steve", "Portugal", "designer"));
console.log(tellFortune("18", "Caroline", "Denver", "electrician"));
console.log(tellFortune("0", "Albert", "Virginia", "coder"));

function calculateDogAge(puppyage){
    dogYear = puppyage*7;
    return("Your dog is " + dogYear + " years old in dog years!");
}

console.log(calculateDogAge(7));

