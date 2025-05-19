const container = document.querySelector("#container");
let squarePerSideCount = 16;
let totalNumberOfSquare = squarePerSideCount ** 2;

function createNewGrid(squarePerSideCount){
  let squareHeight = container.clientHeight/squarePerSideCount;
  let squareWidth = container.clientWidth/squarePerSideCount;

  //Create Squares
  totalNumberOfSquare = squarePerSideCount**2;
  for(let i=1; i<=totalNumberOfSquare; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText= `
      width:${squareWidth}px;
      height:${squareHeight}px;
    `;

    //Add Hover Effects
    square.addEventListener("mouseover", () =>{
      //Set random RGB Value for the square
      square.style.backgroundColor = getRandomRgbValue();
      let currentOpacity = parseFloat(window.getComputedStyle(square).opacity);
      if (currentOpacity>0) {
        //Ensures minimum value is always 0
        currentOpacity = Math.max(0, currentOpacity-0.1);
        square.style.opacity = currentOpacity;
      }
    });
    container.appendChild(square);
  }
}

createNewGrid(squarePerSideCount);

const gridSizeBtn = document.querySelector("#grid-size-btn");

//Event listener to create new grid
gridSizeBtn.addEventListener("click", () => {
  let message = "";
  while(true){
    squarePerSideCount = promptUser(message);
    if(squarePerSideCount>0 && squarePerSideCount<=100){
      container.innerHTML = "";
      createNewGrid(squarePerSideCount);
      break;
    }
    else {
      message = "Invalid Input! Please try again. ";
    }
  }
});

//Function to prompt the user for the number of squares per side
function promptUser(message){
  return parseInt(prompt(message + "Enter the number of squares in a side for the new grid[1-100]: "));
}

function getRandomRgbValue(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}