/* jslint browser */
/* global process */
/* auxiliary varibles */
let board;
let boardContext;
let rows;
let columns;
let img;
let tiles;
let fuzzyTile;
let lastDisplayedTile;
let isPlaying;

/* parameters */
let boardWidth;
let boardHeight;
let tileWidth;
let tileHeight;
let scale;

/* type enum class */
let TILE_TYPE = {
  FUZZY: "fuzzy",
  ADJACENT: "adjacent",
  OTHER: "other"
};

function getPath(name, quality = "LOW") {
  var path = null;
  if (quality == "LOW") {
    path = "resources/img/low_quality/" + name + ".jpg";
  } else {
    path = "resources/img/high_quality/" + name + ".jpg";
  }
  return path
}

/**
 * Restores setup values from configuration page.
 * Initializes Board to play puzzle, inserting image.
 *
 * Shall be called with body' `onload` property.
 * Assign board adjusting to window resize property.
 */
function setUpGame() {
  isPlaying = false;
  rows = sessionStorage.getItem("rowsNumber");
  columns = sessionStorage.getItem("columnsNumber");
  imagePath = sessionStorage.getItem("imagePath");

  img = new Image();
  img.src = imagePath;
  img.addEventListener('load', initializeBoard, false);

  window.onresize = adjustBoard;
}

/**
 * Initializes board by adding boxShadow, border.
 * Publishes access to board and board context.(2d)
 *
 * Shall be called when board source has been set.
 */
function initializeBoard() {
  board = document.getElementById('board');
  boardContext = board.getContext('2d');
  board.style.border = "1px solid black";
  board.style.boxShadow = "0 0 24px rgba(35, 173, 278, 1)";
  adjustBoard();
}

/**
 * If user started game distracting splitting image into tiles,
 * but if user is not playing yet then display image. ()
 *
 */
function setBoard() {
  if (isPlaying) {
    drawTiles()
  } else {
    drawImageOnBoard();
  }
}

/**
 * Responsible for adjusting board to window size.
 *
 * When image size is bigger than window size than scale it to window content.
 * Computes tile measurements.
 */
function adjustBoard() {
  /* scale window */
  let windowWidth = window.innerWidth - 100;
  scale = (img.width > windowWidth) ? windowWidth / img.width : 1;
  board.width = img.width * scale;
  board.height = img.height * scale;
  tileWidth = Math.floor(board.width / columns);
  tileHeight = Math.floor(board.height / rows);
  boardWidth = tileWidth * columns;
  boardHeight = tileHeight * rows;
  board.width = boardWidth;
  board.height = boardHeight;

  /*when board elements are computed setBoard*/
  setBoard();
}

/**
 * Draw image in canvas with special size.
 *
 */
function drawImageOnBoard() {
  boardContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, board.width, board.height);
}


/**
 * Should be connected to a button click or other element/ event.
 * Start game by assign mouse events to a board,
 * shuffling the board, defining them, and drawing.
 */
function play() {
  isPlaying = true;
  lastDisplayedTile = null;
  setTiles();
  distractBoard();
  drawTiles();
  isEnd();
  board.onmousedown = onTileClick;
  board.onmousemove = onTileHover;
  board.onmouseleave = onTileHover;
}

/**
 * Creating 2D array of tiles, [coordinates]
 * declaring fuzzied one ( blurred, blank)
 */
function setTiles() {
  tiles = Array(rows);
  tileIndex = 0;
  for (let i = 0; i < rows; i++) {
    tiles[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      let tile = {};
      tile.targetX = j;
      tile.targetY = i;
      tile.index = tileIndex;
      tiles[i][j] = tile;
      if (i === 0 && j === 0) {
        fuzzyTile = tile;
      }
      tileIndex++;

    }
  }
}

function getInvCount(arr, N) {

  inv_count = 0;
  for (let i = 0; i < N * N - 1; i++) {
    for (let j = i + 1; j < N * N; j++) {
      if (arr[j] && arr[i] && arr[i].index > arr[j].index)
        inv_count++;
    }
  }
  return inv_count;
}

function findXPosition(arr2D, N) {
  for (let i = N - 1; i >= 0; i--)
    for (let j = N - 1; j >= 0; j--)
      if (arr2D[i][j] == 0)
        return N - i;
}

function shuffleArray2D(array) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let k = parseInt((Math.random() * rows) + "");
      let l = parseInt((Math.random() * columns) + "");
      let tmp = array[i][j];
      array[i][j] = array[k][l];
      array[k][l] = tmp;
    }
  }
  if (isSolvable(array)) {
    return array;
  } else {
    return shuffleArray2D(array);
  }
}

function isSolvable(arr2D) {
  arr = [];
  for (var i = 0; i < arr2D.length; i++) {
    arr = arr.concat(arr2D[i]);
  }
  let N = arr.length;

  invCount = getInvCount(arr, N);
  if (N % 1 == 0)
    return !(invCount & 1);

  else {
    pos = findXPosition(arr2D, N);
    if (pos % 1 == 0)
      return !(invCount % 1 == 0);
    else
      return invCount % 1 == 0;
  }
}
/**
 * Responsible for shuffling a board.
 *
 * Shuffling array of tiles byt random swaps.
 * Nextly clearing board and set new content ( shuffled tiles).
 */
