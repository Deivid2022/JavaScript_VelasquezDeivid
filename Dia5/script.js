// Define el tamaño del tablero de ajedrez
const N = 8;

// Inicializa el tablero de ajedrez
let board = new Array(N).fill().map(() => new Array(N).fill(0));

// Función para imprimir la solución
function printSolution(board) {
  for (let i = 0; i < N; i++) {
    let row = '';
    for (let j = 0; j < N; j++) {
      // Representa las reinas como 'Q' y las casillas vacías como '.'
      row += board[i][j] ? 'R ' : '0 ';
    }
    console.log(row);
  }
}

// Función para verificar si se puede colocar una reina en board[row][col]
function isSafe(board, row, col) {
  let i, j;

  // Verifica la columna a la izquierda
  for (i = 0; i < col; i++) {
    if (board[row][i]) return false;
  }

  // Verifica la diagonal superior a la izquierda
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Verifica la diagonal inferior a la izquierda
  for (i = row, j = col; j >= 0 && i < N; i++, j--) {
    if (board[i][j]) return false;
  }

  // La posición es segura para colocar una reina
  return true;
}

// Función de utilidad recursiva para resolver el problema de las N reinas
function solveNQUtil(board, col) {
  // Caso base: Si todas las reinas están colocadas, retorna true
  if (col >= N) return true;

  // Considera esta columna e intenta colocar esta reina en todas las filas una por una
  for (let i = 0; i < N; i++) {
    // Verifica si la reina puede ser colocada en board[i][col]
    if (isSafe(board, i, col)) {
      // Coloca esta reina en board[i][col]
      board[i][col] = 1;

      // Recurre para colocar el resto de las reinas
      if (solveNQUtil(board, col + 1)) return true;

      // Si colocar la reina en board[i][col] no conduce a una solución, retrocede
      board[i][col] = 0;
    }
  }

  // Si la reina no puede ser colocada en ninguna fila en esta columna, retorna false
  return false;
}

// Función para resolver el problema de las N reinas usando el enfoque de backtracking
function solveNQ(startRow, startCol) {
  // Inicializa el tablero con la primera reina
  board[startRow][startCol] = 1;

  if (!solveNQUtil(board, startCol + 1)) {
    console.log("La solución no existe");
    return false;
  }

  printSolution(board);
  return true;
}

// Ejemplo de uso: solveNQ(0, 2) para colocar la primera reina en la fila 0, columna 2
solveNQ(0, 0);
