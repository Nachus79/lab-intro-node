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

  sum() {
    if (this.length === 0) {

      return 0; 

    }

    let sum = 0; 

    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i];

    }
    return sum; 


  }

  avg() {
    if (this.length === 0) {

      throw new Error("EmptySortedList"); 

    }

    let sum = 0; 

    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i];

    }

      return sum/this.items.length; 

  }
}

module.exports = SortedList;



/*

The avg() method should return the average value of the array.

Just as before, check the corresponding test to see if there's anything else that needs to be added.

And you have reached the end!

Happy Coding! ❤️

*/