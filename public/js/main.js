var actionsBody = {
"show-main-menu": 
	{ "scope": "body", "execution": {"change": [".main-menu-spinner"], "hide": [".profile-menu-spinner"]} },
"show-profile-menu": 
	{ "scope": "body", "execution": {"change": [".profile-menu-spinner"], "hide": [".main-menu-spinner"]} },
"show-hint": 
	{ "scope": "body", "execution": {"change": [".help"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
"search": 
	{ "scope": "body", "execution": {"change": [".search-bar"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
"new-issue": 
	{ "scope": "body", "execution": {"show": [".new-issue"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
"show-issue-filter": 
	{ "scope": "body", "execution": {"change": [".issue-filter"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
"show-pad": 
	{ "scope": "body", "execution": {"change": [".discussion-pad"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
"collapse-all-initiatives": 
	{ "scope": "body", "execution": {"hide": [".initiative-members", ".initiative-content", ".suggestions-wrapper", ".suggestion-members", ".suggestion-meta", ".suggestion-content", ".argument-pros-wrapper", ".argument-cons-wrapper", ".argument-members", ".argument-meta", ".argument-content"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
"expand-all-initiatives": 
	{ "scope": "body", "execution": {"show": [".initiative-members", ".initiative-content", ".suggestions-wrapper", ".suggestion-members", ".suggestion-meta", ".suggestion-content", ".argument-pros-wrapper", ".argument-cons-wrapper", ".argument-members", ".argument-meta", ".argument-content"], "hide": [".main-menu-spinner", ".profile-menu-spinner"]} },
};

var actionsInitiative = {
"show-initiative-members": 
	{ "scope": ".initiative-wrapper", "execution": {"change": [".initiative-members"]} },
"collapse-initiative": 
	{ "scope": ".initiative-wrapper", "execution": {"hide": [".initiative-content", ".suggestions-wrapper", ".argument-pros-wrapper", ".argument-cons-wrapper"]} },
"expand-initiative": 
	{ "scope": ".initiative-wrapper", "execution": {"show": [".initiative-content", ".suggestions-wrapper", ".argument-pros-wrapper", ".argument-cons-wrapper"]} },
};

var actionsSuggestions = {
"collapse-suggestions": 
	{ "scope": ".suggestions-wrapper", "execution": {"hide": [".suggestion-meta", ".suggestion-content"]} },
"expand-suggestions": 
	{ "scope": ".suggestions-wrapper", "execution": {"show": [".suggestion-meta", ".suggestion-content"]} },
"new-suggestion": 
	{ "scope": ".suggestions-wrapper", "execution": {"show": [".new-suggestion"]} },
};

var actionsArgumentPros = {
"collapse-argument-pros": 
	{ "scope": ".argument-pros-wrapper", "execution": {"hide": [".argument-meta", ".argument-content"]} },
"expand-argument-pros": 
	{ "scope": ".argument-pros-wrapper", "execution": {"show": [".argument-meta", ".argument-content"]} },
"new-argument-pro": 
	{ "scope": ".argument-pros-wrapper", "execution": {"show": [".new-argument"]} },
};

var actionsArgumentCons = {
"collapse-argument-cons": 
	{ "scope": ".argument-cons-wrapper", "execution": {"hide": [".argument-meta", ".argument-content"]} },
"expand-argument-cons": 
	{ "scope": ".argument-cons-wrapper", "execution": {"show": [".argument-meta", ".argument-content"]} },
"new-argument-con": 
	{ "scope": ".argument-cons-wrapper", "execution": {"show": [".new-argument"]} },
};

var actionsSuggestion = {
"show-suggestion-members": 
	{ "scope": ".suggestion-wrapper", "execution": {"change": [".suggestion-members"]} },
};

var actionsArgumentPro = {
"show-argument-pro-members": 
	{ "scope": ".argument-pro-wrapper", "execution": {"change": [".argument-members"]} },
};

var actionsArgumentCon = {
"show-argument-con-members": 
	{ "scope": ".argument-con-wrapper", "execution": {"change": [".argument-members"]} },
};

var change = function(target){
	target.slideToggle("fast");
};
var show = function(target){
	target.slideDown("fast");
};
var hide = function(target){
	target.slideUp("fast");
};

var setup = function(hash){
	for (var actionButton in hash) {
		for (var action in hash[actionButton]["execution"]) {
			var target = hash[actionButton]["execution"][action];
			$( "[name='"+actionButton+"']" ).on("click tap", {action: action, target: target} , function(e) {
				for (var i = 0; i < e.data.target.length; i++) {
					window[e.data.action]($(this).parents(hash[actionButton]["scope"]).find(e.data.target[i]));
				};
			});
		};
	};
}

setup(actionsBody);
setup(actionsInitiative);
setup(actionsSuggestions);
setup(actionsArgumentPros);
setup(actionsArgumentCons);
setup(actionsSuggestion);
setup(actionsArgumentPro);
setup(actionsArgumentCon);

