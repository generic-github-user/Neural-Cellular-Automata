// Map one range of numbers to another, given an input value and the two ranges
// https://stackoverflow.com/a/23202637
const map = function(num, in_min, in_max, out_min, out_max) {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var cells = [];
for (var i = 0; i < resolution.y; i++) {
      var row = [];
      for (var j = 0; j < resolution.x; j++) {
            row.push(Math.random());
      }
      cells.push(row);
}

const render = function(cells) {
      for (var i = 0; i < cells.length; i++) {
            for (var j = 0; j < cells[i].length; j++) {
                  if (range) {
                        // https://stackoverflow.com/a/39342975
                        var minRow = cells.map(function(row) {
                              return Math.min.apply(Math, row);
                        });
                        var maxRow = cells.map(function(row) {
                              return Math.max.apply(Math, row);
                        });
                        // Find minimum and maximum values of cells for range mapping
                        var min = Math.min(...minRow);
                        var max = Math.max(...maxRow);

                        var hue = map(cells[i][j], min, max, 0, 100);
                  } else {
                        var hue = cells[i][j] * 100 + 200;
                  }

                  ctx.fillStyle = "hsla(" + hue + ", 100%, 50%, 1)";
                  ctx.fillRect(j * cell_width, i * cell_height, cell_width, cell_height);
            }
      }
}

var nc = neighbor_cells;
var bs = block_size;
const sub = tf.scalar(0.5);
const w1 = tf.randomUniform([nc, nc]).sub(sub);
const w2 = tf.randomUniform([nc, 1]).sub(sub);
const predict = function(cellset, x, y) {
      var inputs = [];
      for (var i = 0; i < bs; i++) {
            for (var j = 0; j < bs; j++) {
                  var location = {
                        "x": x + j - Math.floor(bs / 2),
                        "y": y + i - Math.floor(bs / 2)
                  };
                  if (location.x < 0 || location.x >= cellset[0].length) {
                        location.x = 0;
                  }
                  if (location.y < 0 || location.y >= cellset.length) {
                        location.y = 0;
                  }
                  var cell = cellset[location.y][location.x];
                  if (cell == undefined) {
                        cell = 0;
                  }
                  inputs.push(cell);
            }
      }
      var output = tf.tensor2d(inputs, [1, nc]).matMul(w2);

      return output.dataSync()[0];
}

const update = function() {
      var last_state = JSON.parse(JSON.stringify(cells));
      for (var i = 0; i < cells.length; i++) {
            for (var j = 0; j < cells[i].length; j++) {
                  cells[i][j] = predict(last_state, j, i);
            }
      }
      render(cells);
}

setInterval(update, 1000);