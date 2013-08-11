module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('<!DOCTYPE html>\n<html ng-app="app">\n <head>\n <meta charset="utf-8">\n <meta name="viewport" content="width=device-width">\n <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n <title>angular-lqfb-redesign</title>\n <link rel="stylesheet" href="/css/app.css">\n <script>\n window.brunch=window.brunch ||{};\n window.brunch[\'auto-reload\']={\n enabled:true\n};\n </script>\n <script src="/js/vendor.js"></script>\n <script src="/js/app.js"></script>\n </head>\n <body>\n <section class="bar nav"><a name="show-main-menu" class="current">Issues</a>\n <ul ng-controller="loadLink" class="main-menu">\n <li ng-repeat="link in links" ng-class="isActive(link.url)"><a href="#{{link.url}}">{{link.name}}</a></li>\n </ul>\n <ul style="display:none" class="main-menu-spinner">\n <li ng-repeat="link in links"></li>\n </ul><span ng-controller="loadAction" class="action"><a ng-repeat="action in actions" name="{{action.name}}" class="action-icon">{{action.symbol}}</a><span class="profile-menu"><a name="show-profile-menu" class="action-icon">me</a>\n <ul ng-controller="loadProfileMenu" style="display:none" class="profile-menu-spinner">\n <li href="#/" ng-repeat="item in items">{{item.name}}</li>\n </ul></span></span>\n </section>\n <section id="content-wrapper" ng-view></section>\n </body>\n</html>')}return buf.join("")};module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('<!DOCTYPE html>\n<html ng-app="app">\n <head>\n <meta charset="utf-8">\n <meta name="viewport" content="width=device-width">\n <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n <title>angular-lqfb-redesign</title>\n <link rel="stylesheet" href="/css/app.css">\n <script>\n window.brunch=window.brunch ||{};\n window.brunch[\'auto-reload\']={\n enabled:true\n};\n </script>\n <script src="/js/vendor.js"></script>\n <script src="/js/app.js"></script>\n </head>\n <body>\n <section class="bar nav"><a name="show-main-menu" class="current">Issues</a>\n <ul ng-controller="loadLink" class="main-menu">\n <li ng-repeat="link in links" ng-class="isActive(link.url)"><a href="#{{link.url}}">{{link.name}}</a></li>\n </ul>\n <ul style="display:none" class="main-menu-spinner">\n <li ng-repeat="link in links"></li>\n </ul><span ng-controller="loadAction" class="action"><a ng-repeat="action in actions" name="{{action.name}}" class="action-icon">{{action.symbol}}</a><span class="profile-menu"><a name="show-profile-menu" class="action-icon">me</a>\n <ul ng-controller="loadProfileMenu" style="display:none" class="profile-menu-spinner">\n <li href="#/" ng-repeat="item in items">{{item.name}}</li>\n </ul></span></span>\n </section>\n </body>\n</html>')}return buf.join("")};module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[]}return buf.join("")};module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('\n<div ng-repeat="issue in issues">\n <header class="bar level-1 issue"><span class="phase{{getStateClass($index)}}">{{getState($index)}}</span><span class="time-left meta-text">{{issue.admission_time.days}}days left</span><span class="action"><a class="action-icon new-initiative">+</a><a class="action-icon add-interest">☆</a><a class="action-delegation">● &gt;●-●</a></span></header>\n <article ng-repeat="key in issue.initiatives" class="bar level-2 initiative-title"><span class="user-status action"><span class="status direct-support">♂</span><a name="show-initiative-members" class="progress-bar"><span class="progress-amount direct-support"></span><span class="progress-amount indirect-support"><span class="progress-number">{{key.satisfied_supporter_count}}</span></span><span class="progress-amount potential-support"></span></a></span><span class="meta-text">i{{key.issue_id}}</span><span class="description-icon">■</span><span>{{key.name}}</span></article>\n <footer class="bar level-3"><span class="meta-text"><span>◆ g0v</span><span class="description-icon"></span><span>◎ Hackathon</span><span class="description-icon"></span><span>§ Fast Poll #12</span></span><span class="action"><a href="#/" class="action-icon">></a></span></footer>\n</div>')}return buf.join("")};module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[]}return buf.join("")};module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[]}return buf.join("")};