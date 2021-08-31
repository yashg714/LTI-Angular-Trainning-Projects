import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { TestComponent } from "./inline/test.component";
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalcComponent } from './calc/calc.component';
import { EmpComponent } from './emp/emp.component';
import { StructComponent } from './struct/struct.component';
import { TdfDemoComponent } from './tdfdemo/tdfdemo.component';
import { MyapiService } from "./myapi.service";
import {HttpClientModule} from "@angular/common/http";
import { ClientComponent } from './client/client.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    LoginComponent,
    TestComponent,
    SampleComponent,
    EventBindingComponent,
    CalcComponent,
    EmpComponent,
    StructComponent,
    TdfDemoComponent,
    ClientComponent,
    ErrorComponent,
    Child1Component,
    Child2Component,
    ReactiveComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:[MyapiService],
  bootstrap:[AppComponent]
})
export class AppModule{

}