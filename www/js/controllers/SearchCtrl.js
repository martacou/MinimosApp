/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('SearchCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
//GET all subjects
  $http.get(base_url+'/subjects')
    .success(function(data) {
      $scope.SearchSubjects = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.DeleteSubj = function (id) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete',
      template: 'Are you sure you want to delete this student?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $http.delete(base_url+'/students/' + id)
          .success(function(data){
            $scope.students = data;
          })
          .error(function(data){
            console.log('Error:' + data);
          });
      } else {
        console.log('You are not sure');
      }
    });
  };
});
