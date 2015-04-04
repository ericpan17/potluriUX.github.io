<?php
//include('template.php')?>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!DOCTYPE html>
<html ng-app="">
<head>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
</head>

<body ng-controller="userController">
<div class="container">
 <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     <!-- thunderify -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-3730266544385182"
     data-ad-slot="4599097999"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<br>
<ul class="nav nav-pills">
<li class="active"
    ng-repeat=" country in countries2" ng-click = "spu(country)"><a>{{country.country |uppercase}} ({{country.count}})</a></li>
</ul>
More Countries (Hit Plus): <span id = "tags" class="glyphicon glyphicon-plus-sign" ng-click="toggle()" aria-hidden="true"></span>
<ul ng-show="myVar"class="nav nav-pills">
<li class="active"
    ng-repeat=" country in countries" ng-click = "spu(country)"><a>{{country.country |uppercase}} ({{country.count}})</a></li>
</ul>

 
<!--<h3>Users</h3>-->
<p>Search:</p>
 

<p><input class="form-control" id='txtJob' type="text" placeholder='Search by Paper,Country' ng-model="fName2" ></p>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     <!-- thunderify -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-3730266544385182"
     data-ad-slot="4599097999"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<table class="table table-striped">
  <thead><tr>
   
    <th><a href="" ng-click="orderByField='title'; reverseSort = !reverseSort">NewsPapers<span ng-show="orderByField == 'fName'"><span ng-show="!reverseSort">^</span><span ng-show="reverseSort">v</span></span></th>
    
  </tr></thead>
  <tbody><tr ng-repeat="user in names | filter:fName2| orderBy:orderByField:reverseSort">
    
          <td><a id="link" ng-href="{{ user.site }}" >
                  {{ user.paper }} - {{ user.country | uppercase }}</a></td>
                  
  </tr></tbody>
</table>




</div>

<script src = "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script>
    
   
 
function userController($rootScope, $scope, $http) {

    $scope.fName2 = document.getElementById('txtJob').value;
       $scope.spu = function(item) {
          // alert("spufunc");
                    $scope.fName2 = item.country;
                      $rootScope.searchString = $scope.fName2;
                };
       $scope.myVar = false;
$scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    }
// This is just a sample script. Paste your real code (javascript or HTML) here.


        $http.get("news_json.php")
    .success(function(response) {
        $scope.names = response;
$scope.countries2=[{
    "count": "80",
    "country": "usa"
}, {
    "count": "46",
    "country": "india"
}, {
    "count": "37",
    "country": "Norway"
}, {
    "count": "34",
    "country": "uk"
}, {
    "count": "31",
    "country": "russia"
}, {
    "count": "26",
    "country": "china"
}];
$scope.countries=[{
    "count": "26",
    "country": "japan"
}, {
    "count": "26",
    "country": "canada"
}, {
    "count": "26",
    "country": "nigeria"
}, {
    "count": "24",
    "country": "italy"
}, {
    "count": "22",
    "country": "france"
}, {
    "count": "22",
    "country": "philippines"
}, {
    "count": "19",
    "country": "spain"
}, {
    "count": "19",
    "country": "turkey"
}, {
    "count": "17",
    "country": "australia"
}, {
    "count": "16",
    "country": "germany"
}, {
    "count": "14",
    "country": "Netherlands"
},{"count":"10","country":"SaudiArabia"},{"count":"9","country":"brazil"},{"count":"8","country":"Poland"},{"count":"8","country":"Portugal"},{"count":"8","country":"mexico"},{"count":"7","country":"Israel"},{"count":"7","country":"Lebanon"},{"count":"7","country":"Maldova"},{"count":"6","country":"Oman"},{"count":"6","country":"UAE"},{"count":"6","country":"Yemen"},{"count":"5","country":"Romania"},{"count":"4","country":"Bahrain"},{"count":"4","country":"Egypt"},{"count":"4","country":"Iran"},{"count":"4","country":"Qatar"},{"count":"2","country":"Cyprus"},{"count":"2","country":"Iraq"},{"count":"2","country":"Kuwait"},{"count":"1","country":"jordan"}]; 
$scope.orderByField = 'title';
  $scope.reverseSort = false;
  
  });
    
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.id = '';


$scope.users = [
    {id:0, fName:'Hege'  , lName:"Pege" },
    {id:1, fName:'Kim'   , lName:"Pim" },
    {id:2, fName:'Jack'  , lName:"Jones" },
    {id:3, fName:'John'  , lName:"Doe" },
    {id:4, fName:'Peter' , lName:"Pan" }
];
$scope.test2 = function(){
    var id = $scope.id;
    $scope.users[id].fName = $scope.fName;
    $scope.users[id].lName = $scope.lName;
   
    
}
$scope.rm = function(id){
    
     $scope.users.splice( id, 1 );
 
}
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;  

$scope.editUser = function(id) {
   
    if (id == 'new') {
        $scope.edit = true;
        $scope.incomplete = true;
        $scope.fName = '';
        $scope.lName = '';
    } else {
        $scope.edit = true;
        
        angular.forEach($scope.users, function(value, key) {
        
    if(value.id == id){
          $scope.fName = value.fName;
        $scope.lName = value.lName;  
        $scope.id=id;
        }
    });
        }
      
      
    
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});
$scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
        $scope.error = true;
    } else {
        $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.fName.length || !$scope.lName.length|| !$scope.passw1.length || !$scope.passw2.length)) {
        $scope.incomplete = true;
    }
};

}</script>
<style>
    span.glyphicon-plus-sign {
    font-size: 1.6em;
}
    </style>
</body>
</html>>