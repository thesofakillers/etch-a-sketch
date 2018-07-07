function changeColour(object, colourMode, darken){
  object.style.backgroundColor = "black";
  console.log("colourMode = " +colourMode);
  console.log("darken = " + darken);
  console.log("///")
}


function start(){
  //clears the work area
  var cells = document.getElementsByClassName('gridCell');
  while(cells[0]) {
      cells[0].parentNode.removeChild(cells[0]);
  }

  //fills the work area
  var size = prompt("Enter the size N of the N x N grid you wish to create: ");
  var sketchArea = document.querySelector("div.sketchArea");
  var cellWidth = 100/size
  var gridCell;
  for (i = 0; i < (size*size); i++){
    gridCell = document.createElement('div');
    gridCell.setAttribute('class', 'gridCell');
    gridCell.style.width = cellWidth.toString()+"%";
    gridCell.style.height = cellWidth.toString()+"%";
    sketchArea.appendChild(gridCell)
  }

  //initiating parameters to pass to changeColour function
  var colourMode = false; //initiating as monochrome
  var darken = false; //initating with no darkening

  //listens for "monochrome" button clicks
  const monochromeButton = document.querySelector("button#Monochrome");
  monochromeButton.addEventListener("click", function(){
    colourMode = false;
  });

  //listens for "random" button clicks
  const randomButton = document.querySelector("button#Random");
  randomButton.addEventListener("click", function(){
    colourMode = true;
  });

  //listens for "darken" button clicks
  const darkenButton = document.querySelector("button#Darken");
  darkenButton.addEventListener("click", function(){
    if (darken == false){
      darken = true;
    } else {
      darken = false;
    }
  });

  //listens for cell mouseover
  const gridCells = document.querySelectorAll("div.gridCell")
  gridCells.forEach(cell => cell.addEventListener('mouseover', function(){
    changeColour(cell, colourMode, darken);
  }));
}

//listens for reset button clicks
const resetButton = document.querySelector("button#Reset");
resetButton.addEventListener("click", start);
