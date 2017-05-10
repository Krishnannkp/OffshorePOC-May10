/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
((): void=> {
    var app = angular.module("angularWithTS", ['ngRoute']);
    app.config(angularWithTS.Routes.configureRoutes);
})() 