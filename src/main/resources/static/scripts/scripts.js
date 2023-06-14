const divElements = document.querySelectorAll(".student-rectangle");

divElements.forEach((div) => {
  const studentHeight = div.dataset.height;
  const studentWeight = div.dataset.weight;

  div.style.width = studentWeight + "px";
  div.style.height = studentHeight + "px";

  const randomColor = generateRandomColor();
  div.style.backgroundColor = randomColor;
});

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
