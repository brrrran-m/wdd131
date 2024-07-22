import { recipes } from './recipes.mjs';

// Function to generate a random number
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Tags Template Function
function tagsTemplate(tags) {
    return tags.map(tag => `<span>${tag}</span>`).join('');
}

// Rating Template Function
function ratingTemplate(rating) {
    return `${'⭐'.repeat(rating)}${'☆'.repeat(5 - rating)}`;
}

// Recipe Template Function
function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="content">
                <h2>${recipe.title}</h2>
                <div class="tags">
                    ${tagsTemplate(recipe.tags)}
                </div>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </div>
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
}

// Function to render recipes
function renderRecipes(recipeList) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

// Initialize function to display random recipe
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();

// Filter Recipes Function
function filterRecipes(query) {
    return recipes
        .filter(recipe =>
            recipe.title.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        )
        .sort((a, b) => a.title.localeCompare(b.title));
}

// Search Handler Function
function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Event Listener for search form
document.getElementById('search-form').addEventListener('submit', searchHandler);
