(function(){
'use strict';

angular.module("myFirstApp",[])
.controller("myFirstController",LunchCheckController);
LunchCheckController.$inject=[$scope]
function LunchCheckController($scope){
$scope.totvalue="";
$scope.data="";
$scope.getData=function()
{


  var totvaluename=number_of_items($scope.data);
  $scope.lenn=totvaluename;
  if (totvaluename<=3 && totvaluename>0) {
    $scope.totvalue="Enjoy!";
  }
  else if(totvaluename>3){
    $scope.totvalue="Too much!";
  }
  else {
    $scope.totvalue="Please enter data first";
  }
$scope.data="";
};
function number_of_items(string)
{
  if(string.length==0){
    return 0;
  }
  var totvalue=string.split(",");

  return totvalue.length;
}
}

})();
