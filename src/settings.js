var resolution = {
      "x": 20,
      "y": 20
};
var range = true;
var block_size = 3;
var neighbor_cells = block_size ** 2;
var ranges = {
      "weights": [-1, 1],
      "biases": [-1, 1]
};
var values = "continuous";
var enable_limits = false;
var limits = [-10, 10];

var cell_width = canvas.width / resolution.x;
var cell_height = canvas.height / resolution.y;