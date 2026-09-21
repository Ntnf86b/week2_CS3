const originalText = "Hover over an image below to display here.";
const originalBackground = "";

const thumbs = document.querySelectorAll(".thumb");

const imageBox = document.getElementById("image");
const undoBtn = document.getElementById("undoBtn");

thumbs.forEach(function (thumb) {
  thumb.addEventListener("mouseover", update);
});

undoBtn.addEventListener("click", undo);

function update(event) {
  console.log("update() triggered by:", event.target.id);

  const previewPic = event.target;

  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  imageBox.textContent = previewPic.alt;

  imageBox.style.backgroundImage = "url('" + previewPic.src + "')";
  imageBox.classList.add("has-image");

  console.log("image text is now:", imageBox.textContent);
  console.log("image background is now:", imageBox.style.backgroundImage);
}

function undo() {
  imageBox.style.backgroundImage = "url('')";

  imageBox.textContent = originalText;

  imageBox.classList.remove("has-image");

  console.log("Gallery reset to original state.");
}