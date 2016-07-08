'use script';

angular.module('BlogApp', ['ngSanitize', 'ui.router', 'ui.bootstrap']) //ngSanitize for HTML displaying

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
			url: '/', 
			templateUrl: 'partial/home.html',
			controller: 'HomeCtrl'
		})	
		.state('about', {
			url: '/about',
			templateUrl: 'partial/about.html',
			controller: 'AboutCtrl'
		})
		.state('blogs', {
			url: '/blogs',
			templateUrl: 'partial/blogs.html',
			controller: 'BlogsCtrl'
		})

		$urlRouterProvider.otherwise('/'); //other route

})

//home page settings
.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {


}])

.controller('AboutCtrl', ['$scope', '$http', function($scope, $http) {


}])

.controller('BlogsCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.blogs = [];
	$scope.sortingCriteria = 'name';

	$http.get('data/blogs.json').then(function(response) {
 		$scope.blogs = response.data;
 	});	

}])
