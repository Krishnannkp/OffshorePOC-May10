/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var controllers;
    (function (controllers) {
        var TSDemoController = (function () {
            function TSDemoController() {
                var _this = this;
                this.getFavourites = function (term) {
                    _this.favorites = _this.playListService.search(term);
                };
            }
            return TSDemoController;
        }());
        controllers.TSDemoController = TSDemoController;
        angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
