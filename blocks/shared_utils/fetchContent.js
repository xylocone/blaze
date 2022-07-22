/**
 * Get the content of the page with the given slug
 * @param {String} slug Slug og the source page
 * @returns API fetched content as a String
 */
export default async function fetchContent(slug) {
  const response = await fetch(
    `/wp-json/wp/v2/pages?slug=${slug}&_fields=content`
  );
  const json = await response.json();
  if (json.length == 0) throw new Error();

  return json[0].content.rendered;
}
