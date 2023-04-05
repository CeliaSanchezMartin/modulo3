import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksComponent } from '../books/books.component';
import { UsuarioService } from 'src/app/shared/user.service';

//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public libros: Books[];

  constructor(public bookService: BooksService, /* toastr: ToastrService*/ public userService: UsuarioService){
    //this.libros = bookService.getAll();
  }

  public add_book(newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    
    let libroNuevo:Books = new Books(null, newTitle, newType, newAuthor, newPrice, newPhoto, this.userService.user.id_user);

    //console.log(libroNuevo);
    

    this.bookService.add(libroNuevo).subscribe((data) => {
      
      if(data){
        console.log(data);
        
        //this.bookService.book = answer.data
        
        alert("Libro añadido con exito")
      
      } else {
        
        alert("El libro ya existe")
      
      }
    })
  }
}
