<?php

require_once 'gutenberg.php';

function blaze_enqueue_common_styles()
{
    wp_enqueue_style('blaze-common-styles', get_template_directory_uri() . '/common.css');
}

add_action('wp_enqueue_scripts', 'blaze_enqueue_common_styles');
add_editor_style(get_template_directory_uri() . '/common.css');
