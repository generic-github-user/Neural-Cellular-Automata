var resolution = {
      "x": 10,
      "y": 10
};
var range = true;
var block_size = 5;
var neighbor_cells = block_size ** 2;

var cell_width = canvas.width / resolution.x;
var cell_height = canvas.height / resolution.y;