

let A = [[1,1,2],[4,0,3],[5,1,2]];
let I = [[1,0,0],[0,1,0],[0,0,1]];


export function gauss(A, I) {
  // define the number of rows and columns
  var rows = A.length;
  var cols = A[0].length;

  det = det(A, rows, cols);

  // apply Gaussian elimination
  for (var k = 0; k < rows; k++) {
    // pivot row
    var maxRow = k;
    for (var i = k + 1; i < rows; i++) {
      if (Math.abs(A[i][k]) > Math.abs(A[maxRow][k])) {
        maxRow = i;
      }
    }

    // swap pivot row with current row
    var temp = A[k];
    A[k] = A[maxRow];
    A[maxRow] = temp;

    // make all rows below this one 0 in current column
    for (var i = k + 1; i < rows; i++) {
      var factor = A[i][k] / A[k][k];
      for (var j = k + 1; j < cols; j++) {
        A[i][j] -= factor * A[k][j];
      }
      A[i][k] = 0;
    }
    printMatrix(A, rows, cols);
  }
  
}



function det (A, rows, cols) {
  let det = 0;
    
  return det;
}

export function addition (a, b) {
  return a+b;
}
