angular.module('app.service',['ngResource'])
  .factory('Filters', function (){
    return {
      unit: 'global',
      issue: 'open',
      stage: 'any',
      voting: 'any',
      interest: 'any'
    };
  })
  .factory('Issues', function ($resource, Initiative){
      return $resource('http://apitest.liquidfeedback.org\\:25520/issue',
          {callback:'JSON_CALLBACK'},{
          get: {method: 'jsonp', params:{issue_id: '@issue_id'}, isArray:false,
                transformResponse: function (data, headers) {
                  return data.result[0];
              }},
          list:{method:'jsonp', params:{limit: '@limit', issue_state: '@issue_state'}, isArray:true,
                transformResponse: function (data, headers) {
                  return data.result;
              }}
      });
  }) // factoring 'Issues' to handle $resource response 
  .factory('Initiative', function ($resource){
      return $resource('http://apitest.liquidfeedback.org\\:25520/initiative',
          {alt:'json', callback:'JSON_CALLBACK'},{
          get: {method: 'jsonp', params:{issue_id: '@issue_id' }, isArray:true,
                transformResponse: function (data, headers) {
                  return data.result;
              }},
          list:{method:'jsonp', isArray:true,
                transformResponse: function (data, headers) {
                  return data.result;
              }}
      });        
  })
  .factory('Initiator', function ($resource){
      return $resource('http://apitest.liquidfeedback.org\\:25520/initiator',
          {alt:'json', callback:'JSON_CALLBACK'},{
          get: {method: 'jsonp', params:{intiative_id: '@initiative_id' }, isArray:false,
                transformResponse: function (data, headers) {
                  return data.result[0];
              }},
          list:{method:'jsonp', isArray:true,
                transformResponse: function (data, headers) {
                  return data.result;
              }}
      });        
  })
  .factory('Draft', function ($resource){
      return $resource('http://apitest.liquidfeedback.org\\:25520/suggestion',
          {alt:'json', callback:'JSON_CALLBACK'},{
          get: {method: 'jsonp', params:{initiative_id: '@initiative_id', current_draft: true}, isArray: false,
                transformResponse: function (data, headers) {
                  return data.result[0];
              }},
          list:{method:'jsonp', isArray:true,
                transformResponse: function (data, headers) {
                  return data.result;
              }}
      });        
  })    
  .factory('Suggestion', function ($resource){
      return $resource('http://apitest.liquidfeedback.org\\:25520/suggestion',
          {alt:'json', callback:'JSON_CALLBACK'},{
          get: {method: 'jsonp', params:{initiative_id: '@initiative_id'}, isArray:true,
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
          get: {method: 'jsonp', params:{member_id: '@member_id'}, isArray:false,
                transformResponse: function (data, headers) {
                  return data.result[0];
              }},
          list:{isArray:true, method:'jsonp',
                transformResponse: function (data, headers) {
                  return data.result;
              }}   
      });    
  })
  .factory('Event', function ($resource){
      return $resource('http://apitest.liquidfeedback.org\\:25520/event', 
                  {alt:'json', callback:'JSON_CALLBACK'},{
          get: {method: 'get', isArray:false},
          list:{isArray:true, method:'jsonp',
                transformResponse: function (data, headers) {
                  return data.result;
              }}   
      });    
  });
angular.module('app',['app.service', 'ui.bootstrap'])
  .config(function ($routeProvider) {
      $routeProvider
          .when('/', {controller:listIssues, templateUrl:'partials/issues.html'})
          .when('/issue/:issue_id', {controller:loadIssue, templateUrl:'partials/issue.html'})
          .when('/events', {controller:loadEvent, templateUrl:'partials/events.html'})
          .when('/units', {controller:loadUnit, templateUrl:'partials/units.html'})
          .when('/members', {controller:loadMember, templateUrl:'partials/members.html'})
          .otherwise({redirect:'/'});
  });
function NavCtrl($scope, $location, $timeout, Filters, Issues, Initiative, Area, Unit) {
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

  $scope.actions = [
      { name:"new-issue", symbol: "+"},
      { name:"show-issue-filter", symbol: "~"},
      { name:"search", symbol: "⊕"},
      { name:"show-hint", symbol: "?"}
  ];

  $scope.items = [
      {name: "※　Profile"}
  ];

  $scope.filterCollapsed =true;

  $scope.filters = Filters;

}

function listIssues($scope, $timeout, Filters, Issues, Initiative, Area, Unit) { //list all the issue in json file
  $scope.filters = Filters;
  getIssues = function (issue_state) {
    if(issue_state == 'all')
      issue_state = undefined;
    var promise = Issues.list({limit: 30, issue_state: issue_state});
    promise.$then(function(result){
      for(var k in result.data) {
        result.data[k].initiatives = Initiative.get({issue_id: result.data[k].id});
        result.data[k].area 
        = Area
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
  $scope.$watch('filters.issue', function(issue_state) {
    alert('Loading '+issue_state+' Issues');
    $timeout(function () {
      $scope.$apply(getIssues(issue_state));
    }, 500);
  });

  $scope.getStateClass = function (index) {
      var css = ["discussion", "voting", "admission", "verification"];
      return css[index%4];
  }
  $scope.getState = function (index) {
      var css = ["Discussion", "Voting", "New", "Frozen"];
      return css[index%4];
  }
  //*/
}

function loadIssue($scope, $routeParams, Issues, Initiative, Area, Unit, Suggestion, Initiator, Member, Draft) {
var issue_id = $routeParams.issue_id;
$scope.initiatives 
  = Initiative.get({issue_id: issue_id})
      .$then(function (response){
          var items = [];
          angular.forEach(response.data, function (item) {
              item.isCollapsed = true;
              item.draft = Draft.get({initiative_id: item.id});
              item.suggestions = Suggestion.get({initiative_id: item.id});
              item.initiator = Initiator.get({initiative_id: item.id})
                                  .$then(function (res) {
                                      res.data.member = Member.get({member_id: res.data.member_id});
                                      return res.data;
                                  });

              item.suggestionsCollapsed = true;
              items.push(item);
          });
          console.log(items);
          return items;
      });
$scope.issue 
  = Issues.get({issue_id: issue_id})
      .$then(function (result) {
        result.data.area 
          = Area.get({area_id: result.data.area_id})
              .$then(function(result) {
                result.data.unit 
                  = Unit.get({unit_id: result.data.unit_id});
                return result.data;
              });
        return result.data
      });
}

function loadEvent($scope, Event) {
  getEvents = function () {
      var promise = Event.list({limit: 30});
      promise.$then(function(result){
          for(var k in result.data) {
              result.data[k].events = Event.get({id: result.data[k].id});
              
              console.log(result.data[k]); 
              
          }
          
          $scope.events = result.data;
          
      });
      
      //to add state_change array
  }

 getEvents();
}

function loadUnit($scope, Unit) {
  getUnits = function () {
      var promise = Unit.list({limit: 30});
      promise.$then(function(result){
          for(var k in result.data) {
              result.data[k].units = Unit.get({id: result.data[k].id});
              //if(result.data[k].parent_id != null){
                  console.log(result.data[k].parent_id)
                  //to build the unit tree for diplaying with css classes
              
              //}
              console.log(result.data[k]); 
              
          }
          $scope.units = result.data;
      });
  }

 getUnits();

}

function loadMember($scope, Member) {
  getMembers = function () {
      var promise = Member.list({limit: 30});
      promise.$then(function(result){
          for(var k in result.data) {
              result.data[k].members = Member.get({id: result.data[k].id});
              console.log(result.data[k]); 
              
          }
          $scope.members = result.data;
      });
  }

 getMembers();
  //console.log($scope.members); 
}