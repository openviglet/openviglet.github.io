var vigletApp = angular.module('vigletApp', []);
vigletApp.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://viglet.ai/**'
    ]);
});
vigletApp.controller('VigHomeCtrl', [
	"$scope"
	, "$http"
	, "$window"
	, "$rootScope"
	, function ($scope, $http, $window, $rootScope) {
        $scope.social_buttons = "https://viglet.ai/ui/templates/social-buttons.html";
	}]);