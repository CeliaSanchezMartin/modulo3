import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public libros: Books[];
  

  constructor(public bookService: BooksService ){
    this.libros = bookService.getAll()
  }

  public modify_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    let result:Books[];
    result = this.bookService.getOne(newRef);
    if(result.length !== 0){
      this.bookService.edit(new Books(newRef, 0, newTitle, newType, newAuthor, newPrice, newPhoto))
    alert("El libro se ha modificado")
    } else {
      
      alert("Este libro no existe")
    }

  }
    

 

}
