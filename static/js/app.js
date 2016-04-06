angular.module('app', []).controller('HomeCtrl', [
'$scope',
'ThoughtService',
function($scope, ThoughtService){

	$scope.thought = {};
	ThoughtService.getThoughts(); // need to chain the command with a .then(err handler, success handler, other handler) etc

	$scope.create = ThoughtService.makeThought($scope.thought);




}]).service('ThoughtService', [
'$http',
function($http){

	function getThoughts(){
		return $http.get('/api/thoughts');
	}

	function makeThought(thought){
		return $http.post('/api/thoughts');
	}

}]);