var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width= document.getElementById("inputWidth");
var sizepicker = document.getElementById("sizePicker");

sizepicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
 

}

var r=0;
var c=0;
var row;
var cell;

function makeGrid(){
    while(r<(height.value)){
        row= canvas.insertRow(r);
        while(c<(width.value)){
        cell = row.insertCell(c);
            c++;
        }
        r++;
    }
}

