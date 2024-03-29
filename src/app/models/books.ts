export class Books {
    public id_book:number
    public id_user: number
    public title: string
    public type: string
    public author: string
    public price: number
    public photo: string

    constructor(id_book:number, title:string, type:string, author:string, price: number, photo:string, id_user:number = 0)
    {
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}
