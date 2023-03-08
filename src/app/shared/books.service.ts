import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private book: Books[];
  constructor() { 
    this.book = [new Books(1,1,"La Verdad Sobre el caso de Harry Quebert","Tapa Blanda","Joël Dicker",22,"https://imagessl5.casadellibro.com/a/l/t7/65/9788420414065.jpg"),
    new Books(2,1,"Esperando al Diluvio","Tapa Blanda","Dolores Redondo",21.75,"https://imagessl9.casadellibro.com/a/l/t7/79/9788423362479.jpg")]
  }

  public getAll():Books[]{
    return this.book;
  };

  public getOne(id_libro: number):Books []{
    let result:Books [] = [];
    for(let i:number = 0; i < this.book.length; i++){
      if(this.book[i].id_book == id_libro){
        result.push(this.book[i]);
      };
      
    }
    return result
  }

  public add(libro:Books):void{
    let result:number = 0;
    for(let i:number = 0; i < this.book.length; i++){
      if(this.book[i].id_book == libro.id_book){
        result = 1;
      }
    }
    if(result == 0){
      this.book.push(libro)
    } 
    else {
      alert("Este libro ya existe")
    }

  };

  public edit(libro:Books):boolean{
    let book_result: Books = null;
    for (let i:number = 0; i < this.book.length; i++) {
      if (this.book[i].id_book == libro.id_book) {
        book_result = this.book[i]
      }
    }

    let result: boolean;
    if (book_result == null) {
      result = false
    } else {
        book_result.id_user = book_result.id_user; 
        book_result.title = libro.title;
        book_result.type = libro.type
        book_result.author = libro.author;
        book_result.price = libro.price;
        book_result.photo = libro.photo;      
    }
    console.log(result)
    return result
  }

  public delete(id_book: number): boolean{

    for(let i=0;i<this.book.length;i++){
      if(this.book[i].id_book== id_book){
        this.book.splice(i,1)
      }
    }

    return true;

  }

  

}
