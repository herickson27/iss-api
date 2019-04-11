Click: 
    /*Get images from API
        Get value of text box that has been submitted
        put the value into reddit url
        fetch the reddit url
        .then promise data json
        .then promise do something with the data
    */
var searchTerm; 
var handle = null;
var imgElement;
var textBox;

document.addEventListener("DOMcontentloader", function(){ //this is to grab the information on HTML. We know know everything from the HTML page is loaded. it is also evident in the script tag on HTML. 
textBox = document.getElementById("searchterm");
imgElement = document.querySelector(img);

document.getElementsByTagName('button')[0].addEventListener('click', function(e) {
        searchTerm = textBox.value;
        var url = 'https://www.reddit.com/search.json?q=" + searchTerm + "nsfw:no';
//this is specifically to grab the infomation from the Button. THe zero is identifying the array of information. We only have one element so zero is all that is needed. It is an array of one button, and then add an event listener for the CLICK that will submit the value from the text box. 
// var searchTerm = '';
// document.getElementById('submit').addEventListener('click', function(e) {
//     searchTerm = document.getElementById("searchBox").value
// });
fetch(url) //fetch from this link
    .then(function(data){ //take that object and THEN return object via json
    return data.json(); //get the object from the data
})
.then(function(json){ //you need to go further into the object to get the url
    var images = [];
    var imageCounter = 0;
    document.querySelector("img").src = json.data.children[0].data.url
    json.data.children.forEach(function(item){
        console.log(item.data.url);
        images.push(item.data.url); //push the found urls one at a time into the pics empty array (so the loop will continue)
    
    })
        images = images.filter(function(images){
            if (images.includes('jpeg') || images.includes('jpg') || images.includes('png') {
                return true;
            } else {
                return false;
            }
            })
            handle = setInterval(function(){
                imgElement.src = images[imageCounter];
                imageCounter++;
                    if (imageCounter === images.length){
                    imageCounter = 0;
                    }
            }, 1000);
        })
    })
})