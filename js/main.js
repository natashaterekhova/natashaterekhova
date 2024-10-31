const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 32 fahrenheit outside, so :insertx: decided to go on an adventure. When they got to :inserty:, they stood for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx:'s jacket weighed 300 pounds, and no wonder they had a bad time.";
let insertX = ["Harry Styles","Chappell Roan","Chris Trepidation"];
let insertY = ["South Carolina","Madison, Wisconsin","a small house in the suburbs of LA"];
let insertZ = ["suddenly collapsed", "flew away", "curled up into a ball"];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + " stone";
    const temperature =  Math.round((94-32)*5/9) + " centigrade";
    newStory = newStory.replaceAll("32 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}