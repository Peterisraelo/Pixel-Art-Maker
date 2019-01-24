
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width= document.getElementById("inputWidth");
var sizepicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker").value;

sizepicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();

}

function fillcell(){
    cell.style.backgroundColor= color;
}

function makeGrid(){
    for(let r=0;r<height.value;r++){
        const row=canvas.insertRow(r);
        for(let c=0; c<width.value;c++){
            const cell= row.insertCell(c);
            // cell.addEventlistener("click", fillcell);
        }
    }
}
