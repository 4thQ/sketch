const container = document.querySelector(".container");
let numOfDivs = 225;

for (i = 1; i <= numOfDivs; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  //   const boxContent = (box.textContent = `box${i}`);
  container.appendChild(box);

  const width = 100 / Math.sqrt(numOfDivs);
  const height = 100 / Math.sqrt(numOfDivs);
  console.log("", width, height);
  box.style.width = `${width}%`;
  box.style.height = `${height}%`;
  box.style.borderColor = "black";
  box.style.border = "solid";
  box.style.borderWidth = "2px";
  box.style.boxSizing = "border-box";
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
  const input1 = input.value;

  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  numOfDivs = input1 * input1;

  for (i = 1; i <= numOfDivs; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    //   const boxContent = (box.textContent = `box${i}`);
    container.appendChild(box);

    const width = 100 / Math.sqrt(numOfDivs);
    const height = 100 / Math.sqrt(numOfDivs);
    console.log("", width, height);
    box.style.width = `${width}%`;
    box.style.height = `${height}%`;
    box.style.borderColor = "black";
    box.style.border = "solid";
    box.style.borderWidth = "2px";
    box.style.boxSizing = "border-box";
    box.addEventListener("mouseover", (e) => {
      let r = Math.floor(Math.random() * 254);
      let g = Math.floor(Math.random() * 254);
      let b = Math.floor(Math.random() * 254);

      e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  }
});
