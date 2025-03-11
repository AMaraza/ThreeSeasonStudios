const imageButton = document.getElementById("next");
const currentImage = document.getElementById("currentimage");

let numImages = 3;
let currentImageNum = 1;

function nextImage(){
    switch (currentImageNum){
        case 1:
            currentImage.src = "images/tempimages/2.jpg";
            currentImageNum = 2;
            document.getElementById("2").checked = true;
            break;
        case 2:
            currentImage.src = "images/tempimages/3.jpg";
            currentImageNum = 3;
            document.getElementById("3").checked = true;
            break;
        case 3:
            currentImage.src = "images/tempimages/1.png";
            currentImageNum = 1;
            document.getElementById("1").checked = true;
            break;
    }
}

function prevImage(){
    switch (currentImageNum){
        case 1:
            currentImage.src = "images/tempimages/3.jpg";
            currentImageNum = 3;
            document.getElementById("3").checked = true;
            break;
        case 2:
            currentImage.src = "images/tempimages/1.png";
            currentImageNum = 1;
            document.getElementById("1").checked = true;
            break;
        case 3:
            currentImage.src = "images/tempimages/2.jpg";
            currentImageNum = 2;
            document.getElementById("2").checked = true;
            break;
    }
}

function changeImage(){
    if (document.getElementById("1").checked){
        currentImage.src = "images/tempimages/1.png";
        currentImageNum = 1;
    }
    else if(document.getElementById("2").checked){
        currentImage.src = "images/tempimages/2.jpg";
        currentImageNum = 2;
    }
    else if(document.getElementById("3")){
        currentImage.src = "images/tempimages/3.jpg";
        currentImageNum = 3;
    }
}



setInterval(nextImage, 5000);