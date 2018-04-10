/* Defining grids for Version 2.0 - change variables to cons and use let */
/* Defining grids for Version 1.0 - default value is 10 min and 250 max for width and height */

var gridColor = document.getElementById('colorPicker');
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWeight');
var gridtable = document.getElementById('pixelCanvas');
  
/* Function - makeGrid() */ 

document.addEventListener('submit',function makeGrid(e){
/* prevent browser auto reload */ 
e.preventDefault();
gridtable.innerHTML = '';
    
function clickable(gridCell) {
  gridCell.style.background = gridColor.value;
}

/* Function - setup for loop for adding new cells and rows for grid*/     
    
    for(var h=1;h<=gridHeight.value;h++){
    var row=document.createElement('tr');
    for(var w=1;w<=gridWidth.value;w++){
    var cell=document.createElement('td');
    cell.onclick=function () {
            clickable(this);
        };
/* adding new cell */
    row.append(cell);

      }
/* adding new row into table to make grid */
    gridtable.append(row);
  }
  makeGrid();
    
});
