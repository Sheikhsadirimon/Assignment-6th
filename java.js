const loadAllCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const loadTrees = (id) => {
  // console.log(id)
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};
// displaylevelword
const displayTrees = (trees) => {
  const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";

  for (let tree of trees) {
    // console.log(tree)
    const card = document.createElement("div");
    card.innerHTML = `
    <p>cats</p>
    `;
    cardContainer.append(card);
  }
};

const displayCategories = (categories) => {
  const categoryLists = document.getElementById("category-lists");
  categoryLists.innerHTML = "";
  //   console.log(categories)
  for (const cat of categories) {
    // console.log(cat);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button onclick="loadTrees(${cat.id})" class="cursor-pointer hover:bg-[#15803D] hover:w-full text-left p-2 hover:text-white rounded-sm">${cat.category_name}</button>`;
    categoryLists.append(btnDiv);
  }
};

loadAllCategories();

// const loadAllTrees = () => {
//   fetch("https://openapi.programming-hero.com/api/plants")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// loadAllTrees();
