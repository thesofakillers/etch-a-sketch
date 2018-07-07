function getRandomColor () {//taken from stackexchange
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function changeColour(object, colourMode, darken){
  if (darken){
    //gets the percentage of brigtness (from 0 to 100) from the filter style
    var percentage = object.style.filter.slice(10).replace(/[\(\)\%]+/g,'')
    if (percentage != 0){ //if its not already fully black
      percentage -= 10 //darken it by 10%
      object.style.filter = "brightness("+percentage+"%)"
    }
  } else if (!(colourMode)) { //if we're on monochrome
    object.style.filter = "brightness(0%)"; //set to black
  }
  if (colourMode){
    if (!darken){
      object.style.filter = "brightness(100%)"
    }
    object.style.backgroundColor = getRandomColor();
  }
}


function start(){ //what to do when pressing reset button
  //clears the work area
  var cells = document.getElementsByClassName('gridCell');
  while(cells[0]) {
      cells[0].parentNode.removeChild(cells[0]);
  }

  //fills the work area
  var size = prompt("Enter the size N (< ≈ 50) of the N x N grid you wish to create: ");
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
    if (darken == false){//toggles between darken mode
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
