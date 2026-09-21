const originalText = "Hover over an image below to display here.";
const originalBackground = "";

const imageBox = document.getElementById("image");
const undoBtn = document.getElementById("undoBtn");

const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(function (thumb) {
  thumb.addEventListener("mouseover", update);
  thumb.addEventListener("mouseleave", undo);
  thumb.addEventListener("focus", update);
  thumb.addEventListener("blur", undo);
});

undoBtn.addEventListener("click", undo);

function update(event) {
  console.log("update() triggered by event:", event.type, "on element:", event.target.id);

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

function addTabFocus() {
  console.log("onload event triggered: Adding tabindex attributes to images.");

  const allThumbs = document.querySelectorAll(".thumb");

  // Vòng lặp for duyệt qua từng ảnh để thêm tabindex
  for (let i = 0; i < allThumbs.length; i++) {
    allThumbs[i].setAttribute("tabindex", "0");
    console.log(`Added tabindex="0" to element ID: ${allThumbs[i].id}`);
  }
}