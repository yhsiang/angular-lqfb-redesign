angular.module('app.service',['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {controller:loadIssue, templateUrl:'/angular-lqfb-redesign/app/issue.html'})
            .when('/events', {controller:loadEvent, templateUrl:'/angular-lqfb-redesign/app/events.html'})
            .when('/units', {controller:loadUnit, templateUrl:'/angular-lqfb-redesign/app/units.html'})
            .when('/members', {controller:loadMember, templateUrl:'/angular-lqfb-redesign/app/members.html'})
            .otherwise({redirect:'/'});
    })
    .factory('Issues', function($resource){
        return $resource('/angular-lqfb-redesign/app/json/issues.json', {},{
            get: {method: 'GET', isArray:false},
            list:{isArray:true, method:'get',
                  transformResponse: function (data, headers) {
                  return JSON.parse(data).initiatives; 
                }}
        });
    }); // factoring 'Issues' to handle $resource response 
 
angular.module('app',['app.service']);

function loadLink($scope, $location) {
    $scope.location = $location;
    $scope.links = [
         { url: "/events", name: "Events"},
         { url: "/", name: "Issues"},
         { url: "/units", name: "Units"},
         { url: "/members", name: "Members"}
    ];
    $scope.isActive = function (url) {
        console.log(url);
        return (url == $location.path()) ? 'on' : '';
    }
}

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