let cart = [];
let total = 0;

const loadAllCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
  }
};

const removeActive = () => {
  const categoryBtn = document.querySelectorAll(".category-btn");
  categoryBtn.forEach((btn) => btn.classList.remove("active"));
};

const loadPlantDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlantDetails(data.plants));
};

const displayPlantDetails = (plant) => {
  //   console.log(plant);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `<div class="space-y-4">
            <h1 class="text-2xl font-bold">${plant.name}</h1>
            <img src="${plant.image}" class=" rounded-lg object-cover mb-4 w-full h-[500px]" alt="">
            <h2 class="text-gray-800"><span class="font-semibold text-black">Catagory:</span> ${plant.category}</h2>
            <h1 class="text-gray-800"><span class="font-semibold text-black">Price: ৳</span> ${plant.price}</h1>
            <p class="text-gray-800"><span class="font-semibold text-black">Description:</span> ${plant.description}</p>

        </div>`;
  document.getElementById("plant_modal").showModal();
};

const loadTrees = (id) => {
  manageSpinner(true);
  // console.log(id)
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`cat-btn-${id}`);
      //   console.log(clickBtn)
      clickBtn.classList.add("active");
      displayTrees(data.plants);
    });
};
// displaytree
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
    <div class="bg-white p-5 space-y-3 rounded-lg shadow">
                <img src=${tree.image} alt="" class="w-[320px] h-[280px] rounded-lg object-cover mb-4">
                <h2 onclick="loadPlantDetail(${tree.id})" class="font-semibold hover:text-[#15803D] hover:underline hover:text-2xl cursor-pointer">${tree.name}</h2>
                <p class="text-gray-600 h-[150px]">${tree.description}</p>
                <div class="flex justify-between">
                    <button class="bg-[#DCFCE7] text-[#15803D] rounded-2xl px-4 py-1 text-sm">${tree.category}</button>
                    <p>৳${tree.price}</p>
                </div>
                <button class="bg-[#15803D] w-full hover:scale-110 py-3 text-white rounded-4xl whitespace-nowrap cursor-pointer add-to-cart" data-name="${tree.name}" data-price="${tree.price}">Add to Cart</button>
            </div>
    `;
    cardContainer.append(card);
  }
  manageSpinner(false);
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button)
      const name = button.getAttribute("data-name");
      const price = parseInt(button.getAttribute("data-price"));
      alert(`${name} has been added to the cart.`)
      // console.log(name,price )
      cart.push({ name, price });
      total += price;
      updateCartDisplay();
    });
  });
};

const displayCategories = (categories) => {
  const categoryLists = document.getElementById("category-lists");
  categoryLists.innerHTML = "";
  //   console.log(categories)
  for (const cat of categories) {
    // console.log(cat);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button id="cat-btn-${cat.id}" onclick="loadTrees(${cat.id})" class="cursor-pointer hover:bg-[#15803D] hover:w-full text-left p-2 hover:text-white rounded-sm category-btn">${cat.category_name}</button>`;
    categoryLists.append(btnDiv);
  }
};

const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllTrees(data.plants));
};

const displayAllTrees = (trees) => {
  // console.log(trees)
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  for (let tree of trees) {
    // console.log(tree)
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white p-5 space-y-3 rounded-lg shadow">
                <img src=${tree.image} alt="" class="w-[320px] h-[280px] rounded-lg object-cover mb-4">
                <h2 onclick="loadPlantDetail(${tree.id})" class="font-semibold hover:text-[#15803D] hover:underline hover:text-2xl cursor-pointer">${tree.name}</h2>
                <p class="text-gray-600 h-[150px]">${tree.description}</p>
                <div class="flex justify-between">
                    <button class="bg-[#DCFCE7] text-[#15803D] rounded-2xl px-4 py-1 text-sm">${tree.category}</button>
                    <p>৳${tree.price}</p>
                </div>
                <button class="bg-[#15803D] w-full hover:scale-110 py-3 text-white rounded-4xl whitespace-nowrap cursor-pointer add-to-cart" data-name="${tree.name}" data-price="${tree.price}" >Add to Cart</button>
            </div>
    `;
    cardContainer.append(card);
  }
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      
      // console.log(button)
      const name = button.getAttribute("data-name");
      const price = parseInt(button.getAttribute("data-price"));
      alert(`${name} has been added to the cart.`)
      // console.log(name,price )
      cart.push({ name, price });
      total += price;
      updateCartDisplay();
    });
  });
};

const updateCartDisplay = () => {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    const noItems = document.createElement("li");
    noItems.innerHTML = `<li>No Items Yet</li>`;
    cartItems.appendChild(noItems);
    cartTotal.textContent = "৳0";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("bg-[#F0FDF4]", "p-5", "rounded-lg");
      li.innerHTML = `<div class="flex justify-between"> <div>${item.name} - ৳${item.price}</div>
      <div><button class="remove-item hover:scale-150 cursor-pointer" data-index="${index}">❌</button> </div></div>`;
      cartItems.appendChild(li);
    });
    cartTotal.textContent = `৳${total}`;
  }
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"));
      const removedItem = cart.splice(index, 1)[0];
      total -= removedItem.price;
      updateCartDisplay();
    });
  });
};

updateCartDisplay();
loadAllCategories();
loadAllTrees();
