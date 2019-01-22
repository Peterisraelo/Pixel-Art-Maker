var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width= document.getElementById("inputWidth");
var sizepicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

sizepicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
}




function  makeGrid(){
    let r=0;
    while(r<height.value){
        const row=canvas.insertRow(r);
        r++;
        let c=0;
        while(c<width.value){
            const cell= row.insertCell(c);
            c++;
        }
    }
}

