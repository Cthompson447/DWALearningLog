function onMouseOverImage() {
        document.getElementById('gt86image').src = "../media/images/newSupra.jpg";
}

function onMouseOutsideImage() {
        document.getElementById('gt86image').src = "../media/images/gt86.jpg";
}

var imageIndex = 0;
slideShow();

function slideShow() {
    var i;
    var cars = document.getElementsByClassName('cars');

    for(i=0; i < cars.length; i++){
        cars[i].style.display = "none";
    }
    imageIndex ++;
    if(imageIndex > cars.length){
        imageIndex = 1;
    }
    cars[imageIndex -1].style.display = "block";
    setTimeout(slideShow, 3000);
}
