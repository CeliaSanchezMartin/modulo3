import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public libros: Books[];
  

  constructor(public bookService: BooksService, /*private toastr: ToastrService*/){
    this.libros = [];
    this.bookService.getAll().subscribe((resp:Respuesta) => {
      
      console.log(resp.data);
      
      this.libros = resp.data;

    })
  }
/*
  add_book(newRef: number, newTitle: string, newType: string, newAuthor: string, newPrice: number, newPhoto:string){
    let libro:Books = new Books(newRef, newTitle, newType, newAuthor, newPrice, newPhoto)   
   
    this.libros.push(libro);
    console.log(this.libros)
  }
*/
  public book_Deleted(newBook: Books){
    console.log(newBook);
    
    this.bookService.delete(newBook.id_book).subscribe((resp: Respuesta) => {

      if(!resp.error) {

        this.libros = resp.data

        alert("El libro se ha eliminado");

      }
    })

  }


  public search(newRef:number){

    if (newRef == 0) {

      this.bookService.getAll().subscribe((resp: Respuesta) =>{
        console.log("data1");
        
        this.libros = resp.data;

      })

    } else {

      this.bookService.getOne(newRef).subscribe((resp:Respuesta) => {


        let libroDevuelto:Books[] = resp.data

        if(newRef != undefined){

          this.libros = libroDevuelto;
          console.log(this.libros);
          

        } else {

          alert("Este libro no existe")
        }

        
      })
    }

/*
    let result:Books[];
    result = this.bookService.getOne(newRef);
    if(result.length !== 0){
      this.libros = result;
    } else {
      this.libros = this.bookService.getAll();
      alert("Este libro no existe")
    }
*/
};
}