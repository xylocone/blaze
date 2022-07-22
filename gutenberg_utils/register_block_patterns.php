<?php
function blaze_register_block_patterns()
{
    register_block_pattern_category('jumbotron', array(
        'label' => __("Jumbotron", 'blaze'),
    ));

    $PATTERN_1 = <<<HTML
<!-- wp:blaze/jumbotron {"padding":"8px","backgroundColor":"#000000","backButtonBackgroundColor":"#d6ff00","backButtonIconColor":"#020000","renderedHeight":555,"renderedWidth":710} -->
<div class="wp-block-blaze-jumbotron jumbotron" style="--jumbotron-height:100vh;--jumbotron-width:100%;--jumbotron-padding:8px;--jumbotron-background-color:#000000;--jumbotron-back-button-background-color:#d6ff00;--jumbotron-back-button-icon-color:#020000;--jumbotron-back-button-margin:2vmax;--jumbotron-rendered-height:555px;--jumbotron-rendered-width:710px"><button class="jumbotron__back-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"></path></svg></button><div class="jumbotron__sections-wrapper"><!-- wp:blaze/section {"sourcePageSlug":"contact","corners":[[0,0],[50,75],[50,100],[0,100]],"label":"contact","labelPosition":[10,75],"labelRotation":-90} -->
<div class="wp-block-blaze-section section" style="--section-clip-path:polygon(0% 0%, 50% 75%, 50% 100%, 0% 100%);--section-background-color:#16d97e;--section-label-rotation:rotate(-90deg);--section-label-color:black;--section-label-font-family:Comfortaa;--section-label-font-size:48px;--section-label-translation:translate(calc(10 * var(--jumbotron-rendered-width) / 100), calc(75 * var(--jumbotron-rendered-height) / 100))"><div class="section__container"><div class="section__label"><div class="section__label__wrapper"><h2 class="section__label__text">contact</h2><h2 class="section__label__clone">contact</h2><h2 class="section__label__clone">contact</h2><h2 class="section__label__clone">contact</h2><link href="https://fonts.googleapis.com/css2?family=Comfortaa&amp;text=contact" rel="stylesheet"/></div></div><div class="section__content" data-source-page-slug="contact"><div class="section__content__loader"><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div></div></div></div></div>
<!-- /wp:blaze/section -->

<!-- wp:blaze/section {"sourcePageSlug":"resume","corners":[[50,75],[100,0],[100,100],[50,100]],"backgroundColor":"#4ef3ff","label":"resume","labelPosition":[90,75],"labelRotation":90} -->
<div class="wp-block-blaze-section section" style="--section-clip-path:polygon(50% 75%, 100% 0%, 100% 100%, 50% 100%);--section-background-color:#4ef3ff;--section-label-rotation:rotate(90deg);--section-label-color:black;--section-label-font-family:Comfortaa;--section-label-font-size:48px;--section-label-translation:translate(calc(90 * var(--jumbotron-rendered-width) / 100), calc(75 * var(--jumbotron-rendered-height) / 100))"><div class="section__container"><div class="section__label"><div class="section__label__wrapper"><h2 class="section__label__text">resume</h2><h2 class="section__label__clone">resume</h2><h2 class="section__label__clone">resume</h2><h2 class="section__label__clone">resume</h2><link href="https://fonts.googleapis.com/css2?family=Comfortaa&amp;text=resume" rel="stylesheet"/></div></div><div class="section__content" data-source-page-slug="resume"><div class="section__content__loader"><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div></div></div></div></div>
<!-- /wp:blaze/section -->

<!-- wp:blaze/section {"sourcePageSlug":"about","corners":[[0,0],[100,0],[50,75],[50,75]],"backgroundColor":"#480c76","label":"about","labelPosition":[50,20],"labelColor":"#ffffff"} -->
<div class="wp-block-blaze-section section" style="--section-clip-path:polygon(0% 0%, 100% 0%, 50% 75%, 50% 75%);--section-background-color:#480c76;--section-label-rotation:rotate(0deg);--section-label-color:#ffffff;--section-label-font-family:Comfortaa;--section-label-font-size:48px;--section-label-translation:translate(calc(50 * var(--jumbotron-rendered-width) / 100), calc(20 * var(--jumbotron-rendered-height) / 100))"><div class="section__container"><div class="section__label"><div class="section__label__wrapper"><h2 class="section__label__text">about</h2><h2 class="section__label__clone">about</h2><h2 class="section__label__clone">about</h2><h2 class="section__label__clone">about</h2><link href="https://fonts.googleapis.com/css2?family=Comfortaa&amp;text=about" rel="stylesheet"/></div></div><div class="section__content" data-source-page-slug="about"><div class="section__content__loader"><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div></div></div></div></div>
<!-- /wp:blaze/section --></div></div>
<!-- /wp:blaze/jumbotron -->
HTML;

    $PATTERN_2 = <<<HTML
<!-- wp:blaze/jumbotron {"padding":"8px","backgroundColor":"#000000","backButtonBackgroundColor":"#d6ff00","backButtonIconColor":"#020000","renderedHeight":555,"renderedWidth":727} -->
<div class="wp-block-blaze-jumbotron jumbotron" style="--jumbotron-height:100vh;--jumbotron-width:100%;--jumbotron-padding:8px;--jumbotron-background-color:#000000;--jumbotron-back-button-background-color:#d6ff00;--jumbotron-back-button-icon-color:#020000;--jumbotron-back-button-margin:2vmax;--jumbotron-rendered-height:555px;--jumbotron-rendered-width:727px"><button class="jumbotron__back-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"></path></svg></button><div class="jumbotron__sections-wrapper"><!-- wp:blaze/section {"sourcePageSlug":"contact","corners":[[0,33],[100,33],[100,66],[0,66]],"label":"contact","labelPosition":[50,50]} -->
<div class="wp-block-blaze-section section" style="--section-clip-path:polygon(0% 33%, 100% 33%, 100% 66%, 0% 66%);--section-background-color:#16d97e;--section-label-rotation:rotate(0deg);--section-label-color:black;--section-label-font-family:Comfortaa;--section-label-font-size:48px;--section-label-translation:translate(calc(50 * var(--jumbotron-rendered-width) / 100), calc(50 * var(--jumbotron-rendered-height) / 100))"><div class="section__container"><div class="section__label"><div class="section__label__wrapper"><h2 class="section__label__text">contact</h2><h2 class="section__label__clone">contact</h2><h2 class="section__label__clone">contact</h2><h2 class="section__label__clone">contact</h2><link href="https://fonts.googleapis.com/css2?family=Comfortaa&amp;text=contact" rel="stylesheet"/></div></div><div class="section__content" data-source-page-slug="contact"><div class="section__content__loader"><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div></div></div></div></div>
<!-- /wp:blaze/section -->

<!-- wp:blaze/section {"sourcePageSlug":"resume","corners":[[0,66],[100,66],[100,100],[0,100]],"backgroundColor":"#4ef3ff","label":"resume","labelPosition":[82,85]} -->
<div class="wp-block-blaze-section section" style="--section-clip-path:polygon(0% 66%, 100% 66%, 100% 100%, 0% 100%);--section-background-color:#4ef3ff;--section-label-rotation:rotate(0deg);--section-label-color:black;--section-label-font-family:Comfortaa;--section-label-font-size:48px;--section-label-translation:translate(calc(82 * var(--jumbotron-rendered-width) / 100), calc(85 * var(--jumbotron-rendered-height) / 100))"><div class="section__container"><div class="section__label"><div class="section__label__wrapper"><h2 class="section__label__text">resume</h2><h2 class="section__label__clone">resume</h2><h2 class="section__label__clone">resume</h2><h2 class="section__label__clone">resume</h2><link href="https://fonts.googleapis.com/css2?family=Comfortaa&amp;text=resume" rel="stylesheet"/></div></div><div class="section__content" data-source-page-slug="resume"><div class="section__content__loader"><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div></div></div></div></div>
<!-- /wp:blaze/section -->

<!-- wp:blaze/section {"sourcePageSlug":"about","corners":[[0,0],[100,0],[100,33],[0,33]],"backgroundColor":"#480c76","label":"about","labelPosition":[15,15],"labelColor":"#ffffff"} -->
<div class="wp-block-blaze-section section" style="--section-clip-path:polygon(0% 0%, 100% 0%, 100% 33%, 0% 33%);--section-background-color:#480c76;--section-label-rotation:rotate(0deg);--section-label-color:#ffffff;--section-label-font-family:Comfortaa;--section-label-font-size:48px;--section-label-translation:translate(calc(15 * var(--jumbotron-rendered-width) / 100), calc(15 * var(--jumbotron-rendered-height) / 100))"><div class="section__container"><div class="section__label"><div class="section__label__wrapper"><h2 class="section__label__text">about</h2><h2 class="section__label__clone">about</h2><h2 class="section__label__clone">about</h2><h2 class="section__label__clone">about</h2><link href="https://fonts.googleapis.com/css2?family=Comfortaa&amp;text=about" rel="stylesheet"/></div></div><div class="section__content" data-source-page-slug="about"><div class="section__content__loader"><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div><div class="section__content__loader__bar"></div></div></div></div></div>
<!-- /wp:blaze/section --></div></div>
<!-- /wp:blaze/jumbotron -->
HTML;
    register_block_pattern('blaze/triangle', array(
        'title' => __('A Triangle with two Quadrilaterals', 'blaze'),
        'description' => _x('A Triangle that takes the center, with two Quadrilaterals at each side.', 'blaze'),
        'content' => $PATTERN_1,
        'categories' => ['jumbotron'],
    ));

    register_block_pattern('blaze/stripes', array(
        'title' => __('Three Stripes', 'blaze'),
        'description' => _x('Three Quadrilateral Stripes', 'blaze'),
        'content' => $PATTERN_2,
        'categories' => ['jumbotron'],
    ));

}

add_action('init', 'blaze_register_block_patterns');
