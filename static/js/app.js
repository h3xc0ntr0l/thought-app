angular.module('app', []).controller('HomeCtrl', [
'$scope',
'ThoughtService',
function($scope, ThoughtService){

	//this is all just scaffolding!!


	$scope.title = "Thought App";

	$scope.thought = {}; //just so we have this object at the outset.
	// need to chain the command with a .then(err handler, success handler, other handler) etc
	ThoughtService.getThoughts().then(function(response){
		if (response.message){
			$scope.message = response.message;
		} else if (response.thoughts){
			$scope.thoughts = response.thoughts;
		} else {
			$scope.message = "Oops! Something went wrong!";
		}
	});

	$scope.create = function(){
		ThoughtService.makeThought($scope.thought);
	}



}]).service('ThoughtService', [
'$http',
function($http){

	this.getThoughts = function(){
		return $http.get('/api/thoughts');
	}

	this.makeThought = function(thought){
		return $http.post('/api/thoughts');
	}

}]);