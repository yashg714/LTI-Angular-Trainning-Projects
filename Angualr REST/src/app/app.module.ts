import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { HttpClientModule} from '@angular/common/http'; //NEW
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ShowproductComponent,
    NewproductComponent,
    EditproductComponent,
    SearchproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule , //NEW
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
