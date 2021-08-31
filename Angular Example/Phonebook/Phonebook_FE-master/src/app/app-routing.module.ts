import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

const routes: Routes = [
 {
  
  path:"",component:HomeComponent
},
{
  path:"homeLink",component:HomeComponent
},
{
  path:"addContactLink",component:NewcontactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
