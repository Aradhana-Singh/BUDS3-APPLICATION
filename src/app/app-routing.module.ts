import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HolderComponent } from './holder/holder.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , redirectTo:"/home", pathMatch:"full" },
  {path: 'home', component:HolderComponent},
  {path: 'library', component:LibraryComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
