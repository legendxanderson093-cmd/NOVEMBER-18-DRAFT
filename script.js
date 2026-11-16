const openButton = 
document.getElementById("openLetter");
const envelope =
document.getElementById("envelope");
const instruction =
document.getElementById("instruction");
const hiddenMessage =
document.getElementById("hiddenMessage");
const finalLetter =
document.getElementById("finalLetter");

openButton.addEventListener("click", function(){

    envelope.classList.add("opened");

    instruction.style.display = "none";

    hiddenMessage.classList.add("show");

    setTimeout(function(){
        finalLetter.classList.add("show");
    },1500);

});

//STAR ROOM

const exploreStars =
document.getElementById("exploreStars");
const starRoom =
document.getElementById("starRoom");

const stars =
document.querySelectorAll(".star");
const starMessage =
document.getElementById("starMessage");

//OPEN STAR ROOM

if(exploreStars && starRoom) {

    exploreStars.addEventListener("click", function(){

        starRoom.classList.add("show");

        starRoom.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    });

} else {
    console.error("Explore button or star room is missing!");
}

//CLICKABLE STARS

stars.forEach(function(star) {

    star.addEventListener("click", function() {

        starMessage.textContent=
    star.dataset.message;

    });

});

