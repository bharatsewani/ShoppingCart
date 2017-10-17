import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { ProductService } from './services/product.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
