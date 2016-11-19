import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class MarvelService{

	constructor(private http:Http){}

	marvelCharacters(){
		let url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6e7ea22a9990b6724c6f6e815c5695e4&hash=293ea6badc77975511719023ebb80120';
		return this.http.get(url)
			.toPromise()

	}
	
}