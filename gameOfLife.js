class Board {
  constructor(firstGeneration) {
    this.firstGeneration = firstGeneration;

  }

  formatArray() {
    var firstGeneration = [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "*", "*", ".", ".", "."],
      [".", ".", ".", "*", "*", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    let counter = 0;
    //Cualquier célula viva con menos de dos vecinos vivos muere, como si se tratara de una subpoblación.
    firstGeneration.forEach(function(value,indice,array){
        console.log(value,indice)
        if(array[indice]=='*'){
            counter++;
        }
        console.log(counter);
    });
    
  }

 
  
  printGrid() {
    firstGeneration.forEach((row) => {
      console.log(row.join(" "));
    });
  }
}

const format = new Board();
format.formatArray();

/*

Cualquier célula viva con menos de dos vecinos vivos muere, como si se tratara de una subpoblación.
Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por superpoblación.
Cualquier célula viva con dos o tres vecinos vivos pasa a la siguiente generación.
Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva.
Debes escribir un programa que acepte una cuadrícula arbitraria de celdas y que dé como resultado una cuadrícula similar que muestre la siguiente generación.




*/
