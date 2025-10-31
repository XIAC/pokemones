import { Component } from '@angular/core';
import { PokemonService } from '../servicios/pokemon-service';
import { Pokemon } from '../modelos/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-component',
  imports: [ CommonModule],
  templateUrl: './pokemon-component.html',
  styleUrl: './pokemon-component.css',
})
export class PokemonComponent {
  /**
   *
   */
  pokemones : Pokemon [] = [];
  constructor(private pokemonServicio: PokemonService) {
    
  }
  
  ngOnInit() : void {
    this.pokemonServicio.listaPokemones().subscribe({
      next: (datos)=> { 
        this.pokemones = datos;
        console.log(datos) ;
        console.log(this.pokemones);
      },
      error: (err) => {
        console.log('Error en:', err);
      }
    });
  }

}
