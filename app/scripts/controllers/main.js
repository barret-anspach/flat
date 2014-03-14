angular.module('flatApp')
    .controller('MainCtrl', function ($scope, stellar, strapWrapper) {

        stellar.against(window);

        $scope.strap = strapWrapper.straps;

        $scope.showDetail = false;
        $scope.selectedSize = false;
        $scope.selectedColor = false;
        $scope.selectedModel = false;
        $scope.selectedStrap = false;

        $scope.selectModel = function(object){
            $scope.selectedModel =  object;
            $scope.selectedColor = $scope.selectedModel.colors[0];
            $scope.selectedSize = false;
            console.log($scope.selectedModel);
        };

        $scope.unSelectModel = function () {
            $scope.selectedModel = false;
        };

        $scope.selectColor = function(color){
            $scope.selectedColor = color;
            $scope.selectedStrap = false;
            $scope.selectedSize = false;
        };

        $scope.selectSize = function (size) {
            $scope.selectedSize = size;
            $scope.selectedStrap = {
                "id": $scope.selectedModel.id + '-' + $scope.selectedColor.no + $scope.selectedSize.id,
                "quantity": 0
            };
        };

        $scope.qtyPlus = function () {
            var qty = parseInt($scope.selectedStrap.quantity, 10);
            $scope.selectedStrap.quantity = qty + 1;
        };
        $scope.qtyMinus = function () {
            var qty = parseInt($scope.selectedStrap.quantity, 10);
            if (qty > 0) {
                $scope.selectedStrap.quantity = qty - 1;
            }
        };

        $scope.toggleColor = function (color) {
            $scope.selectedColor = color;
        };

        $scope.sizeSelected = function(model, color, size) {
            $scope.selectedItem = model + '-' + color + size;
            console.log('Selected ' + $scope.selectedItem);
//            return $scope.selectedItem;
						$scope.itemsInCart = [];

        };

        $scope.cls = function(idx) {
            return idx % 2 === 0 ? 'on-left' : 'on-right';
        };

        $scope.query = {};

    });

'use strict';
