'use strict';

// Your function handler
module.exports.home = function (event, context, callback) {
  const html = `
    <!DOCTYPE html>
    <html lang="en-gb" dir="ltr">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Silicon Magi</title>
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
    <!-- Stripe Payment Form -->
    <div class="uk-container uk-container-center">
    <form action="/stripe" method="POST" id="payment-form">
    <span class="payment-errors"></span>
    <div class="form-row">
    <label>
    <span>Card Number</span>
    <input type="text" size="20" data-stripe="number">
    </label>
    </div>
    <div class="form-row">
    <label>
    <span>Expiration (MM/YY)</span>
    <input type="text" size="2" data-stripe="exp_month">
    </label>
    <span> / </span>
    <input type="text" size="2" data-stripe="exp_year">
    </div>
    <div class="form-row">
    <label>
    <span>CVC</span>
    <input type="text" size="4" data-stripe="cvc">
    </label>
    </div>
    <input type="submit" class="submit" value="Submit Payment">
    </form>
    </div>
    <!-- Navbar -->
    <div class="uk-container uk-container-center">
    <div class="uk-margin" >
    <nav class="uk-navbar">
    <a href="#offcanvas-1" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
    <a class="uk-navbar-brand uk-hidden-small" href="#home" data-uk-smooth-scroll><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="Silicon Magi logo">Silicon Magi</a>
    <ul class="uk-navbar-nav uk-hidden-small">
    <li><a href="#home" data-uk-smooth-scroll><i class="uk-icon-home uk-icon-large"></i>Home</a></li>
    <li><a href="#portfolio" data-uk-smooth-scroll><i class="uk-icon-magic uk-icon-large"></i>Portfolio</a></li>
    <li><a href="#aboutme" data-uk-smooth-scroll><i class="uk-icon-fire uk-icon-large"></i>About Me</a></li>
    <li><a href="#contact" data-uk-smooth-scroll><i class="uk-icon-user uk-icon-large"></i>Contact</a></li>
    </ul>
    <div class="uk-navbar-content uk-visible-small uk-display-inline-block"><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="Silicon Magi logo">Silicon Magi</div>
    </nav>
    </div>
    <!-- Offcanvas section -->
    <div id="offcanvas-1" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
    <ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav>
    <li><a href="#home" data-uk-smooth-scroll><img class="logo" src="https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg" alt="Silicon Magi logo">Silicon Magi</a></li>
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
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<!-- Set Stripe Key -->
<script type="text/javascript">
  Stripe.setPublishableKey('pk_test_Wkzi7vlivJrsgqpD1a05ndPk');
</script>
<!-- Create Token -->
<script>
  $(function() {
    var $form = $('#payment-form');
    $form.submit(function(event) {
      // Disable the submit button to prevent repeated clicks:
      $form.find('.submit').prop('disabled', true);

      // Request a token from Stripe:
      Stripe.card.createToken($form, stripeResponseHandler);

      // Prevent the form from being submitted:
      return false;
    });
  });
</script>
<!-- Stripe Response Handler -->
<script>
  function stripeResponseHandler(status, response) {
    // Grab the form:
    var $form = $('#payment-form');

    if (response.error) { // Problem!

      // Show the errors on the form:
      $form.find('.payment-errors').text(response.error.message);
      $form.find('.submit').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

      // Get the token ID:
      var token = response.id;

      // Insert the token ID into the form so it gets submitted to the server:
      $form.append($('<input type="hidden" name="stripeToken">').val(token));

      // Submit the form:
      $form.get(0).submit();
    }
  };
</script>
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
