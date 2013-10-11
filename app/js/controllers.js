'use strict';

/* Controllers */
var latihanApp = angular.module('latihanApp',[]);

latihanApp.controller('LatihanCtrl', ['$scope', function($scope) {
	$scope.judulApp = 'ini adalah aplikasi latihan saya';
}]);