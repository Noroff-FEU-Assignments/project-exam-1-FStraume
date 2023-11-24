var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");

function getModal(image) {
  var src = image.src;
  modal.style.display = "block";
  modalImage.innerHTML = ` <img src="${src}"></img>`;

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
