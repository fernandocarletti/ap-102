var LoginController = function ($scope) {
    $scope.title = "AP 102";

    $scope.authenticate = function () {
        $.mobile.changePage('#summary');
    }
}
