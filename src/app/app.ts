import { Component, signal } from '@angular/core';
import { PokemonComponent } from './pokemon-component/pokemon-component';


@Component({
  selector: 'app-root',
  imports: [PokemonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon');
}
