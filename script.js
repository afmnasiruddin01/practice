document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changeColorBtn");
  const target = document.getElementById("colorBox");

  if (button && target) {
    button.addEventListener("click", function () {
      // Generate a random color
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      target.style.backgroundColor = randomColor;
    });
  }
});
