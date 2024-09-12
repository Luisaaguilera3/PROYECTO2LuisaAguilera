
const Drones = [
{
  name: 'Drone - DJI Air 3',
  image: "./assets/DJI Air 3.webp",
  price: 1028,
  stars: 4,
  reviews: 255,
},
{
  name: 'Mini Drone - DJI Mini 2 SE',
  image: "./assets/DJI Mini 2 SE.webp",
  price: 499,
  stars: 3,
  reviews: 500,
},
{
  name: 'Drone - DJI Mini 4 Pro',
  image: "./assets/DJI Mini 4 Pro.webp",
  price: 1129,
  stars: 4,
  reviews: 250,
},
{
  name: 'Drone - DJI Mavic 3 Pro',
  image: "./assets/DJI Mavic 3 Pro.jpeg",
  price: 2089,
  stars: 5,
  reviews: 2250,
},
{
  name: 'Mini Drone - DJI MINI 3 (DJI RC)',
  image: "./assets/Mini Drone - DJI MINI 3 (DJI RC).webp",
  price: 799,
  stars: 4,
  reviews: 150,
},
{
  name: 'Drone - DJI Avata',
  image: "./assets/DJI Avata.jpeg",
  price: 579,
  stars: 4,
  reviews: 5550,
},
{
  name: 'Drone - DJI Avata 2',
  image: "./assets/DJI Avata 2.jpeg",
  price: 999,
  stars: 4,
  reviews: 630,
},
{
  name: 'Mini Drone - DJI CPMA048801',
  image: "./assets/DJI CPMA048801.webp",
  price: 727,
  stars: 4,
  reviews: 90,
},
{
  name: 'Drone - FPV DJI',
  image: "./assets/FPV DJI.webp",
  price: 289,
  stars: 2,
  reviews: 470,
},
{
  name: 'Drone - Air 2S DJI',
  image: "./assets/Air 2S DJI.jpeg",
  price: 289,
  stars: 4,
  reviews: 830,
},
];
  
const starImages = [
  './assets/2estrella.png', 
  './assets/3estrella.png', 
  './assets/3.2estrella.png',
  './assets/4estrellas.png',
  './assets/5estrellas.png', 
];
  
  
const createFilters = () => {
const filtersContainer = document.querySelector("#filters");
  
const nameSelect = document.createElement('select');
nameSelect.id = 'nameFilter';
  
const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.textContent = 'Select a drone name';
nameSelect.appendChild(defaultOption);
  
Drones.forEach(drone => {
const option = document.createElement('option');
option.value = drone.name;
option.textContent = drone.name;
nameSelect.appendChild(option);
});
  
filtersContainer.appendChild(nameSelect);
  
const priceInput = document.createElement('input');
priceInput.id = 'priceFilter';
priceInput.type = 'number';
priceInput.placeholder = 'Enter max price...'
  
filtersContainer.appendChild(priceInput);
  
const clearFiltersButton = document.createElement('button');
clearFiltersButton.id = 'clearFilters';
clearFiltersButton.textContent = 'Clear Filters';
filtersContainer.appendChild(clearFiltersButton);

nameSelect.addEventListener('change', applyFilters);
priceInput.addEventListener('input', applyFilters);
clearFiltersButton.addEventListener('click', clearFilters);
};

const printDrones = (filtereddrones, message = '') => {
const DronesSection = document.querySelector("#Products");
DronesSection.innerHTML = '';

if (message) {
const messageElement = document.createElement("h3");
messageElement.textContent = message;
DronesSection.appendChild(messageElement);
}
  
  
filtereddrones.forEach((drone) => {
const name = document.createElement("h2");
const img = document.createElement("img");
const price = document.createElement("h3");
const divInfo = document.createElement("div");
  
const divStars = document.createElement("div");
const reviews = document.createElement("p");
const divMoreInfo = document.createElement("div");
  
const divProducts = document.createElement("div");
  
name.textContent = drone.name;
img.src = drone.image;
price.textContent = `$${drone.price}`;

const starImg = document.createElement('img');
starImg.src = starImages[drone.stars - 1];  
starImg.classList.add('star-image'); 
divStars.appendChild(starImg);
  
reviews.textContent = `${drone.reviews} reviews`;

divInfo.appendChild(name);
divInfo.appendChild(img);
divInfo.appendChild(price);
divMoreInfo.appendChild(divStars);
divMoreInfo.appendChild(reviews);
divProducts.appendChild(divInfo);
divProducts.appendChild(divMoreInfo);
DronesSection.appendChild(divProducts);
  
divProducts.classList.add("product");
name.classList.add("product-name");
img.classList.add("product-image");
price.classList.add("product-price");
divInfo.classList.add("product-info");
divMoreInfo.classList.add("product-more-info");
});
};

const getRandomDrones = (count) => {
const shuffled = [...Drones].sort(() => 0.5 - Math.random());
return shuffled.slice(0, count);
};

const applyFilters = () => {
const nameFilter = document.querySelector("#nameFilter").value;
const priceFilter = parseFloat(document.querySelector("#priceFilter").value);
  
const filteredDrones = Drones.filter(drone => {
const matchesName = nameFilter === '' || drone.name === nameFilter;
const matchesPrice = isNaN(priceFilter) || drone.price <= priceFilter;
return matchesName && matchesPrice;
});

if (filteredDrones.length === 0) {
const randomDrones = getRandomDrones(3);
printDrones(randomDrones, "Suggested Products");
} else {
printDrones(filteredDrones);

}
};

const clearFilters = () => {
document.querySelector("#nameFilter").value = '';  
document.querySelector("#priceFilter").value = '';  
printDrones(Drones); 
};

createFilters();
printDrones(Drones);