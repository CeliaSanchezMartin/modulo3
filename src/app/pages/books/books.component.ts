import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public libros: Books[];
  

  constructor(public bookService: BooksService){
    this.libros = bookService.getAll()
    
  }

  add_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    let libro:Books = new Books(newRef, 0, newTitle, newType, newAuthor, newPrice, newPhoto)   
   
    this.libros.push(libro);
    console.log(this.libros)
  }

  book_Deleted(libro: Books){

    let newLibros = this.libros.filter(book => book.id_book != libro.id_book)

    this.libros = newLibros;
    alert("Libro eliminado")
  }


  public search(newRef:number){
    let result:Books[];
    result = this.bookService.getOne(newRef);
    if(result.length !== 0){
      this.libros = result;
    } else {
      this.libros = this.bookService.getAll();
      alert("Este libro no existe")
    }

  }
  
}
