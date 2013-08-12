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
					'vendor/scripts/angular-bootstrap/ui-bootstrap-0.5.0.min.js',
					'vendor/scripts/angular-bootstrap/ui-bootstrap-tpls-0.5.0.min.js',
					'vendor/scripts/modernizr-2.6.2.min.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^(app|vendor)/
			},
			order: {
				before: [
					'vendor/styles/bootstrap.min.css',
					'vendor/styles/bootstrap-responsive.min.css'
				]
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