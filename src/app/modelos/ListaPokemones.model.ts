import { PokemonItem } from "./PokemonItem.model";

export interface ListaPokemones {
    count : number;
    next : string;
    previous : string | null;
    results : PokemonItem [];
}
