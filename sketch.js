const container = document.querySelector(".container");
let numOfDivs = 64;
for (i = 0; i < numOfDivs; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  const boxContent = (box.textContent = `box${i}`);
  container.appendChild(box);

  box.addEventListener("mouseover", (e) => {
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
}

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const lala = input.value;
  console.log(lala);
});
