import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/models/books';

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

  constructor(){

  }
  delete_Book(){
    this.eventoBook.emit(this.newBook)
  }
}
