var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Map one range of numbers to another, given an input value and the two ranges
// https://stackoverflow.com/a/23202637
const map = function(num, in_min, in_max, out_min, out_max) {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var cells = [];
for (var i = 0; i < 50; i++) {
      var row = [];
      for (var j = 0; j < 50; j++) {
            row.push(Math.random());
      }
      cells.push(row);
}

const render = function(cells) {
      for (var i = 0; i < cells.length; i++) {
            for (var j = 0; j < cells[i].length; j++) {
                  var cell_width = canvas.width / 50;
                  var cell_height = canvas.height / 50;
                  ctx.fillStyle = "hsla(" + cells[i][j] * 50 + ", 100%, 50%, 1)";
                  ctx.fillRect(j * cell_width, i * cell_height, cell_width, cell_height);
            }
      }
}

const predict = function(x, y) {

}

var last_state = JSON.parse(JSON.stringify(cells));
for (var i = 0; i < cells.length; i++) {
      for (var j = 0; j < cells[i].length; j++) {
            // cells[i][j] = predict(j, i);
      }
}