app.controller('HController', function($scope) {
	$scope.total = 0;

	$scope.increment = function () {
		$scope.total++;
	}
});