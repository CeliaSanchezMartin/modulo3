import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public libros: Books[];

  constructor(public bookService: BooksService){
    this.libros = bookService.getAll();
  }

  public add_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    this.bookService.add(new Books(newRef, 0, newTitle, newType, newAuthor, newPrice, newPhoto));
    alert("Libro añadido")

    
     
  }


}
