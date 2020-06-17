export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categoriesAPI = await fetch(url, { mode: 'no-cors' })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return categoriesAPI;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url;
  if (categoryId && query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const seachAPI = await fetch(url, { mode: 'no-cors' })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return seachAPI;
}
