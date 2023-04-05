import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() newBook: Books;
  @Input() newLibros: Books [];
  @Input() isEven: boolean;

  @Output() eventoBook = new EventEmitter<Books>();

  constructor(public bookService: BooksService){

  }
  delete_Book(){
    this.eventoBook.emit(this.newBook)
  }
}
