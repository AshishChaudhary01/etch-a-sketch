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
  
  container.appendChild(square);
}