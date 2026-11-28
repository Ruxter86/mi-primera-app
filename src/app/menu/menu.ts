import { Component, signal } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  productos: Producto[] = [
    { nombre: 'Carnitas surtidas (1 kg)', precio: 380, disponible: true },
    { nombre: 'Maciza (1 kg)', precio: 400, disponible: true },
    { nombre: 'Chicharrón prensado (1/2 kg)', precio: 150, disponible: false },
    { nombre: 'Orden de tacos (5)', precio: 90, disponible: true },
  ];

  total = signal(0);

  agregar(producto: Producto) {
    this.total.update((actual) => actual + producto.precio);
  }

  vaciar() {
    this.total.set(0);
  }
}