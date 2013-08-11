exports.config = {
	modules: {
		definition: false,
		wrapper: false
	},
	paths: {
		'public': '_public'
	},
	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': /^vendor/
			},
			order: {
				before: [
					'vendor/scripts/console-helper.js',
					'vendor/scripts/jquery-1.9.1.min.js',
					'vendor/scripts/angular/angular.min.js',
					'vendor/scripts/angular/angular-resource.min.js',
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^(app|vendor)/
			}
		},
		templates: {
			joinTo: 
				'js/templates.js'
		}

	},
	plugins: {
		jade: {
			pretty: 'yes'
		}
	}
}