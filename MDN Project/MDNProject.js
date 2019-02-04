const customName = document.getElementById('customName');
//const customName = document.querySelector('.QSvGEBI');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random()*(array.length))];
}


var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertx = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];

var inserty = ["the soup kitchen",
    "Disneyland",
    "the White House"];

var insertz = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xitem = randomValueFromArray(insertx);
    var yitem = randomValueFromArray(inserty);
    var zitem = randomValueFromArray(insertz);

    newStory = newStory.replace(':insertx:', xitem);
    newStory = newStory.replace(':inserty:', yitem);
    newStory = newStory.replace(':insertz:', zitem);
    newStory = newStory.replace(':insertx:', xitem);

    if(customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        var weight = Math.round(300*0.0714) + ' stone';
        var temperature =  Math.round(((94-32)*5)/9) + ' centigrade';
        
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}