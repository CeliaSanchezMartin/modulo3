import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public libros: Books[];
  

  constructor(){

    this.libros = [new Books(1,1,"La Verdad Sobre el caso de Harry Quebert","Tapa Blanda","Joël Dicker",22,"https://imagessl5.casadellibro.com/a/l/t7/65/9788420414065.jpg")];
    
  }

  add_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    let libro:Books = new Books(newRef, 0, newTitle, newType, newAuthor, newPrice, newPhoto)   
   
    this.libros.push(libro);
    console.log(this.libros)
  }

  book_Deleted(libro: Books){

    let nuevoLibros = this.libros.filter(book => book.id_book != libro.id_book)

    this.libros = nuevoLibros;
  }
  
}
