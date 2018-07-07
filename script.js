function changeColour(object){
  object.style.backgroundColor = "black";
}


function resetSize(){
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

  const gridCells = document.querySelectorAll("div.gridCell")
  gridCells.forEach(cell => cell.addEventListener('mouseover', function(){
    changeColour(cell);
  }));
}

const resetButton = document.querySelector("button#Reset");
resetButton.addEventListener("click", resetSize);
