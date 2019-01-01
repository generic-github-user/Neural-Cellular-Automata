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

const predict = function(x, y) {

}

const update = function() {
      var last_state = JSON.parse(JSON.stringify(cells));
      for (var i = 0; i < cells.length; i++) {
            for (var j = 0; j < cells[i].length; j++) {
                  // cells[i][j] = predict(j, i);
            }
      }
      render(cells);
}

setInterval(update, 1000);