angular.module('app').controller('UploadController', function($scope, $http) {
  $scope.title = '';
  $scope.description = '';
  $scope.myFile = '';

  $scope.uploadFile = function() {
    var file = $scope.myFile;
    var title = $scope.title;
    var description = $scope.description;

    var fd = new FormData();
    fd.append('audio', file);
    fd.append('title', title);
    fd.append('description', description);

    $http.post('/api/podcasts', fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    }).then(function(response) {
      alert('Podcast created');
      window.location.reload();
    });
  };
});
