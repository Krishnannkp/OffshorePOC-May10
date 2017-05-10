/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.controllers {
    export class TSDemoController {

        playListService: angularWithTS.Services.PlayListService;
        
        favorites: ng.IHttpPromise<{}>;


        getFavourites = (term:string) => {
            this.favorites = this.playListService.search(term);
        }
    }

    angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
} 