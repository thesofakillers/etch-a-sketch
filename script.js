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
