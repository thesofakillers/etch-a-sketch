function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function changeColour(object, colourMode, darken){
  if (darken){
    var percentage = object.style.filter.slice(10).replace(/[\(\)\%]+/g,'')
    if (percentage != 0){
      percentage -= 10
      object.style.filter = "brightness("+percentage+"%)"
    }
  } else if (!(colourMode)) {
    object.style.filter = "brightness(0%)";
  }

  if (colourMode){
    object.style.backgroundColor = getRandomColor();
  }
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
    gridCell.style.backgroundColor = "white"
    gridCell.style.filter = "brightness(100%)"
    sketchArea.appendChild(gridCell)
  }

  //getting button objects
  const monochromeButton = document.querySelector("button#Monochrome");
  const randomButton = document.querySelector("button#Random");
  const darkenButton = document.querySelector("button#Darken");

  //initiating parameters to pass to changeColour function
  var colourMode = false; //initiating as monochrome
  monochromeButton.setAttribute('class', 'selected');
  randomButton.classList.remove("selected");
  var darken = false; //initating with no darkening
  darkenButton.classList.remove("selected");

  //listens for "monochrome" button clicks
  monochromeButton.addEventListener("click", function(){
    colourMode = false;
    monochromeButton.setAttribute('class', 'selected');
    randomButton.classList.remove("selected");
  });

  //listens for "random" button clicks
  randomButton.addEventListener("click", function(){
    colourMode = true;
    randomButton.setAttribute('class', 'selected');
    monochromeButton.classList.remove("selected");
  });

  //listens for "darken" button clicks
  darkenButton.addEventListener("click", function(){
    if (darken == false){
      darken = true;
      darkenButton.setAttribute('class', 'selected');
    } else {
      darken = false;
      darkenButton.classList.remove("selected");
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
