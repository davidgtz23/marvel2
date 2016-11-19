"use strict";
require('rxjs/add/operator/toPromise');
var MarvelService = (function () {
    function MarvelService(http) {
        this.http = http;
    }
    MarvelService.prototype.marvelCharacters = function () {
        var url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6e7ea22a9990b6724c6f6e815c5695e4&hash=293ea6badc77975511719023ebb80120';
        return this.http.get(url)
            .toPromise();
    };
    return MarvelService;
}());
exports.MarvelService = MarvelService;
//# sourceMappingURL=characters.component.service.js.map