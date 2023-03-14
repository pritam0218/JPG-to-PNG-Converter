const fileInput = document.getElementById("fileInput");
const convertButton = document.getElementById("convertButton");
const canvas = document.getElementById("canvas");
const downloadLink = document.getElementById("downloadLink");

convertButton.addEventListener("click", function() {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.style.display = "inline";
      }, "image/png");
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});