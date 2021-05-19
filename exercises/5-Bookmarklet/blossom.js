///////////~~~~~~~~~BLOSSOM BOOKMARKLET! Place this code in your Chrome Brower's Console and fire!~~~~~~~~~~~~~~~~~~/////////////


javascript:(function(){

var text = document.getElementsByTagName("div");
for (var x = 0; x < text.length; x++) {
text[x].style.color = "mediumvioletred";
}

var links = document.getElementsByTagName("a");
for (var x = 0; x < links.length; x++) {
links[x].style.color = "green";
}

var new_images = [
"https://media.giphy.com/media/PgjJoFXxnr8wiiqzNt/giphy.gif",
"https://media.giphy.com/media/R6erl81EkjxGCmimsv/giphy.gif",
"https://media.giphy.com/media/1tOuimUZbIeS4/giphy.gif",
"https://media.giphy.com/media/zTQQPJXn1j8Jy/giphy.gif",
"https://media.giphy.com/media/hq2LQP1nPEBj2/giphy.gif",
"https://media.giphy.com/media/6g9fN5IYV9Oc8/giphy.gif",
"https://media.giphy.com/media/WytFoyATzwrqs7dEIt/giphy.gif"
];

var images = document.getElementsByTagName("img");

for (var x = 0; x < images.length; x++) {
	var random_number = Math.floor(Math.random() * new_images.length);
	var updated_images = new_images[random_number];
    images[x].setAttribute("srcset", updated_images);
};

var buzzword = document.body.innerHTML;

var blossom = buzzword.replace(/Featured/g, "Blossoming");

document.body.InnerHTML = blossom;

alert("Buzz Buzz~");

})();
