const container = document.querySelector("#container");
const rowCount = columnCount = 16;
const totalNumberOfSquare = rowCount*columnCount;
const squareHeight = squareWidth = container.clientWidth/16;

for(let i=1; i<=totalNumberOfSquare; i++){
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.cssText= `
    width:${squareWidth}px;
    height:${squareHeight}px;
  `;

  //Add Event-listener
  square.addEventListener("mouseover", () =>{
    let currentOpacity = parseFloat(window.getComputedStyle(square).opacity);
    if (currentOpacity>0) {
      //Ensures minimum value is always 0
      currentOpacity = Math.max(0, currentOpacity-0.1);
      square.style.opacity = currentOpacity;
    }
  });
  container.appendChild(square);
}