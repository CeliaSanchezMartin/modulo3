import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksComponent } from '../books/books.component';

//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public libros: Books[];

  constructor(public bookService: BooksService, /* toastr: ToastrService*/){
    //this.libros = bookService.getAll();
  }

  public add_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    
    let libroNuevo:Books = new Books(newRef, newTitle, newType, newAuthor, newPrice, newPhoto);

    //console.log(libroNuevo);
    

    this.bookService.add(libroNuevo).subscribe((answer:Respuesta) => {
      
      if(!answer.error){
        console.log(answer.data);
        
        //this.bookService.book = answer.data
        
        alert("Libro añadido con exito")
      
      } else {
        
        alert("El libro ya existe")
      
      }
    })
  }
}
