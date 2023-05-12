
export function gauss(A, I) {
  let B = I;

  if (dete(A, A.length) == 0) printNoinverse(A);

  else {                                              // apply Gaussian elimination
    // Crear una matriz identidad    
    // Convertir la matriz en una matriz escalonada
    for(let i=0; i<3; i++) {
      // Encontrar el pivote y hacer que el elemento diagonal sea 1
      let pivote = A[i][i];
      for(let j=0; j<3; j++) {
        A[i][j] /= pivote;
        B[i][j] /= pivote;
      }
      
      // Hacer que los demás elementos de la columna sean 0
      for(let k=0; k<3; k++) {
        if(k !== i) {
          let factor = A[k][i];
          for(let j=0; j<3; j++) {
            A[k][j] -= factor * A[i][j];
            B[k][j] -= factor * B[i][j];
          }
        }
      }
    }
  }
  printMatrix(A, B);  
}



export function dete(A, order) {
  if (order === 1) {
    // Si la A es de orden 1, su determinante es el único elemento de la A
    return A[0][0];
  } else {
    let det = 0;
    // Iteramos sobre la primera fila de la A y sumamos los productos de los elementos
    for (let j = 0; j < order; j++) {
      // Obtenemos el submatriz eliminando la primera fila y la columna j
      const submatrix = [];
      for (let i = 1; i < order; i++) {
        submatrix.push(A[i].filter((_, k) => k !== j));
      }
      // Calculamos el determinante de la submatriz y lo multiplicamos por el elemento de la primera fila y la columna j
      det += ((-1) ** j) * A[0][j] * dete(submatrix, order - 1);
    }
    return det;
  }
}


export function printMatrix(A, B) {

  let output = `            
  \\begin{equation} \\left( \\begin{array}{ccc|ccc} 
    ${B[0][0]} & ${B[0][1]} & ${B[0][2]} & ${A[0][0]} & ${A[0][1]} & ${A[0][2]}\\\\
    ${B[1][0]} & ${B[1][1]} & ${B[1][2]} & ${A[1][0]} & ${A[1][1]} & ${A[1][2]}\\\\
    ${B[2][0]} & ${B[2][1]} & ${B[2][2]} & ${A[2][0]} & ${A[2][1]} & ${A[2][2]}\\\\
  \\end{array} \\right) \\end{equation}`;
    // In JS we use \ before a special character as \b to mark 
  //   that it's not a special character (in this case \begin)
  matrix.innerText = output;
  MathJax.typeset([matrix]);
}

export function printNoinverse(A) {
  let output = `  
  La matriz

  \\begin{equation} \\left( \\begin{array} 
    ${A[0][0]} & ${A[0][1]} & ${A[0][2]}\\\\
    ${A[1][0]} & ${A[1][1]} & ${A[1][2]}\\\\
    ${A[2][0]} & ${A[2][1]} & ${A[2][2]}\\\\
  \\end{array} \\right) \\end{equation}
  
  
  no tiene inversa`;
    // In JS we use \ before a special character as \b to mark 
  //   that it's not a special character (in this case \begin)
  matrix.innerText = output;
  MathJax.typeset([matrix]);
}