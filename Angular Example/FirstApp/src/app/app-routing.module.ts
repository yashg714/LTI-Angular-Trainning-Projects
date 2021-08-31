import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { ErrorComponent } from './error/error.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';

const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'homeLink',
    component:HomeComponent,
    children:[
      {
        path:'child1',
        component:Child1Component
      },
      {
        path:'child2',
        component:Child2Component
      }
    ]
  },
  {
    path:'LoginLink',
    component:LoginComponent
  },
  {
    path:'clientLink',
    component:ClientComponent
  },
  {
    path:'formLink',
    component:ReactiveComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
