import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="content">
                <h2>${recipe.title}</h2>
                <div class="tags">
                    ${recipe.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
                </div>
                <p>${recipe.description}</p>
            </div>
        `;

        recipesContainer.appendChild(recipeElement);
    });
});
