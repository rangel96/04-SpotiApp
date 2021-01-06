import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template:
    `<div class="alert alert-danger animated fadeIn">
    <h3>Error</h3>
      <p>Error al cargar los datos. {{ message }}.</p>
  </div>`
})
export class ErrorComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
