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

  constructor(public BooksService: BooksService ){
    this.libros = BooksService.getAll()
  }

  public modify_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    this.BooksService.edit(new Books(newRef, 0, newTitle, newType, newAuthor, newPrice, newPhoto))

 

}
}