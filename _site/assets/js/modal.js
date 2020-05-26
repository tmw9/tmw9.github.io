// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("idmodal");
var captionText = document.getElementById("caption");

function gettingBored(image) {
    // var image = document.getElementById(imageId);
    console.log(image);
    console.log(modal);
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
  
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
})