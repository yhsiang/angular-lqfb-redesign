angular.module('app.service',['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {controller:loadIssue, templateUrl:'/issue.html'})
            .when('/events', {controller:loadEvent, templateUrl:'/events.html'})
            .when('/units', {controller:loadUnit, templateUrl:'/units.html'})
            .when('/members', {controller:loadMember, templateUrl:'/members.html'})
            .otherwise({redirect:'/'});
    })
    .factory('Issues', function($resource){
        return $resource('/json/issues.json', {},{
            get: {method: 'GET', isArray:false},
            list:{isArray:true, method:'get',
                  transformResponse: function (data, headers) {
                  return JSON.parse(data).initiatives; 
                }}
        });
    }); // factoring 'Issues' to handle $resource response 
 
angular.module('app',['app.service']);


function loadIssue($scope, Issues) { //list all the issue in json file
    $scope.issues = Issues.list(); // using list(), specs up in factoring
    console.log($scope.issues);  

    //$scope.orderProp = 'id';    
}

function loadEvent($scope) {

}

function loadUnit($scope) {

}

function loadMember($scope) {
    
}