import { Injectable } from "@angular/core";
import { Books } from "../models/books";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
   
  
    private url = "http://localhost:3000/"

    public logueado: boolean;
    public user: User;
    
    constructor( private http: HttpClient) {
        this.logueado = false;
        this.user = null;
     }

     register(user:User){
        return this.http.post(this.url , user);
     };

     login(user:User){
        return this.http.post(this.url, user);
     };
  }