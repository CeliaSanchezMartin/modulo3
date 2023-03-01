export class User {
    public id_user: number
    public name: string
    public last_name: string
    public email: string
    public photo: string
    public password: string

   constructor(name:string, last_name:string, email:string, phot:string, password:string)
   {
     this.name = name;
     this.last_name = last_name;
     this.email = email;
     this.password = password;
   } 

   public nombreCompleto():string{
    return this.name + " " + this.last_name;
   }

}
