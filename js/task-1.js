const categories = document.getElementById('categories');
const items = categories.querySelectorAll('.item');

const numberOfCategories = `Number of categories: ${items.length}`;
console.log(numberOfCategories);

items.forEach(category => {
    const nameOfCategory = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;

    console.log(`Category: ${nameOfCategory}`);
    console.log(`Elements: ${numberOfElements}`);
});


