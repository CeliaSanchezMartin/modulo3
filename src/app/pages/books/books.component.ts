import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { UsuarioService } from 'src/app/shared/user.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public libros: Books[];
  

  constructor(public bookService: BooksService, /*private toastr: ToastrService*/ private userService: UsuarioService){
    //this.libros = [];
    this.bookService.getAll().subscribe((data: any) => {
      
      console.log(data);
      
      this.libros = data;

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
    
    this.bookService.delete(newBook.id_book).subscribe((data) => {
      this.bookService.getAll().subscribe((data:any) => {
        console.log(data);
        this.libros = data
        
      })

      // if(!resp.error) {

      //   this.libros = resp.data

      //   alert("El libro se ha eliminado");

      })
    }

  


  public search(newRef:number){

    if (newRef == 0) {

      this.bookService.getAll().subscribe((data) =>{
        console.log("data1");
        
        this.libros = data ['data'];

      })

    } else {

      this.bookService.getOne(newRef).subscribe((data) => {


        let libroDevuelto:Books[] = data['data']

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