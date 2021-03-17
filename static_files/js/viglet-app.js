var vigletApp = angular.module('vigletApp', []);
vigletApp.config(function ($interpolateProvider, $sceDelegateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://viglet.com/**'
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

vigletApp.controller('VideosCtrl', function ($scope, $window, $sce, $http, $filter) {

    $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
            key: 'AIzaSyDE9z_1WRAtpTFZcQn9LCAzwW3ZJhv4soQ',
            playlistId: 'PLucp-3sa10A40BeGVAvLChPwONTfQ0nmY',
            maxResults: '9',
            part: 'snippet'
        }
    })
        .then(function (response) {
            $scope.ytChannel = $filter('orderBy')(response.data.items, '-snippet.publishedAt');
            $scope.firstVideo = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.ytChannel[0].snippet.resourceId.videoId);
            $scope.secondVideo = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.ytChannel[1].snippet.resourceId.videoId);
            $scope.thirdVideo = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.ytChannel[2].snippet.resourceId.videoId);

        });
});
