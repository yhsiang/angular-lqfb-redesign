function loadLink(e,t){e.location=t,e.links=[{url:"/events",name:"Events"},{url:"/",name:"Issues"},{url:"/units",name:"Units"},{url:"/members",name:"Members"}],e.isActive=function(e){return e==t.path()?"on":""}}function loadAction(e){e.actions=[{name:"new-issue",symbol:"+"}]}function loadProfileMenu(e){e.items=[{name:"※　Profile"}]}function loadIssue(e,t,n,r){getIssues=function(){var r=t.list();r.$then(function(t){for(var r in t.data)t.data[r].initiatives=n.get({issue_id:t.data[r].id});e.issues=t.data})},getIssues(),e.getStateClass=function(e){var t=["discussion","voting","admission","verification"];return t[e%4]},e.getState=function(e){var t=["Discussion","Voting","New","Frozen"];return t[e%4]}}function loadEvent(e){}function loadUnit(e){}function loadMember(e){}angular.module("app.service",["ngResource"]).config(function(e){e.when("/",{controller:loadIssue,templateUrl:"/partials/issues.html"}).when("/events",{controller:loadEvent,templateUrl:"/partials/events.html"}).when("/units",{controller:loadUnit,templateUrl:"/partials/units.html"}).when("/members",{controller:loadMember,templateUrl:"/partials/members.html"}).otherwise({redirect:"/"})}).factory("Issues",function(e,t){return e("http://apitest.liquidfeedback.org\\:25520/issue",{callback:"JSON_CALLBACK"},{get:{method:"get",isArray:!1},list:{isArray:!0,method:"jsonp",transformResponse:function(e,t){return e.result}}})}).factory("Initiative",function(e){return e("http://apitest.liquidfeedback.org\\:25520/initiative",{alt:"json",callback:"JSON_CALLBACK"},{get:{method:"jsonp",params:{issue_id:"@issue_id"},isArray:!0,transformResponse:function(e,t){return e.result}},list:{method:"jsonp",isArray:!0,transformResponse:function(e,t){return e.result}}})}).factory("Area",function(e){return e("http://apitest.liquidfeedback.org\\:25520/area",{alt:"json",callback:"JSON_CALLBACK"},{get:{method:"get",isArray:!1},list:{isArray:!0,method:"jsonp",transformResponse:function(e,t){return e.result}}})}).factory("Unit",function(e){return e("http://apitest.liquidfeedback.org\\:25520/unit",{alt:"json",callback:"JSON_CALLBACK"},{get:{method:"get",isArray:!1},list:{isArray:!0,method:"jsonp",transformResponse:function(e,t){return e.result}}})}).factory("Member",function(e){return e("http://apitest.liquidfeedback.org\\:25520/member",{alt:"json",callback:"JSON_CALLBACK"},{get:{method:"get",isArray:!1},list:{isArray:!0,method:"jsonp",transformResponse:function(e,t){return e.result}}})}),angular.module("app",["app.service"])