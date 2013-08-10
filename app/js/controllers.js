angular.module('app.service',['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {controller:loadIssue, templateUrl:'/angular-lqfb-redesign/app/issue.html'})
            .when('/events', {controller:loadEvent, templateUrl:'/angular-lqfb-redesign/app/events.html'})
            .when('/units', {controller:loadUnit, templateUrl:'/angular-lqfb-redesign/app/units.html'})
            .when('/members', {controller:loadMember, templateUrl:'/angular-lqfb-redesign/app/members.html'})
            .otherwise({redirect:'/'});
    })
    .factory('Issues', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/issue',
            {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'get', isArray:false},
            list:{isArray:true, method:'jsonp',
                  transformResponse: function (data, headers) {
                    return data.result;
                }}
        });
    }) // factoring 'Issues' to handle $resource response 
    .factory('Initiative', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/initiative',
            {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'get', isArray:false},
            list:{isArray:true, method:'jsonp',
                  transformResponse: function (data, headers) {
                    return data.result;
                }}
        });        
    })
    .factory('Area', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/area', 
                    {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'get', isArray:false},
            list:{isArray:true, method:'jsonp',
                  transformResponse: function (data, headers) {
                    return data.result;
                }}   
        });    
    })
    .factory('Unit', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/unit', 
                    {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'get', isArray:false},
            list:{isArray:true, method:'jsonp',
                  transformResponse: function (data, headers) {
                    return data.result;
                }}   
        });    
    })
    .factory('Member', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/member', 
                    {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'get', isArray:false},
            list:{isArray:true, method:'jsonp',
                  transformResponse: function (data, headers) {
                    return data.result;
                }}   
        });    
    }); 
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
        return (url == $location.path()) ? 'on' : '';
    }
}

function loadAction($scope) {
    $scope.actions = [
        { name:"new-issue", symbol: "+"}
    ];
}

function loadProfileMenu($scope) {

    $scope.items = [
        {name: "※　Profile"}
    ];
}
function loadIssue($scope, Issues, Initiative, Area) { //list all the issue in json file
    $scope.initiatives = Initiative.list();
    $scope.issues = Issues.list();   
    $scope.areas = Area.list();
    console.log($scope.initiatives);
    $scope.getStateClass = function (index) {
        var css = ["discussion", "voting", "admission", "verification"];
        return css[index%4];
    }
    $scope.getState = function (index) {
        var css = ["Discussion", "Voting", "New", "Frozen"];
        return css[index%4];
    }

}

function loadEvent($scope) {

}

function loadUnit($scope) {

}

function loadMember($scope) {

}