import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';
import { UsuarioService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
 

  private url = "http://localhost:3000/books"
  private books: Books[];
  public book: Books;
  constructor( private http: HttpClient, public userService: UsuarioService) { 
    /*
    this.books = [new Books(1,"La Verdad Sobre el caso de Harry Quebert","Tapa Blanda","Joël Dicker",22,"https://imagessl5.casadellibro.com/a/l/t7/65/9788420414065.jpg"),
    new Books(2,"Esperando al Diluvio","Tapa Blanda","Dolores Redondo",21.75,"https://imagessl9.casadellibro.com/a/l/t7/79/9788423362479.jpg")]
    */
  }

  public getAll(): Observable<Object>{
    let newUrl = this.url + "?id_user" + this.userService.user.id_user;
    return this.http.get(newUrl);

  };

  public getOne(id_libro: number): Observable<Object>{
    
    //let libro = this.books.find( book => book.id_book == id_libro)
    return this.http.get(this.url + "/?id=" + id_libro);
    /*
    let result:Books [] = [];
    for(let i:number = 0; i < this.book.length; i++){
      if(this.book[i].id_book == id_libro){
        result.push(this.book[i]);
      };
      
    }
    return result
    */
  }

  public add(libro:Books){

    //let addbook = {headers: null, body:libro}

    return this.http.post(this.url, libro)
    /*
    let result:number = 0;
    for(let i:number = 0; i < this.book.length; i++){
      if(this.book[i].id_book == libro.id_book){
        result = 1;
      }
    }
    if(result == 0){
      this.book.push(libro)
    } 
    else {
      alert("Este libro ya existe")
    }
*/
  };

  public edit(libro:Books){
    console.log(libro);
    
    return this.http.put(this.url, libro)
    /*
    let book_result: Books = null;
    for (let i:number = 0; i < this.book.length; i++) {
      if (this.book[i].id_book == libro.id_book) {
        book_result = this.book[i]
      }
    }

    let result: boolean;
    if (book_result == null) {
      result = false
    } else {
        book_result.id_user = book_result.id_user; 
        book_result.title = libro.title;
        book_result.type = libro.type
        book_result.author = libro.author;
        book_result.price = libro.price;
        book_result.photo = libro.photo;      
    }
    console.log(result)
    return result
    */
  }

  public delete(id_book: number):Observable<Object>{

    //console.log(id_book);
    

    return this.http.request('delete', this.url,{body:{id_book:id_book}})
    /*

    for(let i=0;i<this.book.length;i++){
      if(this.book[i].id_book== id_book){
        this.book.splice(i,1)
      }
    }

    return true;

  }

  */
  }
}
