import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaPokemones } from '../modelos/ListaPokemones.model';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { Pokemon } from '../modelos/pokemon.model';
import { PokemonItem } from '../modelos/PokemonItem.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
    private apiURL = 'https://pokeapi.co/api/v2'; //pokemon/

    constructor(private http: HttpClient) {

    }

    listaPokemones(limit : number = 20, offset: number = 0) : Observable<Pokemon[]> {
      return this.http.get<ListaPokemones>(`${this.apiURL}/pokemon/?offset=${offset}&limit=${limit}`)
        .pipe(
          switchMap(response => {
              const pokemones : Observable<Pokemon>[]  = response.results.map(( p : PokemonItem ) => {
                return this.getPokemon(p.name);
              });
              return forkJoin(pokemones);
          })
        );
    }

    getPokemon (nombre : string) : Observable<Pokemon>{
      return this.http.get<Pokemon>(`${this.apiURL}/pokemon/${nombre}`);
    }
}
