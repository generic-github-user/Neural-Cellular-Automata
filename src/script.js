var cells = [];
for (var i = 0; i < 50; i++) {
      var row = [];
      for (var j = 0; j < 50; j++) {
            row.push(Math.random());
      }
      cells.push(row);
}

const predict = function(x, y) {

}

var last_state = JSON.parse(JSON.stringify(cells));
for (var i = 0; i < cells.length; i++) {
      for (var j = 0; j < cells[i].length; j++) {
            cells[i][j] = predict(j, i);
      }
}