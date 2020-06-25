export function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categoriesAPI = fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(`API ERROR: ${error}`));
  return categoriesAPI;
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  let url;
  if (categoryId && !query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  if (query && !categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  if (categoryId && query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  const seachAPI = fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(`API ERROR: ${error}`));
  return seachAPI;
}