function distractBoard() {
  /*shuffle array*/
  tiles = shuffleArray2D(tiles);


  boardContext.clearRect(0, 0, boardWidth, boardHeight);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let tile = tiles[i][j];
      tile.x = j;
      tile.y = i;
    }
  }
  setTilesType();
}


/**
 * Each tile has its type. After shuffling each type need to be
 * reassigned, using this strategy we prevent user from clicking
 * tiles other than adjacent to fuzzy one.
 */
function setTilesType() {
  /**
   * Set adjacent type, but only to tiles inside board.
   * ( bounds check )
   */
  function setAdjacentType() {
    if (y !== rows - 1) {
      tiles[y + 1][x].TILE_TYPE = TILE_TYPE.ADJACENT;
    }
    if (y !== 0) {
      tiles[y - 1][x].TILE_TYPE = TILE_TYPE.ADJACENT;
    }
    if (x !== columns - 1) {
      tiles[y][x + 1].TILE_TYPE = TILE_TYPE.ADJACENT;
    }
    if (x !== 0) {
      tiles[y][x - 1].TILE_TYPE = TILE_TYPE.ADJACENT;
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      tiles[i][j].TILE_TYPE = TILE_TYPE.OTHER;
    }
  }
  let x = fuzzyTile.x;
  let y = fuzzyTile.y;
  tiles[y][x].TILE_TYPE = TILE_TYPE.FUZZY;
  setAdjacentType();
}

/**
 * Iterates over tiles and drawing them.
 */
function drawTiles() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      drawTile(tiles[i][j]);
    }
  }
}

/**
 * Drawing a tile, if tile is a fuzzed type than blurring it with blue color
 * else srawing subrectangle of img in computed(scaled) coordinates.
 */
function drawTile(tile) {
  if (tile.TILE_TYPE === TILE_TYPE.FUZZY) {
    boardContext.globalAlpha = 0.8;
    boardContext.fillStyle = "rgba(35, 173, 278, 1)";
    boardContext.fillRect(tile.x * tileWidth, tile.y * tileHeight, tileWidth, tileHeight);
  } else {
    boardContext.globalAlpha = 1.0;
    let sx = tile.targetX * tileWidth / scale;
    let sy = tile.targetY * tileHeight / scale;
    let sWidth = tileWidth / scale;
    let sHeight = tileHeight / scale;
    let dx = tile.x * tileWidth;
    let dy = tile.y * tileHeight;
    boardContext.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, tileWidth, tileHeight);
    boardContext.strokeRect(tile.x * tileWidth, tile.y * tileHeight, tileWidth, tileHeight);
  }
}

/**
 * Listener for tile clicks.
 */
function onTileClick(e) {
  let t = getCurrentTile(e);
  swapTiles(t);
}

/**
 * Computes clicked tile indexes.
 */
function getCurrentTile(e) {
  let x = Math.floor(e.offsetX * columns / board.width);
  let y = Math.floor(e.offsetY * rows / board.height);
  return 0 <= y && y < rows && 0 <= x && x < columns ? tiles[y][x] : null;

}

/**
 * If tile is adjacent than swapping it with fuzzy one.
 */
function swapTiles(tile) {
  if (tile == null || tile.TILE_TYPE !== TILE_TYPE.ADJACENT) {
    return;
  }
  boardContext.clearRect(tile.x * tileWidth, tile.y * tileHeight, tileWidth, tileHeight);
  tiles[tile.y][tile.x] = fuzzyTile;
  tiles[fuzzyTile.y][fuzzyTile.x] = tile;
  let tmpX = fuzzyTile.x;
  let tmpY = fuzzyTile.y;
  fuzzyTile.x = tile.x;
  fuzzyTile.y = tile.y;
  tile.x = tmpX;
  tile.y = tmpY;
  drawTile(tile);
  drawTile(fuzzyTile);
  setTilesType();
  isEnd();
}


/**
 * Check if user won game by checking if all tiles coordinates are equals to target.
 */
function isEnd() {
  let win = true;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let tile = tiles[i][j];
      if (tile.x !== tile.targetX || tile.y !== tile.targetY) {
        win = false;
      }
    }
  }
  if (win) {
    setTimeout(reset, 300);
    /* popup would be a great addition*/
  }
}

/**
 * Allow to backup board to primary state.
 */
function reset() {
  isPlaying = false;
  board = document.getElementById('board');
  boardContext = board.getContext('2d');
  board.onmousedown = null;
  board.onmousemove = null;
  board.onmouseleave = null;
  drawImageOnBoard();
}

/**
 * Hover Listener when hovering image next to blurred one then image is overlayed
 * with white semi-transparent white layer. After taking cursor out of adjacent
 * tile then redrawing image.
 */
function onTileHover(e) {
  let tile = getCurrentTile(e);
  if (lastDisplayedTile !== null) {
    drawTile(lastDisplayedTile);
  }
  if (tile !== null && tile.TILE_TYPE === TILE_TYPE.ADJACENT) {
    boardContext.globalAlpha = 0.15;
    boardContext.fillStyle = '#ffffff';
    boardContext.fillRect(tile.x * tileWidth, tile.y * tileHeight, tileWidth, tileHeight);
    boardContext.strokeRect(tile.x * tileWidth, tile.y * tileHeight, tileWidth, tileHeight);
    lastDisplayedTile = tile;
  } else {
    lastDisplayedTile = null;
  }
}
