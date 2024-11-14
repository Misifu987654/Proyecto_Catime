import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];  // Array que almacenará los productos del carrito
  private totalPrice: number = 0;  // Variable para almacenar el total del carrito

  constructor() { }

  // Método para añadir un producto al carrito
  addToCart(product: { id: number, name: string, price: number }) {
    this.cart.push(product);
    this.totalPrice += product.price;
    console.log(this.cart);  // Puedes usar console.log para ver los productos añadidos al carrito
  }

  // Método para obtener los productos del carrito
  getCartItems() {
    return this.cart;
  }

  // Método para obtener el precio total del carrito
  getTotalPrice() {
    return this.totalPrice;
  }
}
