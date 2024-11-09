class SortedList {
  constructor(items, length) {

      this.items = [];
      this.length = 0;  


  }

  add(item) {

    this.items.push(item); //Para introducir desde el final.
    this.items.sort((a, b) => a - b); //Ordena en orden ascendente.
    this.length = this.items.length; //Revisa la nueva longitud.
  }

  get(pos) {

    const valueSearch = this.items[pos];

    if (!valueSearch){

      throw new Error("OutOfBounds");
    } 

    return valueSearch;

    
  }

  max() {

      if (this.length === 0) {

        throw new Error("EmptySortedList"); 

      }

      return this.items[this.length - 1]; //Devuelve el más grande si el array está ordenado. 

      /*Si no está ordenado: 



      */

  }

  min() {

    if (this.length === 0) {

      throw new Error("EmptySortedList"); 

    }

     return this.items[0]; //Si está ordenado el más bajo es el primero. 

     /*Si no lo está: 
     
     */

  }

  sum() {}

  avg() {}
}

module.exports = SortedList;



/*
Iteration 5: min()
The min() method should return the lowest value of the array.

In case you have an empty SortedList, you must throw an error with the message "Empty SortedList".
*/
