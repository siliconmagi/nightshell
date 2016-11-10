'use strict';

// Your function handler
module.exports.html = function (event, context, callback) {
	let dynamicHtml;
	/* check for GET params and use if available */
	if (event.queryStringParameters && event.queryStringParameters.name) {
		// yourendpoint.com/dev/landing-page?name=bob
		dynamicHtml = `<p>Hey ${event.queryStringParameters.name}</p>`;
	} else {
		dynamicHtml = '';
	}

	const html = `
		<!DOCTYPE html>
		<html lang="en-gb" dir="ltr">

		<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Navbar - UIkit tests</title>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/css/uikit.min.css" rel="stylesheet" type="text/css">
		<link href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/css/components/sticky.min.css" rel="stylesheet" type="text/css">
		<link href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/css/uikit.gradient.min.css" rel="stylesheet" type="text/css">
		<link rel="shortcut icon" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon.ico">
		<link rel="icon" sizes="16x16 32x32 64x64" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon.ico">
		<link rel="icon" type="imagehttps://raw.githubusercontent.com/siliconmagi/pictures/master/png" sizes="196x196" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-192.png">
		<link rel="icon" type="imagehttps://raw.githubusercontent.com/siliconmagi/pictures/master/png" sizes="160x160" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-160.png">
		<link rel="icon" type="imagehttps://raw.githubusercontent.com/siliconmagi/pictures/master/png" sizes="96x96" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-96.png">
		<link rel="icon" type="imagehttps://raw.githubusercontent.com/siliconmagi/pictures/master/png" sizes="64x64" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-64.png">
		<link rel="icon" type="imagehttps://raw.githubusercontent.com/siliconmagi/pictures/master/png" sizes="32x32" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-32.png">
		<link rel="icon" type="imagehttps://raw.githubusercontent.com/siliconmagi/pictures/master/png" sizes="16x16" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-16.png">
		<link rel="apple-touch-icon" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-180.png">
		<meta name="msapplication-TileColor" content="#FFFFFF">
		<meta name="msapplication-TileImage" content="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-144.png">
		<meta name="msapplication-config" content="https://raw.githubusercontent.com/siliconmagi/pictures/master/browserconfig.xml">
		<style type="text/css">
		body {
			background-color: purple;
		}
	.logo {
		height: 40px;
						padding-right: 10px;
	}
	</style>
		</head>

		<body>

		<div class="uk-container uk-container-center">

		<div class="uk-margin">

		<nav class="uk-navbar">

		<a href="#offcanvas-1" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>

		<a class="uk-navbar-brand uk-hidden-small" href=""><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="Silicon Magi Logo">Silicon Magi</a>

		<ul class="uk-navbar-nav uk-hidden-small">
		<li class="uk-active"><a href=""><i class="uk-icon-home uk-icon-large"></i>Home</a></li>
		<li><a href=""><i class="uk-icon-user uk-icon-large"></i>Contact</a></li>
		<li><a href=""><i class="uk-icon-fire uk-icon-large"></i>About Me</a></li>

		<li class="uk-parent" data-uk-dropdown>
		<a><i class="uk-icon-magic uk-icon-large"></i>Portfolio</a>

		<div class="uk-dropdown uk-dropdown-navbar">
		<ul class="uk-nav uk-nav-navbar">
		<li><a href="#">Item</a></li>
		<li><a href="#">Another item</a></li>
		<li><a href="http://getuikit.com">External</a></li>
		<li class="uk-nav-header">Header</li>
		<li><a href="#">Item</a></li>
		<li><a href="#">Another item</a></li>
		<li class="uk-nav-divider"></li>
		<li><a href="#">Separated item</a></li>
		</ul>
		</div>

		</li>
		<li class="uk-parent" data-uk-dropdown>
		<a><i class="uk-icon-pencil uk-icon-large"></i>Articles</a>

		<div class="uk-dropdown uk-dropdown-navbar">
		<ul class="uk-nav uk-nav-navbar">
		<li><a href="#">Item</a></li>
		<li><a href="#">Another item</a></li>
		<li><a href="http://getuikit.com">External</a></li>
		<li class="uk-nav-header">Header</li>
		<li><a href="#">Item</a></li>
		<li><a href="#">Another item</a></li>
		<li class="uk-nav-divider"></li>
		<li><a href="#">Separated item</a></li>
		</ul>
		</div>

		</li>
		</ul>

		<div class="uk-navbar-content uk-hidden-small">
		<form class="uk-form uk-margin-remove uk-display-inline-block">
		<input class="uk-form-width-small" type="text" placeholder="Search">
		<button class="uk-button uk-button-primary">Submit</button>
		</form>
		</div>
		<div class="uk-navbar-content uk-navbar-center uk-visible-small">Silicon Magi</div>

		</nav>

		</div>

		<div id="offcanvas-1" class="uk-offcanvas">

		<div class="uk-offcanvas-bar">

		<div class="uk-panel">Lorem ipsum dolor sit amet, <a href="#">consetetur</a> sadipscing elitr.</div>

		</div>

		</div>

		</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/uikit.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/components/sticky.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/core/offcanvas.min.js"></script>
		</body>
		</html>
		`;

	const response = {
		statusCode: 200,
		headers: {
			'Content-Type': 'text/html',
		},
		body: html,
	};
	// callback will send HTML back
	callback(null, response);
};
