<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <base href="/test1/">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<?php wp_head(); ?>
</head>

<body>

  <app-root>
    <div class="wrap-home">
      <div class="loading">
        <div class="uo">
          <img src="<?php echo get_template_directory_uri().'/assets/images/load.gif'; ?>" alt="">
          <p>Loading...</p>
        </div>
      </div>
    </div>

  </app-root>

  <?php wp_footer(); ?>

</body>
</html>
