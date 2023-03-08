import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "register", component: RegisterComponent },
  {path: "profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "AddBook", component: AddBookComponent},
  {path: "UpdateBook", component: UpdateBookComponent},
  {path: "login", component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
