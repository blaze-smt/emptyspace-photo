<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>emptyspace.photo</title>
    <?= css('assets/css/home.css') ?>
    <?= js('assets/js/seasons.js') ?>
</head>
<body>
<?php echo file_get_contents("assets/images/emptyspace-logo.svg"); ?>
<header>
    <h1>Design, development, and photography by <a href="https://blazesmith.xyz/" target="_blank">Blaze Smith</a></h1>
    <div class="text-wrapper"><span>This season's color:</span> <div class="season-color">color</div></div>
</header>

<section class="image-container">

<?php foreach ($page->gallery()->toStructure()->flip() as $item): ?>
  <?php if ($image = $page->image($item->image()->toFiles()->first()->filename())): ?>
    <figure>
      <img src="<?= $image->url() ?>" alt="<?= $item->altText()->escape() ?>">
      <figcaption><?= $item->title()->html() ?></figcaption>
    </figure>
  <?php endif; ?>
<?php endforeach; ?>




</section>

</body>
</html>
