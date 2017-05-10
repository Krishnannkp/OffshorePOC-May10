/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Services;
    (function (Services) {
        var forecast;
        var PlayListService = (function () {
            function PlayListService($http) {
                this.httpService = $http;
            }
            PlayListService.prototype.search = function (term) {
                var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + term + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
                return this.$http.get(url).success(function (data) {
                    forecast = data;
                });
            };
            ;
            return PlayListService;
        }());
        PlayListService.$inject = ["$http"];
        Services.PlayListService = PlayListService;
        angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
    })(Services = angularWithTS.Services || (angularWithTS.Services = {}));
})(angularWithTS || (angularWithTS = {}));
