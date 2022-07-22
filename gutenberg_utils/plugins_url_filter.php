<?php

/**
 * When registering blocks using block.json files, the responsible PHP functions assume that the blocks are within a plugin,
 * and therefore use plugins_url() function to internally resolve relative paths
 */
add_filter('plugins_url', function ($url, $path, $plugin) {
    $first_pos = strpos($url, 'wp-content');
    $last_pos = strrpos($url, 'wp-content');
    $url = substr($url, 0, $first_pos) . substr($url, $last_pos, strlen($url) - $last_pos);
    return $url;
}, 10, 3);
