import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial';
  textoDeInput:string|any;
  constructor()
  {this.verTexto()
  }
  verTexto()
  {
    console.log(this.textoDeInput)
  }

}
