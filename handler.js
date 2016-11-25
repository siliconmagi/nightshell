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
    <title>Nightshell</title>
    <!-- CSS imports -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/css/uikit.min.css" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/css/uikit.gradient.min.css" rel="stylesheet" type="text/css">
    <!-- Favicons -->
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon.ico">
    <link rel="icon" sizes="16x16 32x32 64x64" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon.ico">
    <link rel="icon" type="image/png" sizes="196x196" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-192.png">
    <link rel="icon" type="image/png" sizes="160x160" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-160.png">
    <link rel="icon" type="image/png" sizes="96x96" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-96.png">
    <link rel="icon" type="image/png" sizes="64x64" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-64.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-16.png">
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
    <style>
    body {
      background-color: #8A3C3C
    }
  .uk-navbar {
    position: fixed;
              top:0px;
                  z-index: 100;
  }
  .logo {
    height: 40px;
            padding-right: 10px;
  }
  .uk-panel {
    padding: 10px;
             text-align: center;
  }
  .uk-navbar {
    background-image: linear-gradient(to bottom,#8A3C3C,#5d4040);
  }
  .uk-offcanvas-bar {
    background: #8A3C3C;
  }
  .uk-navbar-toggle {
    color: white;
  }

  .uk-navbar {
    color: white;
           box-shadow: 5px 5px 5px black;

  }
  body {
    color: white;
  }
  .uk-subnav > * > *{
    color: white;
  }
  h2 {
    color: white;
  }
  .uk-navbar-brand {
    color: white;
  }
  .uk-navbar-nav > li > a {
    color: white;
           text-shadow: 0 1px 0 #774040;

  }
  .uk-navbar-brand, .uk-navbar-content, .uk-navbar-toggle {
    text-shadow: 0 1px 0 #774040;
  }
  .uk-container-center {
    padding-top: 60px;
  }
  /* Panel CSS */
  .uk-panel {
    padding: 20px;
  }

  .uk-navbar-nav > li.uk-open > a, .uk-navbar-nav > li:hover > a, .uk-navbar-nav > li > a:focus {
    color: #F6A25B;
  }
  .uk-navbar-brand:focus, .uk-navbar-brand:hover {
    color: #F6A25B;
  }
  .uk-nav-offcanvas > .uk-open > a, html:not(.uk-touch) .uk-nav-offcanvas > li > a:focus, html:not(.uk-touch) .uk-nav-offcanvas > li > a:hover {
    color: #F6A25B;

  }
  </style>
    </head>
    <!-- Body -->
    <body>
    <!-- Grid -->
    <div class="uk-container uk-container-center">
    <ul id="filter" class="uk-subnav">
    <h2>Filtering</h2>
    <li class="uk-active" data-uk-filter=""><a href="#"><button class="uk-button uk-button-primary" type="button">All</button></a></li>
    <li data-uk-filter="test-a"><a href="#"><button class="uk-button uk-button-primary" type="button">Test A</button></a></li>
    <li data-uk-filter="test-b"><a href="#"><button class="uk-button uk-button-primary" type="button">Test B</button></a></li>
    </ul>
    </div>
    <!-- Panels -->
    <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4" data-uk-grid="{controls:'#filter', filter:'test-a,test-b', gutter:10}">
    <div data-uk-filter="test-a">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/blame.jpg" alt="blame">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-b">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/googling.jpg" alt="google">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-a">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/blame.jpg" alt="blame">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-b">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/googling.jpg" alt="google">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-b">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/googling.jpg" alt="google">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-a">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/blame.jpg" alt="blame">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-b">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/googling.jpg" alt="google">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    <div data-uk-filter="test-a,test-b">
    <figure class="uk-overlay uk-overlay-hover">
    <img src="https://raw.githubusercontent.com/siliconmagi/pictures/master/hacker.jpg" alt="hack">
    <figcaption class="uk-overlay-panel uk-overlay-background uk-overlay-scale uk-flex uk-flex-center uk-flex-middle uk-text-center">
    <div>
    <h3>Title</h3>
    <p>Lorem <a href="#">ipsum dolor</a> sit amet.</p>
    <p class="uk-margin-small"><button class="uk-button">Button</button> <button class="uk-button uk-button-primary">Button</button></p>
    <p class="uk-margin-small"><a href="#" class="uk-icon-button uk-icon-github"></a> <a href="#" class="uk-icon-button uk-icon-twitter"></a></p>
    <a class="uk-icon-search uk-icon-small" href="#"></a>
    <a class="uk-icon-share uk-icon-small" href="#"></a>
    <a class="uk-position-cover" href="#"></a>
    </div>
    </figcaption>
    </figure>
    </div>
    </div>
    <!-- Navbar -->
    <div class="uk-container uk-container-center">
    <div class="uk-margin" >
    <nav class="uk-navbar">
    <a href="#offcanvas-1" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
    <a class="uk-navbar-brand uk-hidden-small" href="#home" data-uk-smooth-scroll><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="nightshell logo">Nightshell</a>
    <ul class="uk-navbar-nav uk-hidden-small">
    <li><a href="#home" data-uk-smooth-scroll><i class="uk-icon-home uk-icon-large"></i>Home</a></li>
    <li><a href="#portfolio" data-uk-smooth-scroll><i class="uk-icon-magic uk-icon-large"></i>Portfolio</a></li>
    <li><a href="#aboutme" data-uk-smooth-scroll><i class="uk-icon-fire uk-icon-large"></i>About Me</a></li>
    <li><a href="#contact" data-uk-smooth-scroll><i class="uk-icon-user uk-icon-large"></i>Contact</a></li>
    </ul>
    <div class="uk-navbar-content uk-visible-small uk-display-inline-block"><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="Nightshell logo">Nightshell</div>
    </nav>
    </div>
    <!-- Offcanvas section -->
    <div id="offcanvas-1" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
    <ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav>
    <li><a href="#home" data-uk-smooth-scroll><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="Nightshell logo">Nightshell</a></li>
    <li><a href="#home" data-uk-smooth-scroll><i class="uk-icon-home uk-icon-large"></i>Home</a></li>
    <li><a href="#portfolio" data-uk-smooth-scroll><i class="uk-icon-magic uk-icon-large"></i>Portfolio</a></li>
    <li><a href="#aboutme" data-uk-smooth-scroll><i class="uk-icon-fire uk-icon-large"></i>About Me</a></li>
    <li><a href="#contact" data-uk-smooth-scroll><i class="uk-icon-user uk-icon-large"></i>Contact</a></li>
    </ul>
  </div>
</div>
    </div>
    <div class="uk-block uk-block-primary uk-block-large uk-contrast">
      <div class="uk-container uk-container-center">
        <h1 id="aboutme">About Me</h1>
        <div class="uk-grid uk-grid-match" data-uk-grid-margin>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-block uk-block-secondary uk-block-large uk-contrast">
      <div class="uk-container uk-container-center">
        <h1>Technologies</h1>
        <div class="uk-grid uk-grid-match" data-uk-grid-margin>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-block uk-block-muted">
      <div class="uk-container uk-container-center">
        <h1 id="contact">Contact</h1>
        <div class="uk-grid uk-grid-match" data-uk-grid-margin>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="uk-width-medium-1-3">
            <div class="uk-panel">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- JS scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/uikit.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/core/offcanvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/core/smooth-scroll.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/components/grid.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.2/js/components/sticky.min.js"></script>
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
