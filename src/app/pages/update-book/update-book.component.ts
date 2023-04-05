import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public libros: Books[];
  

  constructor(public bookService: BooksService, /*private toastr: ToastrService */){
  }

  public modify_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){

    let libroNuevo = new Books (newRef, newTitle, newType, newAuthor, newPrice, newPhoto);
    console.log(libroNuevo);
    
    this.bookService.edit(libroNuevo).subscribe((answer: Respuesta) => {

      if(!answer.error){
        this.bookService.book = answer.data[0]

        alert("El libro ha sido modificado con exito")
        alert("El libro no ha sido encontrado")

      } else {

        alert("El libro no ha sido encontrado")
        
      }
    })
    /*
    let result:Books[];
    result = this.bookService.getOne(newRef);
    if(result.length !== 0){
      this.bookService.edit(new Books(newRef, newTitle, newType, newAuthor, newPrice, newPhoto))
    alert("El libro se ha modificado")
    } else {
      
      alert("Este libro no existe")
    }
*/
  }
    

 

}
