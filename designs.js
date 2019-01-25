var canvas = document.getElementById("pixelCanvas");

var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

var sizepicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

sizepicker.onsubmit = function(event) {
  event.preventDefault();
  makeGrid();
  fillsquare();
};

function makeGrid() {
  // this sort of empty outs the grid everytime so you're not adding to the grid but creating a new one.
  let grid = '';

  // Nested loops to create individual boxes
  for (let r = 0; r < height.value; r++) {
    // for every height value add a new row.
    grid += `<tr>`
    // const row = canvas.insertRow(r);
    
    // For every row check for the width value and create cells.
    for (let c = 0; c < width.value; c++) {
      grid += `<td></td>`
      // const cell = row.insertCell(c);
      // cell.addEventlistener("click", fillcell);
    }

    // close the row after adding the required cells
    grid += `</tr>`
  }

  // create grid: The grid we have add it to the canvas container.
  canvas.innerHTML = grid;

  const cells = document.getElementsByTagName("td");
  // cells is a HTML Collection which is an array of <td>
  console.log(cells);
  
  // since cells is an array of <td>'s we need let's loop through it an add event listeners to every single one.
  for (let cell of cells){
    cell.onclick= function(){
      cell.style.backgroundColor= color.value;
    }
  }
}

