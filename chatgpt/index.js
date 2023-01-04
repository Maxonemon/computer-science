const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  searchRecipes(searchTerm);
});

function searchRecipes(searchTerm) {
  const recipes = document.querySelectorAll('.recipes li');
  recipes.forEach((recipe) => {
    const title = recipe.querySelector('h3').textContent;
    if (title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
}
