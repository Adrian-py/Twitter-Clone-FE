const tweetsOption = document.querySelector(".tweets-option"), tweetsAndRepliesOption = document.querySelector(".tweets-and-replies-option"), mediaOption = document.querySelector(".media-option"), likesOption = document.querySelector(".likes-option");

function turnDim(){
    tweetsOption.style.color = "rgba(0,0,0,0.5)";
    tweetsAndRepliesOption.style.color = "rgba(0,0,0,0.5)";
    mediaOption.style.color = "rgba(0,0,0,0.5)";
    likesOption.style.color = "rgba(0,0,0,0.5)";
}
turnDim();
tweetsOption.style.color = "rgba(0,0,0,1)";

const selector = document.querySelector(".selector");
tweetsOption.addEventListener("click", ()=>{
    selector.style.transform = "translateY(0%)";
    turnDim();
    tweetsOption.style.color = "rgba(0,0,0,1)";
});

tweetsAndRepliesOption.addEventListener("click", ()=>{
    selector.style.transform = "translateY(100%)";
    turnDim();
    tweetsAndRepliesOption.style.color = "rgba(0,0,0,1)";
});

mediaOption.addEventListener("click", ()=>{
    selector.style.transform = "translateY(200%)";
    turnDim();
    mediaOption.style.color = "rgba(0,0,0,1)";
});

likesOption.addEventListener("click", ()=>{
    selector.style.transform = "translateY(300%)";
    turnDim();
    likesOption.style.color = "rgba(0,0,0,1)";
});