<?php

/**
 * Load up all the gutenberg utilities from ./gutenberg_utils
 */
$gutenberg_utils = array_filter(glob(__DIR__ . '/gutenberg_utils/*.php'), 'is_file');

foreach ($gutenberg_utils as $gutenberg_util) {
    require_once $gutenberg_util;
}
