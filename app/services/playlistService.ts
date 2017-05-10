/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.Services {   
let forecast: any;
    export class PlayListService {
        private $http: ng.IHttpService;
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
		}
	search(term: string){
		var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+term+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
		return this.$http.get( url ).success(function(data)
		{
			forecast=data
		});
		
	};
    
}
angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
}