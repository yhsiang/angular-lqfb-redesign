module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html ng-app="app">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <title>angular-lqfb-redesign</title>\n    <link rel="stylesheet" href="css/app.css">\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch = {\n       enabled: true\n      };\n    </script>\n    <script src="js/vendor.js"></script>\n    <script src="js/app.js"></script>\n  </head>\n  <body>\n    <section class="bar nav"><a name="show-main-menu" class="current">Issues</a>\n      <ul ng-controller="loadLink" class="main-menu">\n        <li ng-repeat="link in links" ng-class="isActive(link.url)"><a href="#{{link.url}}">{{link.name}}</a></li>\n      </ul>\n      <ul style="display: none" class="main-menu-spinner">\n        <li ng-repeat="link in links"></li>\n      </ul><span ng-controller="loadAction" class="action"><a ng-repeat="action in actions" name="{{action.name}}" class="action-icon">{{action.symbol}}</a><span ng-controller="loadProfileMenu" class="profile-menu dropdown"><a name="show-profile-menu" class="action-icon dropdown-toggle">me</a>\n          <ul class="dropdown-menu">\n            <li ng-repeat="item in items">{{item.name}}</li>\n          </ul></span></span>\n    </section>\n    <section id="content-wrapper" ng-view></section>\n  </body>\n</html>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-repeat="event in events">\n  <header class="bar level-1 issue"><span class="time-left meta-text">{{event.occurrence}}</span></header>\n  <article class="bar level-2 initiative-title"> <span class="meta-text">{{event.event}}: </span><span class="description">{{event.state}}</span></article>\n  <footer class="bar level-3"><span class="meta-text">i{{event.issue_id}} Issue Name</span></footer>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div class="issue-detail-title">\n  <header class="bar level-1 issue"><span class="phase discussion">Discussion</span><span class="time-left meta-text">1 day 3 hrs left</span><span class="action"><a class="action-icon new-initiative">+</a><a class="action-icon add-interest">☆</a><a class="action-delegation">● > ●-●-</a></span></header>\n</div>\n<div class="issue-detail-content">\n  <aside class="level-2 meta-text"><span class="location"><span>◆ {{issue.area.unit.name}} </span><span class="description-icon">></span><span>◎ {{issue.area.name}}</span><span class="description-icon">></span><span>§ Fast Poll # {{issue.policy_id}}</span></span><span class="timestamp"><span> {{issue.created | date: \'yyyy-MM-dd HH:mm\'}}</span></span></aside>\n  <div ng-repeat="key in initiatives" class="initiative-wrapper">\n    <article class="bar level-2 initiative-title"><span class="user-status action"><span class="status direct-support"></span><a name="show-iniative-members" class="progress-bar"><span class="progress-amount direct-support"></span><span class="progress-amount indirect-support"><span class="progress-number">{{key.satisfied_supporter_count}}</span></span><span class="progress-amount potential-support"></span></a></span><span class="meta-text">i{{key.issue_id}}</span><span class="description-icon">■</span><span> {{key.name}}</span></article>\n    <aside style="display: none" class="bar level-2 initiative-members"></aside>\n    <aside class="bar level-2 initiative-meta"><span class="action"><a name="support-initiative" class="action-icon">☆</a><a name="subscribe-initiative" class="action-icon">☆</a><a name="collapse-initiative" ng-click="key.isCollapsed = true" class="action-icon">↑</a><a name="expand-initiative" ng-click="key.isCollapsed = false" class="action-icon">↓</a></span><span class="meta-text">{{key.created | date: \'yyyy-MM-dd HH:mm\'}} ● {{key.initiator.member.name}}</span></aside>\n    <article collapse="key.isCollapsed" class="bar level-2 initiative-content"><span>Fuga explicabo aut consequuntur non et assumenda. itaque ad possimus error quis id laboriosam aut aspernatur impedit minus. asperiores eum quo dicta voluptas vel voluptatem aut totam odit quasi voluptas dignissimos numquam minus. aut qui alias saepe ea facere voluptatum qui autem unde officia. quis odit est exercitationem dolorem et omnis. aut sit maxime hic quis        </span></article>\n    <div style="display: block" collapse="key.isCollapsed" class="suggestions-wrapper">\n      <aside class="bar level-2 initiative-suggestion"><span class="action"><a name="new-suggestion" class="action-icon new">＋</a><a name="collapse-suggestions" ng-click="key.suggestionsCollapsed = true" class="action-icon collapse">↑ </a><a name="expand-suggestions" ng-click="key.suggestionsCollapsed = false" class="action-icon expand">↓</a></span><span>Suggestions ({{key.suggestions.length}})</span></aside>\n      <div ng-repeat="suggestion in key.suggestions" collapse="key.suggestionsCollapsed" class="suggestion-wrapper">\n        <header class="bar level-3 suggestion-title"><span class="user-status action"><span class="status direct-support">♀</span><a name="show-suggestion-members" class="progress-bar"><span class="progress-amount direct-support"></span><span class="progress-amount indirect-support"><span class="progress-number">25</span></span><span class="progress-amount potential-support"></span></a><span class="status direct-support">♀</span><a name="show-suggestion-members" class="progress-bar"><span class="progress-amount direct-support"></span><span class="progress-amount indirect-support"><span class="progress-number">25</span></span><span class="progress-amount potential-support"></span></a></span><span class="description-icon">■</span><span> {{suggestion.name}}</span></header>\n        <aside style="display: none" class="bar"></aside>\n        <aside style="display: none" class="bar"></aside>\n        <article style="display: none" class="bar level-3 suggestion-content"></article>\n      </div>\n    </div>\n  </div>\n</div><!--					\n<div style="display: block" collapse="key.isCollapsed" class="argument-pros-wrapper">\n  <aside class="bar level-2 initiative-argument"><span class="action"><a name="new-arugment-pro" class="action-icon">+</a><a name="collapse-arugment-pros" class="action-icon">↑ </a><a name="expand-arugment-pros" class="action-icon">↓</a></span><span>Argument Pros (2)</span></aside>\n  <div class="argument-pro-wrapper">\n    <header class="bar level-3 argument-title"><span class="user-status action"><a name="show-argument-pro-members"><span class="status direct-support">♀</span><span class="rating">+25</span><span class="status direct-support">♀</span><span class="rating">-25</span><span class="rating">=0</span></a></span><span class="description-icon">■</span><span>Perspiciatis sapiente modi culpa</span></header>\n    <aside style="display: none" class="bar level-3 argument-members"></aside>\n    <aside style="display: none" class="bar level-3 argument-meta"></aside>\n    <article style="display:none" class="bar level-3 argument-content"></article>\n  </div>\n</div>\n<div style="display: block" collapse="key.isCollapsed" class="argument-cons-wrapper"></div>-->\n<footer class="bar level-1 meta-text"><span>Created...</span></footer>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-repeat="issue in issues">\n  <header class="bar level-1 issue"><span class="phase {{getStateClass($index)}}">{{getState($index)}}</span><span class="time-left meta-text">{{issue.admission_time.days}} days left</span><span class="action"><a class="action-icon new-initiative">+</a><a class="action-icon add-interest">☆</a><a class="action-delegation">● &gt; ●-●</a></span></header>\n  <article ng-repeat="key in issue.initiatives" class="bar level-2 initiative-title"><span class="user-status action"><span class="status direct-support">♂</span><a name="show-initiative-members" class="progress-bar"><span class="progress-amount direct-support"> </span><span class="progress-amount indirect-support"> <span class="progress-number">{{key.satisfied_supporter_count}}</span></span><span class="progress-amount potential-support"> </span></a></span><span class="meta-text">i{{key.issue_id}}</span><span class="description-icon">■</span><span>{{key.name}}</span></article>\n  <footer class="bar level-3"><span class="meta-text"><span>◆ {{issue.area.unit.name}}</span><span class="description-icon"></span><span>◎ {{issue.area.name}}</span><span class="description-icon"></span><span>§ Fast Poll # {{issue.policy_id}}</span></span><span class="action"><a href="#/issue/{{issue.id}}" class="action-icon">></a></span></footer>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-repeat="member in members">\n  <article class="bar level-2 initiative-title">{{member.name}}</article>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-repeat="unit in units">\n  <article class="bar level-2 initiative-title">{{unit.name}}</article>\n</div>');
}
return buf.join("");
};