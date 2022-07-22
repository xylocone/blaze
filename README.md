# Blaze

Blaze is a compact Wordpress Block theme, suitable for a minimalist website.

## What?

Blaze is essentially a collection of two blocks: _Jumbotron_ and _Section_. _Section_ blocks can only be placed inside a _Jumbotron_ block. Two block patterns using these two blocks have also been defined, along with a _Front Page_ template.

## How to use?

- Download `blaze.zip` from above and place it in your `themes/` directory.
- Blaze has _Section_ blocks, which fetch content from pages with the specified slug. So, create some pages and note their slugs.
- In the _Site Editor_, open the _Front Page_ template. Edit the blocks and their properties to your desire. To change the source from which a _Section_ block fetches its content, change its _Source Page Slug_ property.

## Limitations

In its current state, Blaze is usable but can use several improvement. It was made as a fun project and is my first foray into the field of Full Site Editing themes.

- The page from which a _Section_ block fetches its content should preferrably be written with the Classic Editor, or should, at the least, not be dependent on any assets (i.e. paragraphs blocks are fine; a complex block with its own stylesheets will be rendered without its styles by the Section)

- The Section labels are not responsive. More often than not, that makes the whole page unresponsive. They might not look on small screens.

- The whole dragging UI in the editor can be a little jarring at times. Also, there's no snapping, so it's hard to have a considerable degree of precision. Personally, I think dragging can be used to get a rough outline, which can then be fine-tuned by manually tweaking properties in the _Settings Sidebar_.

These limitations can certainly be addressed with changes, and I may perhaps do something about them in the future...

## LICENSE

MIT
