var resolution = {
      "x": 10,
      "y": 10
};
var range = false;
var block_size = 3;
var neighbor_cells = block_size ** 2;

var cell_width = canvas.width / resolution.x;
var cell_height = canvas.height / resolution.y;