import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(public httpClient: HttpClient) { }

   getProducts() {
         const URL = 'https://api.myjson.com/bins/19ynm&callback=callbackFN' ;
         return this.httpClient.get(URL, {});
    }

}
