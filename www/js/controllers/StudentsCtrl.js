/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('StudentsCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {

  $scope.newstudent = {};
  // get all students
  $http.get(base_url+'/students')
    .success(function(data) {
      $scope.students = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  $scope.DeleteStudent = function (id) {
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
