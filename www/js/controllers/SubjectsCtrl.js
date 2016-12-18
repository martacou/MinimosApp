/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('SubjectsCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
  console.log('SubjectsCtrl');

  //GET all subjects
  $http.get(base_url+'/subjects')
    .success(function(data) {
      $scope.subjects = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.DeleteSubject = function (id) {
    console.log("DeleteSubject");
      console.log("popup");
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure you want to delete this subject?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log("confirm popup");
          $http.delete(base_url+'/subjects/' + id)
            .success(function(data){
              $scope.subjects = data;
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
