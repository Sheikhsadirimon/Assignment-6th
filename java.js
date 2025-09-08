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
  cardContainer.innerHTML = "";

  // {
  //     "id": 16,
  //     "image": "https://i.ibb.co.com/fdYphDNS/pine-min.jpg",
  //     "name": "Pine",
  //     "description": "An evergreen tree with needle-like leaves and fragrant resin. Commonly used for timber, paper production, and landscaping.",
  //     "category": "Evergreen Tree",
  //     "price": 1500
  // }

  for (let tree of trees) {
    // console.log(tree)
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white p-5 space-y-3 rounded-lg">
                <img src=${tree.image} alt="" class="w-[320px] h-[280px] rounded-lg object-cover mb-4">
                <h2 class="font-semibold">${tree.name}</h2>
                <p class="text-gray-600 h-[150px]">${tree.description}</p>
                <div class="flex justify-between">
                    <button class="bg-[#DCFCE7] text-[#15803D] rounded-2xl px-4 py-1 text-sm">${tree.category}</button>
                    <p>৳${tree.price}</p>
                </div>
                <button class="bg-[#15803D] lg:px-26 px-27 py-3 text-white rounded-4xl whitespace-nowrap cursor-pointer">Add to Cart</button>
            </div>
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

const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllTrees(data.plants));
};

const displayAllTrees =(trees)=>{
    // console.log(trees)
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML=""
    for(let tree of trees){
        // console.log(tree)
        const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white p-5 space-y-3 rounded-lg">
                <img src=${tree.image} alt="" class="w-[320px] h-[280px] rounded-lg object-cover mb-4">
                <h2 class="font-semibold">${tree.name}</h2>
                <p class="text-gray-600 h-[150px]">${tree.description}</p>
                <div class="flex justify-between">
                    <button class="bg-[#DCFCE7] text-[#15803D] rounded-2xl px-4 py-1 text-sm">${tree.category}</button>
                    <p>৳${tree.price}</p>
                </div>
                <button class="bg-[#15803D] lg:px-26 px-27 py-3 text-white rounded-4xl whitespace-nowrap cursor-pointer">Add to Cart</button>
            </div>
    `;
    cardContainer.append(card);
    }
}

loadAllTrees();
