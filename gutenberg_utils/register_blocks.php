<?php

/**
 * Iterate over the ./blocks/build subdirectories and register a block for each of them
 */
function blaze_register_blocks()
{
    $subdirs = glob(__DIR__ . '/../blocks/build/*', GLOB_ONLYDIR);

    foreach ($subdirs as $block_dir) {
        register_block_type($block_dir);
    }
}

add_action('init', 'blaze_register_blocks');
