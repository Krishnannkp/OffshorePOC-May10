/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
module angularWithTS {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "angularWithTS.controllers.tsDemoController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}