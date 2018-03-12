var app=angular.module('finmart',[]);

app.controller('homeCtrl',function($scope,$http){
    $scope.LoggedInName = 'Ajay Arora';
	
	$scope.fnLogin=function(){
		$http({
        method: "POST",
        url: "http://api.magicfinmart.com/api/login",
        param: { EmailId: "live@gmail.com", Password: "01011980" ,IpAdd:"198.178.0.100",FBAId:0,},
        contentType: "application/json; charset=utf-8"
    }).then(function mySuccess(response) {
        debugger;
        $scope.myWelcome = response.data;
        // $scope.ImageID = response.data.ImageID;
        // $scope.ImageName = response.data.ImageName;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	
	};
});
