function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "/Images/bulb-off.png";
  } else {
    image.src = "/Images/bulb-on.png";
  }
}