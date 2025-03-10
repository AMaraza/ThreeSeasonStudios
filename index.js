const imageButton = document.getElementById("next");
const currentImage = document.getElementById("currentimage");

let numImages = 3;
let currentImageNum = 1;

function nextImage(){
    switch (currentImageNum){
        case 1:
            currentImage.src = "images/tempimages/2.jpg";
            currentImageNum = 2;
            break;
        case 2:
            currentImage.src = "images/tempimages/3.jpg";
            currentImageNum = 3;
            break;
        case 3:
            currentImage.src = "images/tempimages/1.png";
            currentImageNum = 1;
            break;
    }
}