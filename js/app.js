angular.module('app.service',['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {controller:listIssues, templateUrl:'partials/issues.html'})
            .when('/issue/:issue_id', {controller:loadIssue, templateUrl:'partials/issue.html'})
            .when('/events', {controller:loadEvent, templateUrl:'partials/events.html'})
            .when('/units', {controller:loadUnit, templateUrl:'partials/units.html'})
            .when('/members', {controller:loadMember, templateUrl:'partials/members.html'})
            .otherwise({redirect:'/'});
    })
    .factory('Issues', function ($resource, Initiative){
        return $resource('http://apitest.liquidfeedback.org\\:25520/issue',
            {callback:'JSON_CALLBACK'},{
            get: {method: 'jsonp', params:{id: '@id'}, isArray:false,
                  transformResponse: function (data, headers) {
                    return data.result[0];
                }},
            list:{method:'jsonp', params:{limit: '@limit'}, isArray:true,
                  transformResponse: function (data, headers) {
                    return data.result;
                }}
        });
    }) // factoring 'Issues' to handle $resource response 
    .factory('Initiative', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/initiative',
            {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'jsonp', params:{issue_id: '@issue_id'}, isArray:true,
                  transformResponse: function (data, headers) {
                    return data.result;
                }},
            list:{method:'jsonp', isArray:true,
                  transformResponse: function (data, headers) {
                    return data.result;
                }}
        });        
    })
    .factory('Area', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/area', 
                    {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'jsonp', params:{area_id: '@area_id'}, isArray:false,
                  transformResponse: function (data, headers) {
                    return data.result[0];
                }},
            list:{isArray:true, method:'jsonp',
                  transformResponse: function (data, headers) {
                    return data.result;
                }}   
        });    
    })
    .factory('Unit', function ($resource){
        return $resource('http://apitest.liquidfeedback.org\\:25520/unit', 
                    {alt:'json', callback:'JSON_CALLBACK'},{
            get: {method: 'jsonp', params:{unit_id: '@unit_id'}, isArray:false,
                  transformResponse: function (data, headers) {
                    return data.result[0];
                }},            
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
function listIssues($scope, Issues, Initiative, Area, Unit) { //list all the issue in json file
    getIssues = function () {
        var promise = Issues.list({limit: 30});
        promise.$then(function(result){
            for(var k in result.data) {
                result.data[k].initiatives = Initiative.get({issue_id: result.data[k].id});
                result.data[k].area = Area
                    .get({area_id: result.data[k].area_id})
                    .$then(function(value) {
                        if(value.status == '200') {
                            value.data.unit = Unit.get({unit_id: value.data.unit_id});
                            return value.data;
                        }
                    });
            }
            $scope.issues = result.data;
        });
    }
    getIssues();

    $scope.getStateClass = function (index) {
        var css = ["discussion", "voting", "admission", "verification"];
        return css[index%4];
    }
    $scope.getState = function (index) {
        var css = ["Discussion", "Voting", "New", "Frozen"];
        return css[index%4];
    }
}
function loadIssue($scope, $routeParams, Issues, Initiative, Area, Unit) {
    var issue_id = $routeParams.issue_id;
    $scope.initiatives = Initiative.get({issue_id: issue_id});
    $scope.issue = Issues.get({id: issue_id})
                        .$then(function (result) {
                            result.data.area = Area.get({area_id: result.data.area_id})
                                                .$then(function(result) {
                                                    result.data.unit = Unit.get({unit_id: result.data.unit_id});
                                                    return result.data;
                                                });
                            return result.data;
                        });
    formatTime = function (time) {
        console.log(time);
    }
}

function loadEvent($scope) {

}

function loadUnit($scope) {

}

function loadMember($scope) {

}