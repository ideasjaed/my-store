import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(
    private http: HttpClient
  ) { }

  //GET
  getAllProducts() {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiURL}`, {
      params: { limit, offset }
    })
  }
  //POST
  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiURL, dto);
  }
  //UPDATE
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiURL}/${id}`, dto);
  }
  //DELETE
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiURL}/${id}`)
  }
}
